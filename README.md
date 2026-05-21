# pbano-dev-portfolio

Astro portfolio for Pablo Bano Benito, redesigned as a static technical portfolio with project case studies, optimized media and deploy-ready configuration.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:4321>.

## Production check

```bash
npm run build
npm run preview
```

## Deploy

The project includes `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

## Content model

Projects live in:

```txt
src/content/projects/
```

Each project is an MDX file with frontmatter validated by `src/content.config.ts`.

## Media

Optimized media lives in:

```txt
public/assets/projects/
```

See `ASSET_MIGRATION.md` for the WordPress media migration and optimization notes.
