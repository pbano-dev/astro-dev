# Portfolio redesign notes

This redesign turns the old WordPress/blog-style list into a focused technical portfolio.

## What changed

- Rebuilt the home page around a recruiter-friendly hero, availability, CV CTA and selected work.
- Added project case-study pages with technical metadata, highlights, links, videos and galleries.
- Added project filtering on `/projects` with vanilla JavaScript; no extra frontend framework is required.
- Added `/about`, `/contact` and `404` pages.
- Added a local copy of the CV at `public/assets/cv/Pablo_Bano_Benito_CV.pdf`.
- Replaced missing project artwork with local SVG covers for a consistent visual style.
- Added `netlify.toml` for static deployment.

## Important TODOs

- Replace placeholder/legacy links with current LinkedIn, GitHub, Steam, reports or demos where available.
- Update the `site` field in `astro.config.mjs` once the final Netlify/domain URL exists.
- Replace SVG placeholder covers with real screenshots/videos when you have better assets.
- Review all project copy for exact factual precision before publishing publicly.
