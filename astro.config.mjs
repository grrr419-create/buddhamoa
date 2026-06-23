// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isDev = process.env.npm_lifecycle_event === 'dev' || process.argv.includes('dev');
const site = process.env.PUBLIC_SITE_URL || 'https://buddhamo.com';
const productionBase = process.env.SITE_BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base: isDev ? '/' : productionBase,
  integrations: [
    sitemap({
      filter: (page) => !new URL(page).pathname.endsWith('/stats/'),
    }),
  ],
});
