// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isDev = process.env.npm_lifecycle_event === 'dev' || process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://grrr419-create.github.io',
  base: isDev ? '/' : '/buddhamoa',
  integrations: [
    sitemap({
      filter: (page) => !new URL(page).pathname.endsWith('/stats/'),
    }),
  ],
});
