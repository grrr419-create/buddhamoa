import { createClient } from "@supabase/supabase-js";

type CountValue = string | number | null | undefined;

type DailyRow = {
  date?: string;
  views?: CountValue;
};

type ReferrerRow = {
  source?: string;
  views?: CountValue;
};

type DailyReferrerRow = {
  date?: string;
  source?: string;
  views?: CountValue;
};

type PathRow = {
  path?: string;
  views?: CountValue;
};

type UtmRow = {
  source?: string;
  medium?: string;
  campaign?: string;
  views?: CountValue;
};

type DeviceRow = {
  device?: string;
  views?: CountValue;
};

type Granularity = "day" | "week" | "month";

type DailyPoint = {
  date: string;
  label: string;
  views: number;
};

type TrendPoint = {
  key: string;
  label: string;
  shortLabel: string;
  views: number;
};

type ReferrerShare = {
  color: string;
  percentage: number;
  source: string;
  views: number;
};

type ReferrerPeriod = {
  key: string;
  label: string;
  shortLabel: string;
  shares: ReferrerShare[];
  total: number;
};

type ReferrerShareData = {
  legend: ReferrerShare[];
  periods: ReferrerPeriod[];
};

type StatsResponse = {
  generated_at?: string;
  today_count?: CountValue;
  total_count?: CountValue;
  daily?: DailyRow[];
  daily_referrers?: DailyReferrerRow[];
  top_referrers?: ReferrerRow[];
  top_paths?: PathRow[];
  utm_sources?: UtmRow[];
  devices?: DeviceRow[];
};

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || "";
const siteKey = import.meta.env.PUBLIC_VIEW_COUNTER_SITE_KEY || "buddhamoa";
const basePath = import.meta.env.BASE_URL || "/";
const statsLoginIntentKey = "buddhamoa:stats-login-intent";

const root = document.querySelector<HTMLElement>("[data-stats-dashboard]");
const loginForm = document.querySelector<HTMLFormElement>("[data-stats-login]");
const emailInput = document.querySelector<HTMLInputElement>("[data-stats-email]");
const sessionActions = document.querySelector<HTMLElement>("[data-stats-session]");
const userLabel = document.querySelector<HTMLElement>("[data-stats-user]");
const content = document.querySelector<HTMLElement>("[data-stats-content]");
const message = document.querySelector<HTMLElement>("[data-stats-message]");
const refreshButton = document.querySelector<HTMLButtonElement>("[data-stats-refresh]");
const logoutButton = document.querySelector<HTMLButtonElement>("[data-stats-logout]");
const rangeSelect = document.querySelector<HTMLSelectElement>("[data-stats-range]");
const granularityInputs = Array.from(
  document.querySelectorAll<HTMLInputElement>('input[name="stats-granularity"]'),
);
const todayTotal = document.querySelector<HTMLElement>('[data-stats-total="today"]');
const allTimeTotal = document.querySelector<HTMLElement>('[data-stats-total="total"]');
const selectedTotal = document.querySelector<HTMLElement>('[data-stats-total="selected"]');
const averageTotal = document.querySelector<HTMLElement>('[data-stats-total="average"]');
const updatedLabel = document.querySelector<HTMLElement>("[data-stats-updated]");
const trendTitle = document.querySelector<HTMLElement>("[data-stats-trend-title]");
const trendMeta = document.querySelector<HTMLElement>("[data-stats-trend-meta]");
const trendChart = document.querySelector<HTMLElement>("[data-stats-trend-chart]");
const referrerShareMeta = document.querySelector<HTMLElement>("[data-stats-referrer-share-meta]");
const referrerStack = document.querySelector<HTMLElement>("[data-stats-referrer-stack]");
const referrerBars = document.querySelector<HTMLElement>("[data-stats-referrer-bars]");
const pathBars = document.querySelector<HTMLElement>("[data-stats-path-bars]");

let latestStats: StatsResponse | null = null;

const referrerPalette = ["#0a4a30", "#c78b34", "#2563eb", "#7c3aed", "#c2410c", "#0f766e"];
const otherReferrerColor = "#6b7280";

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          autoRefreshToken: true,
          detectSessionInUrl: true,
          persistSession: true,
        },
      })
    : null;

const formatCount = (value: CountValue) => {
  const count = Number(value);
  if (!Number.isFinite(count) || count < 0) return "0";

  return new Intl.NumberFormat("ko-KR").format(count);
};

const formatDate = (value: string | undefined) => {
  if (!value) return "-";

  return value;
};

const toCount = (value: CountValue) => {
  const count = Number(value);
  if (!Number.isFinite(count) || count < 0) return 0;

  return count;
};

const getSelectedRange = () => {
  const range = Number(rangeSelect?.value || 30);
  if ([7, 14, 30, 90].includes(range)) return range;

  return 30;
};

const getSelectedGranularity = (): Granularity => {
  const selected = granularityInputs.find((input) => input.checked)?.value;
  if (selected === "week" || selected === "month") return selected;

  return "day";
};

const parseDateParts = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;

  return { year, month, day };
};

const dateFromIsoDate = (value: string) => {
  const parts = parseDateParts(value);
  if (!parts) return null;

  return new Date(Date.UTC(parts.year, parts.month - 1, parts.day));
};

const toIsoDate = (date: Date) => date.toISOString().slice(0, 10);

const addDays = (value: string, days: number) => {
  const date = dateFromIsoDate(value);
  if (!date) return value;

  date.setUTCDate(date.getUTCDate() + days);
  return toIsoDate(date);
};

const getKoreaToday = () => {
  const parts = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Seoul",
    year: "numeric",
  }).formatToParts(new Date());
  const partValue = (type: string) => parts.find((part) => part.type === type)?.value || "";

  return `${partValue("year")}-${partValue("month")}-${partValue("day")}`;
};

const formatShortDate = (value: string) => {
  const parts = parseDateParts(value);
  if (!parts) return value;

  return `${parts.month}/${parts.day}`;
};

const formatLongDate = (value: string) => {
  const parts = parseDateParts(value);
  if (!parts) return value;

  return `${parts.year}.${String(parts.month).padStart(2, "0")}.${String(parts.day).padStart(2, "0")}`;
};

const getWeekKey = (value: string) => {
  const date = dateFromIsoDate(value);
  if (!date) return value;

  const day = date.getUTCDay();
  const mondayOffset = (day + 6) % 7;
  date.setUTCDate(date.getUTCDate() - mondayOffset);
  return toIsoDate(date);
};

const getMonthKey = (value: string) => {
  const parts = parseDateParts(value);
  if (!parts) return value;

  return `${parts.year}-${String(parts.month).padStart(2, "0")}`;
};

const getPeriodKey = (value: string, granularity: Granularity) => {
  if (granularity === "week") return getWeekKey(value);
  if (granularity === "month") return getMonthKey(value);

  return value;
};

const getPeriodLabel = (key: string, granularity: Granularity) => {
  if (granularity === "week") return `${formatLongDate(key)} 시작 주`;
  if (granularity === "month") return `${key.replace("-", ".")} 월`;

  return formatLongDate(key);
};

const getPeriodShortLabel = (key: string, granularity: Granularity) => {
  if (granularity === "week") return `${formatShortDate(key)}주`;
  if (granularity === "month") {
    const parts = key.split("-").map(Number);
    return parts[1] ? `${parts[1]}월` : key;
  }

  return formatShortDate(key);
};

const getRangeLabel = (dayCount: number) => `최근 ${dayCount}일`;

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const showMessage = (text: string, tone: "info" | "error" = "info") => {
  if (!message) return;

  message.textContent = text;
  message.dataset.tone = tone;
  message.hidden = false;
};

const getErrorMessage = (error: unknown) => {
  if (!error || typeof error !== "object") return "";

  if ("message" in error && typeof error.message === "string") {
    return error.message;
  }

  return "";
};

const hideMessage = () => {
  if (!message) return;

  message.hidden = true;
  message.textContent = "";
};

const normalizeBasePath = (value: string) => {
  const path = value.startsWith("/") ? value : `/${value}`;

  return path.endsWith("/") ? path : `${path}/`;
};

const getAuthRedirectUrl = () => {
  const normalizedBasePath = normalizeBasePath(basePath);
  if (normalizedBasePath === "/") return window.location.origin;

  return new URL(normalizedBasePath, window.location.origin).toString();
};

const rememberStatsLoginIntent = () => {
  try {
    window.localStorage.setItem(statsLoginIntentKey, String(Date.now()));
  } catch {
    // Some privacy modes disable localStorage. The explicit redirect URL still handles normal flows.
  }
};

const clearStatsLoginIntent = () => {
  try {
    window.localStorage.removeItem(statsLoginIntentKey);
  } catch {
    // Ignore unavailable storage.
  }
};

const setSignedOutView = () => {
  if (loginForm) loginForm.hidden = false;
  if (sessionActions) sessionActions.hidden = true;
  if (content) content.hidden = true;
  if (userLabel) userLabel.textContent = "";
};

const setSignedInView = (email: string) => {
  if (loginForm) loginForm.hidden = true;
  if (sessionActions) sessionActions.hidden = false;
  if (content) content.hidden = false;
  if (userLabel) userLabel.textContent = email;
};

const setLoading = (isLoading: boolean) => {
  if (refreshButton) refreshButton.disabled = isLoading;
  if (logoutButton) logoutButton.disabled = isLoading;
  if (rangeSelect) rangeSelect.disabled = isLoading;
  granularityInputs.forEach((input) => {
    input.disabled = isLoading;
  });
};

const renderRows = (
  target: Element | null,
  rows: string[],
  emptyLabel = "데이터가 없습니다.",
  columnCount = 2,
) => {
  if (!target) return;

  target.innerHTML =
    rows.length > 0
      ? rows.join("")
      : `<tr><td colspan="${columnCount}" class="stats-table__empty">${emptyLabel}</td></tr>`;
};

const getDailySeries = (rows: DailyRow[], dayCount: number) => {
  const viewsByDate = new Map<string, number>();
  rows.forEach((row) => {
    if (!row.date) return;
    viewsByDate.set(row.date, toCount(row.views));
  });

  const endDate = getKoreaToday();
  const startDate = addDays(endDate, -(dayCount - 1));
  const series: DailyPoint[] = [];

  for (let offset = 0; offset < dayCount; offset += 1) {
    const date = addDays(startDate, offset);
    series.push({
      date,
      label: formatLongDate(date),
      views: viewsByDate.get(date) || 0,
    });
  }

  return series;
};

const aggregateTrend = (series: DailyPoint[], granularity: Granularity) => {
  if (granularity === "day") {
    return series.map((point) => ({
      key: point.date,
      label: point.label,
      shortLabel: formatShortDate(point.date),
      views: point.views,
    }));
  }

  const grouped = new Map<string, TrendPoint>();

  series.forEach((point) => {
    const key = getPeriodKey(point.date, granularity);
    const existing = grouped.get(key);

    if (existing) {
      existing.views += point.views;
      return;
    }

    grouped.set(key, {
      key,
      label: getPeriodLabel(key, granularity),
      shortLabel: getPeriodShortLabel(key, granularity),
      views: point.views,
    });
  });

  return Array.from(grouped.values());
};

const getGranularityLabel = (granularity: Granularity) => {
  if (granularity === "week") return "주간";
  if (granularity === "month") return "월간";

  return "일별";
};

const renderTrendChart = (target: HTMLElement | null, points: TrendPoint[]) => {
  if (!target) return;

  if (points.length === 0) {
    target.innerHTML = '<div class="stats-chart__empty">표시할 데이터가 없습니다.</div>';
    return;
  }

  const width = 720;
  const height = 260;
  const padding = { bottom: 38, left: 44, right: 18, top: 22 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const maxViews = Math.max(...points.map((point) => point.views), 1);
  const xStep = points.length > 1 ? chartWidth / (points.length - 1) : chartWidth;

  const coordinates = points.map((point, index) => {
    const x = padding.left + (points.length > 1 ? index * xStep : chartWidth / 2);
    const y = padding.top + chartHeight - (point.views / maxViews) * chartHeight;
    return { ...point, x, y };
  });
  const linePath = coordinates
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`)
    .join(" ");
  const areaPath = `${linePath} L ${coordinates.at(-1)?.x.toFixed(2)} ${padding.top + chartHeight} L ${coordinates[0]?.x.toFixed(2)} ${padding.top + chartHeight} Z`;
  const labelInterval = Math.max(1, Math.ceil(points.length / 6));
  const yTicks = [0, Math.ceil(maxViews / 2), maxViews];
  const total = points.reduce((sum, point) => sum + point.views, 0);
  const peak = coordinates.reduce((currentPeak, point) =>
    point.views > currentPeak.views ? point : currentPeak,
  coordinates[0]);

  target.innerHTML = `
    <svg class="stats-line-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="조회수 추이 그래프">
      <defs>
        <linearGradient id="stats-line-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#1f6c49" stop-opacity="0.24"></stop>
          <stop offset="100%" stop-color="#1f6c49" stop-opacity="0.03"></stop>
        </linearGradient>
      </defs>
      <rect class="stats-line-chart__plot" x="${padding.left}" y="${padding.top}" width="${chartWidth}" height="${chartHeight}"></rect>
      ${yTicks
        .map((tick) => {
          const y = padding.top + chartHeight - (tick / maxViews) * chartHeight;
          return `
            <line class="stats-line-chart__grid" x1="${padding.left}" x2="${width - padding.right}" y1="${y.toFixed(2)}" y2="${y.toFixed(2)}"></line>
            <text class="stats-line-chart__y-label" x="${padding.left - 10}" y="${(y + 4).toFixed(2)}">${formatCount(tick)}</text>
          `;
        })
        .join("")}
      <path class="stats-line-chart__area" d="${areaPath}"></path>
      <path class="stats-line-chart__line" d="${linePath}"></path>
      ${coordinates
        .map(
          (point) => `
            <circle class="stats-line-chart__point" cx="${point.x.toFixed(2)}" cy="${point.y.toFixed(2)}" r="${point === peak ? 4.6 : 3.2}">
              <title>${escapeHtml(point.label)}: ${formatCount(point.views)}</title>
            </circle>
          `,
        )
        .join("")}
      ${coordinates
        .filter((_, index) => index % labelInterval === 0 || index === coordinates.length - 1)
        .map(
          (point) => `
            <text class="stats-line-chart__x-label" x="${point.x.toFixed(2)}" y="${height - 10}">${escapeHtml(point.shortLabel)}</text>
          `,
        )
        .join("")}
    </svg>
    <div class="stats-chart__caption">
      <span>합계 ${formatCount(total)}</span>
      <span>최고 ${escapeHtml(peak.label)} ${formatCount(peak.views)}</span>
    </div>
  `;
};

const aggregateDailyReferrers = (rows: DailyReferrerRow[]) => {
  const grouped = new Map<string, number>();

  rows.forEach((row) => {
    const source = row.source || "direct";
    grouped.set(source, (grouped.get(source) || 0) + toCount(row.views));
  });

  return Array.from(grouped, ([label, views]) => ({ label, views }))
    .sort((left, right) => right.views - left.views || left.label.localeCompare(right.label))
    .slice(0, 6);
};

const aggregateReferrerSharePeriods = (
  rows: DailyReferrerRow[],
  series: DailyPoint[],
  granularity: Granularity,
) => {
  const periodOrder = aggregateTrend(series, granularity).map((point) => point.key);
  const periodRows = new Map<string, Map<string, number>>();
  const sourceTotals = new Map<string, number>();
  const allowedDates = new Set(series.map((point) => point.date));

  periodOrder.forEach((key) => {
    periodRows.set(key, new Map());
  });

  rows.forEach((row) => {
    if (!row.date || !allowedDates.has(row.date)) return;

    const key = getPeriodKey(row.date, granularity);
    const sources = periodRows.get(key);
    if (!sources) return;

    const source = row.source || "direct";
    const views = toCount(row.views);
    sources.set(source, (sources.get(source) || 0) + views);
    sourceTotals.set(source, (sourceTotals.get(source) || 0) + views);
  });

  const rankedSources = Array.from(sourceTotals, ([source, views]) => ({ source, views }))
    .filter((row) => row.views > 0)
    .sort((left, right) => right.views - left.views || left.source.localeCompare(right.source));
  const primarySources = rankedSources.slice(0, 5).map((row) => row.source);
  const sourceColorMap = new Map(
    primarySources.map((source, index) => [source, referrerPalette[index % referrerPalette.length]]),
  );
  const otherViews = rankedSources
    .slice(primarySources.length)
    .reduce((sum, row) => sum + row.views, 0);
  const legendRows = [
    ...primarySources.map((source) => ({
      color: sourceColorMap.get(source) || referrerPalette[0],
      source,
      views: sourceTotals.get(source) || 0,
    })),
    ...(otherViews > 0 ? [{ color: otherReferrerColor, source: "기타", views: otherViews }] : []),
  ];
  const legendTotal = legendRows.reduce((sum, row) => sum + row.views, 0);
  const legend = legendRows.map((row) => ({
    ...row,
    percentage: legendTotal > 0 ? Math.round((row.views / legendTotal) * 1000) / 10 : 0,
  }));

  const periods = periodOrder
    .map((key) => {
      const sourceRows = Array.from(periodRows.get(key) || new Map(), ([source, views]) => ({
        source,
        views,
      }))
        .filter((row) => row.views > 0)
        .sort((left, right) => right.views - left.views || left.source.localeCompare(right.source));
      const primaryRows = primarySources
        .map((source) => ({
          source,
          views: periodRows.get(key)?.get(source) || 0,
        }))
        .filter((row) => row.views > 0);
      const otherPeriodViews = sourceRows
        .filter((row) => !sourceColorMap.has(row.source))
        .reduce((sum, row) => sum + row.views, 0);
      const rowsWithOther =
        otherPeriodViews > 0
          ? [...primaryRows, { source: "기타", views: otherPeriodViews }]
          : primaryRows;
      const total = rowsWithOther.reduce((sum, row) => sum + row.views, 0);

      return {
        key,
        label: getPeriodLabel(key, granularity),
        shortLabel: getPeriodShortLabel(key, granularity),
        shares: rowsWithOther.map((row) => ({
          color: sourceColorMap.get(row.source) || otherReferrerColor,
          percentage: total > 0 ? Math.round((row.views / total) * 1000) / 10 : 0,
          source: row.source,
          views: row.views,
        })),
        total,
      };
    })
    .filter((period) => period.total > 0);

  return { legend, periods };
};

const renderReferrerStack = (target: HTMLElement | null, data: ReferrerShareData) => {
  if (!target) return;

  const { legend, periods } = data;

  if (periods.length === 0) {
    target.innerHTML = '<div class="stats-bars__empty">유입 데이터가 없습니다.</div>';
    return;
  }

  const visiblePeriods = periods.slice(-8);
  const legendHtml =
    legend.length > 0
      ? `
        <div class="stats-stack-legend" aria-label="유입 색상 범례">
          ${legend
            .map(
              (item) => `
                <span class="stats-stack-legend__item" title="${escapeHtml(item.source)} ${item.percentage}% (${formatCount(item.views)})">
                  <span class="stats-stack-legend__swatch" style="background: ${item.color};"></span>
                  <span class="stats-stack-legend__label">${escapeHtml(item.source)}</span>
                  <strong>${item.percentage}%</strong>
                </span>
              `,
            )
            .join("")}
        </div>
      `
      : "";

  target.innerHTML = `${visiblePeriods
    .map((period) => {
      const topSource = period.shares[0];
      return `
        <div class="stats-stack-bar">
          <div class="stats-stack-bar__head">
            <span>${escapeHtml(period.shortLabel)}</span>
            <strong>${formatCount(period.total)}</strong>
          </div>
          <div class="stats-stack-bar__track" aria-label="${escapeHtml(period.label)} 유입 비중">
            ${period.shares
              .map(
                (share) => `
                  <span
                    title="${escapeHtml(share.source)} ${share.percentage}% (${formatCount(share.views)})"
                    style="width: ${share.percentage}%; background: ${share.color};"
                  ></span>
                `,
              )
              .join("")}
          </div>
          <div class="stats-stack-bar__meta">
            <span>${escapeHtml(topSource?.source || "-")}</span>
            <span>${topSource ? `${topSource.percentage}%` : "-"}</span>
          </div>
        </div>
      `;
    })
    .join("")}${legendHtml}`;
};

const renderBars = (
  target: HTMLElement | null,
  rows: { label: string; views: number }[],
  emptyLabel = "표시할 데이터가 없습니다.",
) => {
  if (!target) return;

  if (rows.length === 0) {
    target.innerHTML = `<div class="stats-bars__empty">${emptyLabel}</div>`;
    return;
  }

  const maxViews = Math.max(...rows.map((row) => row.views), 1);
  target.innerHTML = rows
    .map((row) => {
      const width = Math.max(4, Math.round((row.views / maxViews) * 100));
      return `
        <div class="stats-bar">
          <div class="stats-bar__head">
            <span>${escapeHtml(row.label)}</span>
            <strong>${formatCount(row.views)}</strong>
          </div>
          <div class="stats-bar__track">
            <span style="width: ${width}%"></span>
          </div>
        </div>
      `;
    })
    .join("");
};

const renderStats = (stats: StatsResponse) => {
  const dayCount = getSelectedRange();
  const granularity = getSelectedGranularity();
  const dailySeries = getDailySeries(stats.daily || [], dayCount);
  const trendPoints = aggregateTrend(dailySeries, granularity);
  const selectedViews = dailySeries.reduce((sum, point) => sum + point.views, 0);
  const averageViews = trendPoints.length > 0 ? Math.round(selectedViews / trendPoints.length) : 0;

  if (todayTotal) todayTotal.textContent = formatCount(stats.today_count);
  if (allTimeTotal) allTimeTotal.textContent = formatCount(stats.total_count);
  if (selectedTotal) selectedTotal.textContent = formatCount(selectedViews);
  if (averageTotal) averageTotal.textContent = formatCount(averageViews);
  if (trendTitle) trendTitle.textContent = `${getGranularityLabel(granularity)} 조회수 추이`;
  if (trendMeta) {
    trendMeta.textContent = `${getRangeLabel(dayCount)} · ${trendPoints.length}개 구간`;
  }
  renderTrendChart(trendChart, trendPoints);
  const referrerShareData = aggregateReferrerSharePeriods(
    stats.daily_referrers || [],
    dailySeries,
    granularity,
  );
  if (referrerShareMeta) {
    referrerShareMeta.textContent =
      referrerShareData.periods.length > 0
        ? `${referrerShareData.periods.length}개 구간 · ${referrerShareData.legend.length}개 유입원`
        : "";
  }
  renderReferrerStack(referrerStack, referrerShareData);
  renderBars(referrerBars, aggregateDailyReferrers(stats.daily_referrers || []));
  renderBars(
    pathBars,
    (stats.top_paths || []).map((row) => ({
      label: row.path || "-",
      views: toCount(row.views),
    })),
  );

  renderRows(
    document.querySelector("[data-stats-daily]"),
    dailySeries
      .slice()
      .filter((row) => row.views > 0)
      .reverse()
      .map(
      (row) =>
        `<tr><td>${escapeHtml(formatDate(row.date))}</td><td>${formatCount(row.views)}</td></tr>`,
      ),
  );

  renderRows(
    document.querySelector("[data-stats-daily-referrers]"),
    (stats.daily_referrers || []).map(
      (row) =>
        `<tr><td>${escapeHtml(formatDate(row.date))}</td><td>${escapeHtml(row.source || "direct")}</td><td>${formatCount(row.views)}</td></tr>`,
    ),
    "데이터가 없습니다.",
    3,
  );

  renderRows(
    document.querySelector("[data-stats-referrers]"),
    (stats.top_referrers || []).map(
      (row) =>
        `<tr><td>${escapeHtml(row.source || "direct")}</td><td>${formatCount(row.views)}</td></tr>`,
    ),
  );

  renderRows(
    document.querySelector("[data-stats-paths]"),
    (stats.top_paths || []).map(
      (row) =>
        `<tr><td>${escapeHtml(row.path || "-")}</td><td>${formatCount(row.views)}</td></tr>`,
    ),
  );

  renderRows(
    document.querySelector("[data-stats-utm]"),
    (stats.utm_sources || []).map((row) => {
      const label = [row.source || "none", row.medium || "none", row.campaign || "none"].join(
        " / ",
      );
      return `<tr><td>${escapeHtml(label)}</td><td>${formatCount(row.views)}</td></tr>`;
    }),
  );

  renderRows(
    document.querySelector("[data-stats-devices]"),
    (stats.devices || []).map(
      (row) =>
        `<tr><td>${escapeHtml(row.device || "unknown")}</td><td>${formatCount(row.views)}</td></tr>`,
    ),
  );

  if (updatedLabel && stats.generated_at) {
    const generatedAt = new Date(stats.generated_at);
    updatedLabel.textContent = `마지막 업데이트: ${new Intl.DateTimeFormat("ko-KR", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Seoul",
    }).format(generatedAt)}`;
  }
};

const loadStats = async () => {
  if (!supabase) return;

  setLoading(true);
  hideMessage();

  const { data, error } = await supabase.rpc("get_site_stats", {
    day_limit: getSelectedRange(),
    target_site_key: siteKey,
  });

  setLoading(false);

  if (error) {
    const detail = getErrorMessage(error);
    console.error("Failed to load private stats", error);
    showMessage(
      `통계를 불러올 수 없습니다.${detail ? ` Supabase 응답: ${detail}` : ""}`,
      "error",
    );
    return;
  }

  latestStats = (data || {}) as StatsResponse;
  renderStats(latestStats);
};

const init = async () => {
  if (!root) return;

  if (!supabase) {
    setSignedOutView();
    showMessage("Supabase 환경변수가 없어 통계 페이지를 사용할 수 없습니다.", "error");
    if (loginForm) loginForm.hidden = true;
    return;
  }

  const { data } = await supabase.auth.getSession();
  const email = data.session?.user.email || "";

  if (!data.session || !email) {
    setSignedOutView();
    return;
  }

  setSignedInView(email);
  clearStatsLoginIntent();
  await loadStats();
};

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!supabase || !emailInput?.value) return;

  const redirectTo = getAuthRedirectUrl();
  const email = emailInput.value.trim().toLowerCase();

  hideMessage();
  setLoading(true);
  rememberStatsLoginIntent();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: redirectTo,
    },
  });
  setLoading(false);

  if (error) {
    const detail = getErrorMessage(error);
    console.error("Failed to send stats login link", error);
    showMessage(
      `로그인 링크를 보낼 수 없습니다.${detail ? ` Supabase 응답: ${detail}` : ""}`,
      "error",
    );
    return;
  }

  showMessage("로그인 링크를 보냈습니다. 이메일에서 링크를 열면 통계 페이지로 돌아옵니다.");
});

refreshButton?.addEventListener("click", () => {
  loadStats();
});

rangeSelect?.addEventListener("change", () => {
  loadStats();
});

granularityInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (!latestStats) return;

    renderStats(latestStats);
  });
});

logoutButton?.addEventListener("click", async () => {
  if (!supabase) return;

  await supabase.auth.signOut();
  clearStatsLoginIntent();
  setSignedOutView();
  showMessage("로그아웃되었습니다.");
});

init();
