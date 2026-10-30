# CLAUDE.md

## What this is

Personal link-in-bio site for Gwenniviere (gwenn.me). Single landing page of social links, built with Vite + React + TypeScript + Tailwind + shadcn/ui. Static site, no backend, no database.

## Commands

Package manager is **bun** (not npm). There is no `package-lock.json`; `bun.lockb` is the lockfile.

```sh
bun install          # install deps
bun run dev          # dev server
bun run build        # production build → dist/
bun run lint         # eslint
```

## Architecture

- `src/pages/Index.tsx` — the whole site: profile header, social link cards, footer.
- `src/lib/socialLinks.ts` — data for the link cards (platform, handle, URL, icon, gradient). Edit here to add/remove links.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge).
- `src/components/ui/` — shadcn/ui components; generated, avoid hand-editing.
- `src/hooks/` — `use-toast`, `use-mobile`.
- `index.html` — meta tags, favicon links, Google Analytics (gtag) snippet.
- `public/` — favicon set, `robots.txt`, `sitemap.xml`, `site.webmanifest`.

## Conventions

- Path alias `@/` maps to `src/` (see `vite.config.ts`, `tsconfig.app.json`).
- Styling is Tailwind utility classes; gradients for cards come from the `color` field in `socialLinks.ts` (Tailwind gradient class strings).
- Deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`, which uses bun (`oven-sh/setup-bun`).