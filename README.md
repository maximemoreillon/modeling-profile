# Modeling profile

Deployed at https://modeling.maximemoreillon.com/ via GitHub Pages.
Japanese at `/`, English at `/en/`.

Built with [Astro](https://astro.build) and TypeScript. Pushing to `master` builds and deploys the site with GitHub Actions (`.github/workflows/deploy.yml`).

## Development

```sh
npm install
npm run dev      # local dev server
npm run check    # type check
npm run build    # production build into dist/
```

## Content

- `src/data/portfolio.ts`: portfolio entries, newest first. Fields are documented on the `Work` interface.
- `src/data/photos.ts`: the hero photo and the Photos section.
- `src/i18n.ts`: Japanese and English UI text.

Images go in `src/assets/` as full-size originals (JPG, PNG or WebP). Astro resizes and converts them to WebP at build time, so no manual conversion is needed.

- Video job: set `youtube` to the video ID; the thumbnail is fetched from YouTube.
- Photo job: import the image in `portfolio.ts` and list it in `photos`. Use `coverPosition` to adjust how the thumbnail is cropped.
- Otherwise set `url` to link to the published work (shown as a text card).
