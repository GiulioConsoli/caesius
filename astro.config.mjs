// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://caesius.es',
  integrations: [
  sitemap({
    filter: (page) => !page.includes('/analisis/demo-plantilla/'),
  }),
],
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
