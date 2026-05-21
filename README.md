# pbano-dev-portfolio

Astro portfolio redesign for Pablo Bano Benito.

## Requirements

- Node.js `>=22.12.0`
- npm

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Production build

```bash
npm run build
npm run preview
```

## Content workflow

Projects live in `src/content/projects/*.mdx`.

Each project contains frontmatter for metadata, cards, filters, links, videos and gallery images, followed by Markdown/MDX body content for the case study.

Static assets live in `public/assets/`.

## Deploy

The project is static. Netlify build settings:

- Build command: `npm run build`
- Publish directory: `dist`

`netlify.toml` is included.
