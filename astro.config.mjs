import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nextgencapture.app',
  output: 'static',
  build: { format: 'directory' }
});
