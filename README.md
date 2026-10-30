# gwenn.me

Personal link-in-bio site for [Gwenniviere](https://gwenn.me) — social links on a single landing page.

Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Development

Requires [bun](https://bun.sh).

```sh
git clone git@github.com:angelxmoreno/gwenn.me.git
cd gwenn.me
bun install
bun run dev
```

Other scripts:

```sh
bun run build   # production build → dist/
bun run lint    # eslint
```

## Editing links

Social links live in [src/lib/socialLinks.ts](src/lib/socialLinks.ts) — add, remove, or update a link by editing that array. Site name, description, and analytics are configured in [index.html](index.html).

## Deployment

Deploys automatically to GitHub Pages via GitHub Actions when changes are pushed to `main`. The workflow uses bun for install and build.