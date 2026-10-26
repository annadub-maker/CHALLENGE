import { defineConfig } from 'astro/config';

// `astro dev` runs at the root (http://localhost:4321/),
// the GitHub Pages build lives under /CHALLENGE
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: https://docs.astro.build/en/guides/deploy/github/
  site: 'https://annadub-maker.github.io',
  base: isDev ? '/' : '/CHALLENGE',
});
