const basePath = import.meta.env.BASE_URL || "/";

function isExternalPath(path: string) {
  return /^[a-z][a-z\d+\-.]*:/i.test(path) || path.startsWith("//") || path.startsWith("#");
}

export function withBase(path: string) {
  if (!path || isExternalPath(path)) return path;

  const base = basePath === "/" ? "" : basePath.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${base}${normalizedPath}` || "/";
}
