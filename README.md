# João Lima — Personal Website, Projects & Essays

A minimalist, editorial personal website and essay hub built with [Astro](https://astro.build), styled with a **Brazilian Modernist Editorial** dual-theme palette:

- **Sol (Light Mode — *Refined Editorial Brasil*)**: Warm sand paper (`#FAF8F3`), rainforest emerald (`#0A5C36`), golden ochre (`#E0A800`), and deep Atlantic navy (`#0F2547`).
- **Noite (Dark Mode — *Dark Tropical Modernism*)**: Deep midnight forest (`#0B1914`), vibrant emerald (`#2AD089`), golden highlight (`#F2B705`), and crisp warm off-white (`#F4F1EA`).

---

## Local Development

```bash
npm install
npm run dev
```

To build the static production bundle:

```bash
npm run build
npm run preview
```

---

## Customizing Content

### 1. Personal Bio & Social Links (`src/config/site.ts`)
Edit [`src/config/site.ts`](./src/config/site.ts) to update your tagline, bio paragraphs, focus areas, and social links (GitHub, Substack, Medium, LinkedIn, Email).

### 2. Adding a Blog Essay or Review (`src/content/blog/`)
To publish an essay, copy one of the reference templates in [`src/content/_templates/blog/`](./src/content/_templates/blog/) into `src/content/blog/your-post-slug.md`. (Files inside `_templates/` are ignored during build so they don't show up on your live site until you copy or create a file directly in `src/content/blog/`).

- **On-site Markdown Essay** (renders at `/blog/<filename>`):
  ```markdown
  ---
  title: "Your Essay Title"
  description: "A 1-2 sentence summary shown on the landing page and blog index."
  pubDate: 2026-11-10
  category: "Game Design" # or "Fiction & Literature" or "Notes"
  readingTime: "5 min read"
  subjectTitle: "Game or Book Title"
  subjectCreator: "Author or Studio (Year)"
  featured: true
  ---

  Write your essay in standard Markdown here...
  ```

- **External Substack / Medium Post** (clicking the card redirects directly to your external article):
  ```markdown
  ---
  title: "Essay Published on Substack"
  description: "Short summary of the external essay."
  pubDate: 2026-11-10
  category: "Fiction & Literature"
  readingTime: "External · Substack"
  externalUrl: "https://yourname.substack.com/p/your-post"
  externalPlatform: "Substack"
  ---
  ```

### 3. Adding a Personal Project (`src/content/projects/`)
To publish a project, copy one of the reference templates in [`src/content/_templates/projects/`](./src/content/_templates/projects/) into `src/content/projects/your-project-slug.md`. (Files inside `_templates/` are ignored during build so they don't show up on your live site until you copy or create a file directly in `src/content/projects/`).

```markdown
---
title: "Project Name"
summary: "Short overview of what you built and why."
category: "Software & Systems"
tags: ["TypeScript", "Game Design"]
year: "2026"
status: "Active" # "Active" | "Completed" | "Experiment"
repoUrl: "https://github.com/jgdclima/your-repo"
demoUrl: "https://example.com"
hasWriteup: true # Set false to link the card directly to repoUrl/demoUrl
featured: true
order: 1
---

Optional Markdown case study if `hasWriteup: true`.
```

---

## Deploying to GitHub Pages

This repository includes [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).
In your GitHub repository settings:
1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Any push to `master` (or `main`) will automatically build and publish the site to `https://jgdclima.github.io/portfolio/` (and automatically adjust its base path if you ever rename the repository to `jgdclima.github.io` or attach a custom domain).
