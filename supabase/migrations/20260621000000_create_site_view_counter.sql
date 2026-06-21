create table if not exists public.page_view_events (
  id bigint generated always as identity primary key,
  site_key text not null,
  pathname text not null,
  referrer_domain text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  device_type text not null default 'unknown',
  language text,
  screen_width integer,
  viewed_at timestamptz not null default now(),
  constraint page_view_events_device_type_check
    check (device_type in ('desktop', 'tablet', 'mobile', 'unknown')),
  constraint page_view_events_screen_width_check
    check (screen_width is null or (screen_width > 0 and screen_width <= 100000))
);

create table if not exists public.site_view_counters (
  site_key text primary key,
  total_count bigint not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.site_daily_view_counters (
  site_key text not null,
  view_date date not null,
  view_count bigint not null default 0,
  updated_at timestamptz not null default now(),
  primary key (site_key, view_date)
);

create index if not exists page_view_events_site_viewed_at_idx
  on public.page_view_events (site_key, viewed_at desc);

create index if not exists page_view_events_pathname_idx
  on public.page_view_events (pathname);

create index if not exists page_view_events_referrer_domain_idx
  on public.page_view_events (referrer_domain)
  where referrer_domain is not null;

create index if not exists page_view_events_utm_source_idx
  on public.page_view_events (utm_source)
  where utm_source is not null;

alter table public.page_view_events enable row level security;
alter table public.site_view_counters enable row level security;
alter table public.site_daily_view_counters enable row level security;

revoke all on table public.page_view_events from anon, authenticated;
revoke all on table public.site_view_counters from anon, authenticated;
revoke all on table public.site_daily_view_counters from anon, authenticated;

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
  normalized_language text := nullif(left(trim(coalesce(payload->>'language', '')), 24), '');
  normalized_screen_width integer := null;
  today_in_korea date := (now() at time zone 'Asia/Seoul')::date;
  total_views bigint;
  today_views bigint;
begin
  if normalized_device_type not in ('desktop', 'tablet', 'mobile', 'unknown') then
    normalized_device_type := 'unknown';
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

  return jsonb_build_object(
    'today_count', today_views,
    'total_count', total_views
  );
end;
$$;

revoke all on function public.record_site_view(jsonb) from public;
grant execute on function public.record_site_view(jsonb) to anon;

comment on function public.record_site_view(jsonb) is
  'Records one privacy-minimal site page view and returns KST today and total counters.';
