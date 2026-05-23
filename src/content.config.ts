import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const metricSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const galleryItemSchema = z.object({
  src: z.string(),
  alt: z.string(),
  type: z.enum(["image", "video"]).default("image"),
  poster: z.string().optional(),
});

const badgeSchema = z.object({
  src: z.string(),
  alt: z.string(),
  href: z.string().optional(),
  label: z.string().optional(),
  variant: z.enum(["button", "badge"]).default("badge"),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    period: z.string(),
    role: z.string(),
    type: z.enum([
      "Professional",
      "Game",
      "Engine",
      "Graphics",
      "Tool",
      "Mobile",
      "Academic",
      "Unity",
      "Simulation",
    ]),
    tags: z.array(z.string()).default([]),
    status: z.string().optional(),
    featured: z.boolean().default(false),
    priority: z.number().default(99),
    tech: z.array(z.string()),
    cover: z.string(),
    coverAlt: z.string().default(""),
    coverPoster: z.string().optional(),
    accent: z.string().default("#22d3ee"),
    metrics: z.array(metricSchema).default([]),
    highlights: z.array(z.string()).default([]),
    links: z.array(linkSchema).default([]),
    videoId: z.string().optional(),
    badges: z.array(badgeSchema).default([]),
    gallery: z.array(galleryItemSchema).default([]),
  }),
});

export const collections = { projects };
