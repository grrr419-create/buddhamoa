create table if not exists public.stats_admins (
  email text primary key,
  created_at timestamptz not null default now(),
  constraint stats_admins_email_normalized_check
    check (email = lower(email) and position('@' in email) > 1)
);

alter table public.stats_admins enable row level security;

revoke all on table public.stats_admins from anon, authenticated;

create or replace function public.get_site_stats(
  target_site_key text default 'buddhamoa',
  day_limit integer default 30
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  requester_email text := lower(coalesce(auth.jwt()->>'email', ''));
  normalized_site_key text := left(coalesce(nullif(trim(target_site_key), ''), 'buddhamoa'), 80);
  safe_day_limit integer := least(greatest(coalesce(day_limit, 30), 1), 90);
  today_in_korea date := (now() at time zone 'Asia/Seoul')::date;
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

  return jsonb_build_object(
    'generated_at', now(),
    'site_key', normalized_site_key,
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
    'daily', coalesce((
      select jsonb_agg(
        jsonb_build_object('date', view_date, 'views', view_count)
        order by view_date desc
      )
      from (
        select view_date, view_count
        from public.site_daily_view_counters
        where site_key = normalized_site_key
        order by view_date desc
        limit safe_day_limit
      ) daily_rows
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
        group by device_type
        order by views desc, device_type asc
      ) device_rows
    ), '[]'::jsonb)
  );
end;
$$;

revoke all on function public.get_site_stats(text, integer) from public;
grant execute on function public.get_site_stats(text, integer) to authenticated;

comment on table public.stats_admins is
  'Lowercase Supabase Auth email allowlist for the private stats page.';

comment on function public.get_site_stats(text, integer) is
  'Returns aggregated site stats only for authenticated emails listed in stats_admins.';
