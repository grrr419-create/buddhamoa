import type { APIRoute } from "astro";
import { absoluteUrl } from "../utils/seo";
import { withBase } from "../utils/paths";

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /
Disallow: ${withBase("/stats/")}

Sitemap: ${absoluteUrl("/sitemap-index.xml")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
