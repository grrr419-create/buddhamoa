create or replace function public.get_site_stats_for_period(
  target_site_key text default 'buddhamoa',
  target_date date default null,
  period_granularity text default 'day'
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  requester_email text := lower(coalesce(auth.jwt()->>'email', ''));
  normalized_site_key text := left(coalesce(nullif(trim(target_site_key), ''), 'buddhamoa'), 80);
  normalized_granularity text := lower(coalesce(nullif(trim(period_granularity), ''), 'day'));
  today_in_korea date := (now() at time zone 'Asia/Seoul')::date;
  selected_date date := least(coalesce(target_date, today_in_korea), today_in_korea);
  period_start_date date;
  period_end_date date;
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

  period_start_date := case normalized_granularity
    when 'week' then selected_date - 6
    when 'month' then date_trunc('month', selected_date)::date
    else selected_date
  end;
  period_end_date := selected_date + 1;
  period_start_at := period_start_date::timestamp at time zone 'Asia/Seoul';
  period_end_at := period_end_date::timestamp at time zone 'Asia/Seoul';

  return jsonb_build_object(
    'generated_at', now(),
    'site_key', normalized_site_key,
    'target_date', selected_date,
    'period_granularity', normalized_granularity,
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
    'total_count', coalesce((
      select total_count
      from public.site_view_counters
      where site_key = normalized_site_key
    ), 0),
    'selected_count', coalesce((
      select sum(view_count)
      from public.site_daily_view_counters
      where site_key = normalized_site_key
        and view_date >= period_start_date
        and view_date < period_end_date
    ), 0),
    'daily', coalesce((
      select jsonb_agg(
        jsonb_build_object('date', view_date, 'views', view_count)
        order by view_date desc
      )
      from (
        select view_date, view_count
        from public.site_daily_view_counters
        where site_key = normalized_site_key
          and view_date >= period_start_date
          and view_date < period_end_date
        order by view_date desc
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

revoke all on function public.get_site_stats_for_period(text, date, text) from public;
grant execute on function public.get_site_stats_for_period(text, date, text) to authenticated;

comment on function public.get_site_stats_for_period(text, date, text) is
  'Returns site stats scoped to a selected KST date and day/week/month period for authorized stats admins.';
