# WordPress media migration

This version replaces the placeholder/early portfolio artwork with media migrated from the public WordPress portfolio.

## What changed

- Replaced static placeholder covers with real project captures.
- Converted the large GIF-style project previews to lightweight autoplaying MP4 files.
- Optimized static JPG/PNG/WebP images to WebP for faster portfolio loading.
- Added a new `Multi-Agent System` case study because the WordPress home still exposed the media/project entry.
- Added the PBR project report PDF locally at `public/assets/projects/vulkan-pbr-demo/project-report.pdf`.
- Added `MediaFrame.astro` so cards, hero covers and galleries can render either images or silent looped video.

## Optimization notes

The biggest savings came from converting GIF/WebP animation previews to MP4:

| Source asset | Original size | Optimized asset | Optimized size |
|---|---:|---|---:|
| Human Fall Flat 2 preview | 23.6 MB | `hff2_2.mp4` | 0.54 MB |
| Oona preview | 5.5 MB | `oona.mp4` | 0.43 MB |
| SufferEngine lights preview | 3.9 MB | `lights.mp4` | 0.15 MB |
| Terrain preview | 2.2 MB | `graphics.mp4` | 0.10 MB |
| Terrain water preview | 7.0 MB | `watergif2.mp4` | 0.19 MB |
| Equalizer preview | 1.3 MB | `equalizer.mp4` | 0.19 MB |
| Return of Magoon preview | 2.0 MB | `return_magoon.mp4` | 0.16 MB |
| Multi-Agent preview | 1.6 MB | `agent_system.mp4` | 0.11 MB |

The original WordPress-hosted media was not included in full size. The package only includes optimized local assets suitable for the new static portfolio.

## Files touched

- `src/components/MediaFrame.astro`
- `src/components/ProjectCard.astro`
- `src/layouts/ProjectLayout.astro`
- `src/content.config.ts`
- `src/content/projects/*.mdx`
- `public/assets/projects/**`

## Verification

`npm run build` completed successfully and generated 14 pages.
