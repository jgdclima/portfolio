import { defineConfig } from 'astro/config';

// Automatically detect GitHub Pages base path in CI (e.g. '/portfolio' for jgdclima/portfolio,
// or '/' if the repo is renamed to jgdclima.github.io or run locally).
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserSite = repoName?.endsWith('.github.io');
const defaultBase =
  process.env.GITHUB_ACTIONS === 'true' && repoName && !isUserSite
    ? `/${repoName}`
    : '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://jgdclima.github.io',
  base: process.env.BASE_PATH || defaultBase,
  output: 'static',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
