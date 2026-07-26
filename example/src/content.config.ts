import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import {
  segmentSchema,
  technologySchema,
} from "@dirsigler/astro-techradar/schemas";

const segments = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./segments" }),
  schema: segmentSchema,
});

const technologies = defineCollection({
  loader: glob({ pattern: "*/!(index).md", base: "./segments" }),
  schema: technologySchema,
});

export const collections = { segments, technologies };
