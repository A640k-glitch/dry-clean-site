# Fresh Press Cleaners — website

Marketing site for **Fresh Press Cleaners**: services, journal, location, and contact.

Stack: [Astro](https://astro.build) (static) + Tailwind CSS v4.

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Images (`public/media/`)

All imagery is served from **`public/media/`**. Reference files in content as **`/media/your-file.jpg`** (leading slash, no `public` in the path).

Replace `hero.jpg` and `post-*.jpg` with your own photography when ready; keep filenames or update `src/config/site.ts` and the `image.url` fields in `src/content/posts/*.md`.

## Configuration

| Item | Location |
|------|-----------|
| Business copy, phone, address, `siteUrl` | `src/config/site.ts` |
| Production URL (canonical, sitemap, RSS) | `astro.config.mjs` → `site` (match `siteUrl` in `site.ts`) |

## Build & deploy

```bash
npm run build   # output: dist/
npm run preview # test the build locally
```

**Vercel:** import the repo; default Astro settings detect the project and use `npm run build` with output `dist`.

**Netlify:** build command `npm run build`, publish directory **`dist`**. A `netlify.toml` is included for convenience.

---

© 2026 Fresh Press Cleaners. All rights reserved.
