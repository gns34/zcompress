import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const examPages = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/exam-pages' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    metaDescription: z.string(),
    exam: z.string().optional(),
    targetSizeKB: z.number().optional(),
    docType: z.string().optional(),
    heroHeadline: z.string(),
    heroDescription: z.string(),
    eyebrowText: z.string().default('Zero Server Uploads'),
    privacyNote: z.string().default('Your document never leaves your browser. Compression runs 100% client-side using browser APIs.'),
    sections: z.array(z.object({
      heading: z.string(),
      body: z.array(z.string()),
    })),
    faq: z.array(z.object({ q: z.string(), a: z.string() })),
    specs: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    specsHeading: z.string().optional(),
    crossLinks: z.array(z.object({ href: z.string(), label: z.string() })).optional(),
    lastVerified: z.string(),
  }),
});

export const collections = { examPages };
