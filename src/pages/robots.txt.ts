import type { APIRoute } from "astro";
import { absoluteUrl } from "../utils/seo";
import { withBase } from "../utils/paths";

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /
Disallow: ${withBase("/stats/")}

Sitemap: ${absoluteUrl("/sitemap-index.xml")}
#DaumWebMasterTool:e214dd927cf498f1f6109e551e3554cc6b74b69ffd630673c27affb399dbdd77:wmGoVXOE53jpE6rzXrmr2w==
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
