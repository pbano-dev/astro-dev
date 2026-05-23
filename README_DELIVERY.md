# Pablo Portfolio — Redesign HR + Technical Layer

This version changes the visual design and information architecture.

Goal:
- First layer: recruiter/HR-readable in 10–20 seconds.
- Second layer: engineering-manager evidence through case studies, trade-offs, architecture, debugging, testing and ownership.

Main changes:
- New executive-dossier visual style: light background, structured panels, stronger hierarchy.
- Home page reframed around C# / C++ Software Engineer, systems, tools and maintainable runtime software.
- Human Fall Flat 2 positioned as production C# ownership evidence.
- SufferEngine positioned as the main C++ systems / engine architecture case study.
- Added clearer engineering evidence, role fit, claims to avoid, and role targeting.
- Project pages expanded with NDA-safe technical context.

Run:
```bash
npm install
npm run dev
npm run build
```

Notes:
- `dist/` is included because this package was successfully built locally.
- `node_modules/` is intentionally excluded.
- The current CV PDF asset is a placeholder from the existing web and should be replaced with the new CVs once created.

## Theme update

This version ships with dark mode enabled by default. A persistent theme toggle is available in the header across all pages. The selected mode is saved in `localStorage` and restored on navigation/reload.
