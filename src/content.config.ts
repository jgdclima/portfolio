import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Game Design', 'Fiction & Literature', 'Notes']),
    readingTime: z.string().optional(),
    subjectTitle: z.string().optional(),
    subjectCreator: z.string().optional(),
    externalUrl: z.string().url().optional(),
    externalPlatform: z.string().optional(),
    featured: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string().default('Project'),
    tags: z.array(z.string()).default([]),
    year: z.string(),
    status: z.enum(['Active', 'Completed', 'Experiment']).default('Completed'),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    hasWriteup: z.boolean().default(false),
    featured: z.boolean().default(true),
    order: z.number().default(10),
  }),
});

export const collections = { blog, projects };
