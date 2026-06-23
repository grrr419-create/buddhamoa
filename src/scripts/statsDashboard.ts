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
const todayTotal = document.querySelector<HTMLElement>('[data-stats-total="today"]');
const allTimeTotal = document.querySelector<HTMLElement>('[data-stats-total="total"]');
const updatedLabel = document.querySelector<HTMLElement>("[data-stats-updated]");

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

const renderStats = (stats: StatsResponse) => {
  if (todayTotal) todayTotal.textContent = formatCount(stats.today_count);
  if (allTimeTotal) allTimeTotal.textContent = formatCount(stats.total_count);

  renderRows(
    document.querySelector("[data-stats-daily]"),
    (stats.daily || []).map(
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
    day_limit: 30,
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

  renderStats((data || {}) as StatsResponse);
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

logoutButton?.addEventListener("click", async () => {
  if (!supabase) return;

  await supabase.auth.signOut();
  clearStatsLoginIntent();
  setSignedOutView();
  showMessage("로그아웃되었습니다.");
});

init();
