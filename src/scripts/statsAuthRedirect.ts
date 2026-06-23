const basePath = import.meta.env.BASE_URL || "/";
const statsLoginIntentKey = "buddhamoa:stats-login-intent";
const statsLoginIntentMaxAgeMs = 10 * 60 * 1000;

const normalizeBasePath = (value: string) => {
  const path = value.startsWith("/") ? value : `/${value}`;

  return path.endsWith("/") ? path : `${path}/`;
};

const normalizePath = (value: string) => {
  const path = value.startsWith("/") ? value : `/${value}`;
  const withoutIndex = path.replace(/\/index\.html$/, "/");

  return withoutIndex.endsWith("/") ? withoutIndex : `${withoutIndex}/`;
};

const getStatsPath = () => {
  return `${normalizeBasePath(basePath)}stats/`.replace(/\/{2,}/g, "/");
};

const hasSupabaseAuthCallback = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));

  return (
    searchParams.has("code") ||
    searchParams.has("access_token") ||
    searchParams.has("refresh_token") ||
    searchParams.has("token") ||
    searchParams.has("token_hash") ||
    searchParams.has("error") ||
    searchParams.has("error_code") ||
    searchParams.has("error_description") ||
    hashParams.has("access_token") ||
    hashParams.has("refresh_token") ||
    hashParams.has("token") ||
    hashParams.has("token_hash") ||
    hashParams.has("error") ||
    hashParams.has("error_description")
  );
};

const hasRecentStatsLoginIntent = () => {
  try {
    const timestamp = Number(window.localStorage.getItem(statsLoginIntentKey));
    if (!Number.isFinite(timestamp)) return false;

    const isRecent = Date.now() - timestamp < statsLoginIntentMaxAgeMs;
    if (!isRecent) {
      window.localStorage.removeItem(statsLoginIntentKey);
    }

    return isRecent;
  } catch {
    return false;
  }
};

const redirectStatsAuthCallback = () => {
  const currentPath = normalizePath(window.location.pathname);
  const rootPath = normalizePath(normalizeBasePath(basePath));
  const statsPath = normalizePath(getStatsPath());
  const shouldRedirectToStats = hasSupabaseAuthCallback() || hasRecentStatsLoginIntent();

  if (currentPath !== rootPath || currentPath === statsPath || !shouldRedirectToStats) {
    return;
  }

  const target = new URL(getStatsPath(), window.location.origin);
  target.search = window.location.search;
  target.hash = window.location.hash;

  window.location.replace(target.toString());
};

redirectStatsAuthCallback();
