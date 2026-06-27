alter table public.page_view_events
  add column if not exists visitor_id text;

create index if not exists page_view_events_site_visitor_viewed_idx
  on public.page_view_events (site_key, visitor_id, viewed_at desc)
  where visitor_id is not null;

create or replace function public.record_site_view(payload jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  normalized_site_key text := left(
    coalesce(nullif(trim(payload->>'site_key'), ''), 'buddhamoa'),
    80
  );
  normalized_pathname text := left(
    coalesce(nullif(trim(payload->>'pathname'), ''), '/'),
    300
  );
  normalized_referrer_domain text := nullif(
    left(
      lower(
        regexp_replace(
          coalesce(nullif(trim(payload->>'referrer_domain'), ''), ''),
          '^www\.',
          ''
        )
      ),
      255
    ),
    ''
  );
  normalized_device_type text := lower(
    coalesce(nullif(trim(payload->>'device_type'), ''), 'unknown')
  );
  normalized_visitor_id text := nullif(
    left(lower(trim(coalesce(payload->>'visitor_id', ''))), 80),
    ''
  );
  normalized_language text := nullif(left(trim(coalesce(payload->>'language', '')), 24), '');
  normalized_screen_width integer := null;
  today_in_korea date := (now() at time zone 'Asia/Seoul')::date;
  today_start_at timestamptz := today_in_korea::timestamp at time zone 'Asia/Seoul';
  tomorrow_start_at timestamptz := (today_in_korea + 1)::timestamp at time zone 'Asia/Seoul';
  total_views bigint;
  today_views bigint;
  total_unique_visitors bigint;
  today_unique_visitors bigint;
begin
  if normalized_device_type not in ('desktop', 'tablet', 'mobile', 'unknown') then
    normalized_device_type := 'unknown';
  end if;

  if normalized_visitor_id is not null
    and normalized_visitor_id !~ '^[a-z0-9][a-z0-9_-]{15,79}$'
  then
    normalized_visitor_id := null;
  end if;

  if coalesce(payload->>'screen_width', '') ~ '^[0-9]+$' then
    normalized_screen_width := least((payload->>'screen_width')::integer, 100000);

    if normalized_screen_width < 1 then
      normalized_screen_width := null;
    end if;
  end if;

  insert into public.page_view_events (
    site_key,
    pathname,
    visitor_id,
    referrer_domain,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    device_type,
    language,
    screen_width
  )
  values (
    normalized_site_key,
    normalized_pathname,
    normalized_visitor_id,
    normalized_referrer_domain,
    nullif(left(trim(coalesce(payload->>'utm_source', '')), 180), ''),
    nullif(left(trim(coalesce(payload->>'utm_medium', '')), 180), ''),
    nullif(left(trim(coalesce(payload->>'utm_campaign', '')), 180), ''),
    nullif(left(trim(coalesce(payload->>'utm_term', '')), 180), ''),
    nullif(left(trim(coalesce(payload->>'utm_content', '')), 180), ''),
    normalized_device_type,
    normalized_language,
    normalized_screen_width
  );

  insert into public.site_view_counters (site_key, total_count)
  values (normalized_site_key, 1)
  on conflict (site_key) do update
    set total_count = public.site_view_counters.total_count + 1,
        updated_at = now()
  returning total_count into total_views;

  insert into public.site_daily_view_counters (site_key, view_date, view_count)
  values (normalized_site_key, today_in_korea, 1)
  on conflict (site_key, view_date) do update
    set view_count = public.site_daily_view_counters.view_count + 1,
        updated_at = now()
  returning view_count into today_views;

  select count(distinct visitor_id)::bigint
  into today_unique_visitors
  from public.page_view_events
  where site_key = normalized_site_key
    and visitor_id is not null
    and viewed_at >= today_start_at
    and viewed_at < tomorrow_start_at;

  select count(distinct visitor_id)::bigint
  into total_unique_visitors
  from public.page_view_events
  where site_key = normalized_site_key
    and visitor_id is not null;

  return jsonb_build_object(
    'today_count', today_views,
    'total_count', total_views,
    'today_unique_visitors', coalesce(today_unique_visitors, 0),
    'total_unique_visitors', coalesce(total_unique_visitors, 0)
  );
end;
$$;

revoke all on function public.record_site_view(jsonb) from public;
grant execute on function public.record_site_view(jsonb) to anon;

comment on function public.record_site_view(jsonb) is
  'Records one privacy-minimal site page view with an anonymous browser visitor id and returns KST today, total, and unique visitor counters.';

create or replace function public.get_site_stats_for_period(
  target_site_key text default 'buddhamoa',
  start_date date default null,
  end_date date default null,
  analysis_granularity text default 'day'
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  requester_email text := lower(coalesce(auth.jwt()->>'email', ''));
  normalized_site_key text := left(coalesce(nullif(trim(target_site_key), ''), 'buddhamoa'), 80);
  normalized_granularity text := lower(coalesce(nullif(trim(analysis_granularity), ''), 'day'));
  today_in_korea date := (now() at time zone 'Asia/Seoul')::date;
  requested_start_date date := coalesce(start_date, today_in_korea);
  requested_end_date date := coalesce(end_date, coalesce(start_date, today_in_korea));
  swap_date date;
  period_start_date date;
  period_end_date date;
  period_end_inclusive date;
  today_start_at timestamptz := today_in_korea::timestamp at time zone 'Asia/Seoul';
  tomorrow_start_at timestamptz := (today_in_korea + 1)::timestamp at time zone 'Asia/Seoul';
  period_start_at timestamptz;
  period_end_at timestamptz;
begin
  if requester_email = ''
    or not exists (
      select 1
      from public.stats_admins
      where email = requester_email
    )
  then
    raise exception 'not authorized' using errcode = '42501';
  end if;

  if normalized_granularity not in ('day', 'week', 'month') then
    normalized_granularity := 'day';
  end if;

  if requested_end_date < requested_start_date then
    swap_date := requested_start_date;
    requested_start_date := requested_end_date;
    requested_end_date := swap_date;
  end if;

  period_start_date := least(requested_start_date, today_in_korea);
  period_end_inclusive := least(requested_end_date, today_in_korea);

  if period_end_inclusive < period_start_date then
    period_start_date := period_end_inclusive;
  end if;

  period_end_date := period_end_inclusive + 1;

  if period_end_date - period_start_date > 370 then
    period_start_date := period_end_date - 370;
  end if;

  period_start_at := period_start_date::timestamp at time zone 'Asia/Seoul';
  period_end_at := period_end_date::timestamp at time zone 'Asia/Seoul';

  return jsonb_build_object(
    'generated_at', now(),
    'site_key', normalized_site_key,
    'analysis_granularity', normalized_granularity,
    'period', jsonb_build_object(
      'start_date', period_start_date,
      'end_date', period_end_date,
      'day_count', period_end_date - period_start_date
    ),
    'today_count', coalesce((
      select view_count
      from public.site_daily_view_counters
      where site_key = normalized_site_key
        and view_date = today_in_korea
    ), 0),
    'today_unique_visitors', coalesce((
      select count(distinct visitor_id)
      from public.page_view_events
      where site_key = normalized_site_key
        and visitor_id is not null
        and viewed_at >= today_start_at
        and viewed_at < tomorrow_start_at
    ), 0),
    'total_count', coalesce((
      select total_count
      from public.site_view_counters
      where site_key = normalized_site_key
    ), 0),
    'total_unique_visitors', coalesce((
      select count(distinct visitor_id)
      from public.page_view_events
      where site_key = normalized_site_key
        and visitor_id is not null
    ), 0),
    'selected_count', coalesce((
      select sum(view_count)
      from public.site_daily_view_counters
      where site_key = normalized_site_key
        and view_date >= period_start_date
        and view_date < period_end_date
    ), 0),
    'selected_unique_visitors', coalesce((
      select count(distinct visitor_id)
      from public.page_view_events
      where site_key = normalized_site_key
        and visitor_id is not null
        and viewed_at >= period_start_at
        and viewed_at < period_end_at
    ), 0),
    'daily', coalesce((
      select jsonb_agg(
        jsonb_build_object(
          'date', view_date,
          'views', view_count,
          'visitors', visitor_count
        )
        order by view_date desc
      )
      from (
        select
          daily_counts.view_date,
          daily_counts.view_count,
          coalesce(daily_visitors.visitor_count, 0) as visitor_count
        from (
          select view_date, view_count
          from public.site_daily_view_counters
          where site_key = normalized_site_key
            and view_date >= period_start_date
            and view_date < period_end_date
        ) daily_counts
        left join (
          select
            (viewed_at at time zone 'Asia/Seoul')::date as view_date,
            count(distinct visitor_id)::bigint as visitor_count
          from public.page_view_events
          where site_key = normalized_site_key
            and visitor_id is not null
            and viewed_at >= period_start_at
            and viewed_at < period_end_at
          group by 1
        ) daily_visitors using (view_date)
        order by daily_counts.view_date desc
      ) daily_rows
    ), '[]'::jsonb),
    'daily_referrers', coalesce((
      select jsonb_agg(
        jsonb_build_object('date', view_date, 'source', source, 'views', views)
        order by view_date desc, views desc, source asc
      )
      from (
        select view_date, source, views
        from (
          select
            referrer_counts.*,
            row_number() over (
              partition by view_date
              order by views desc, source asc
            ) as source_rank
          from (
            select
              (viewed_at at time zone 'Asia/Seoul')::date as view_date,
              coalesce(referrer_domain, 'direct') as source,
              count(*)::bigint as views
            from public.page_view_events
            where site_key = normalized_site_key
              and viewed_at >= period_start_at
              and viewed_at < period_end_at
            group by 1, 2
          ) referrer_counts
        ) ranked_referrers
        where source_rank <= 10
        order by view_date desc, views desc, source asc
      ) daily_referrer_rows
    ), '[]'::jsonb),
    'top_referrers', coalesce((
      select jsonb_agg(
        jsonb_build_object('source', source, 'views', views)
        order by views desc, source asc
      )
      from (
        select coalesce(referrer_domain, 'direct') as source, count(*)::bigint as views
        from public.page_view_events
        where site_key = normalized_site_key
          and viewed_at >= period_start_at
          and viewed_at < period_end_at
        group by 1
        order by views desc, source asc
        limit 10
      ) referrer_rows
    ), '[]'::jsonb),
    'top_paths', coalesce((
      select jsonb_agg(
        jsonb_build_object('path', pathname, 'views', views)
        order by views desc, pathname asc
      )
      from (
        select pathname, count(*)::bigint as views
        from public.page_view_events
        where site_key = normalized_site_key
          and viewed_at >= period_start_at
          and viewed_at < period_end_at
        group by pathname
        order by views desc, pathname asc
        limit 10
      ) path_rows
    ), '[]'::jsonb),
    'utm_sources', coalesce((
      select jsonb_agg(
        jsonb_build_object('source', source, 'medium', medium, 'campaign', campaign, 'views', views)
        order by views desc, source asc, medium asc, campaign asc
      )
      from (
        select
          coalesce(utm_source, 'none') as source,
          coalesce(utm_medium, 'none') as medium,
          coalesce(utm_campaign, 'none') as campaign,
          count(*)::bigint as views
        from public.page_view_events
        where site_key = normalized_site_key
          and viewed_at >= period_start_at
          and viewed_at < period_end_at
        group by 1, 2, 3
        order by views desc, source asc, medium asc, campaign asc
        limit 10
      ) utm_rows
    ), '[]'::jsonb),
    'devices', coalesce((
      select jsonb_agg(
        jsonb_build_object('device', device_type, 'views', views)
        order by views desc, device_type asc
      )
      from (
        select device_type, count(*)::bigint as views
        from public.page_view_events
        where site_key = normalized_site_key
          and viewed_at >= period_start_at
          and viewed_at < period_end_at
        group by device_type
        order by views desc, device_type asc
      ) device_rows
    ), '[]'::jsonb)
  );
end;
$$;

revoke all on function public.get_site_stats_for_period(text, date, date, text) from public;
grant execute on function public.get_site_stats_for_period(text, date, date, text) to authenticated;

comment on function public.get_site_stats_for_period(text, date, date, text) is
  'Returns site stats scoped to a selected KST date range with page views and anonymous unique visitor counts for authorized stats admins.';

notify pgrst, 'reload schema';
