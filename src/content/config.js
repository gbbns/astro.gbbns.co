// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'
// 2. Define your collection(s)
const writingCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    author: z.string().default('Anonymous'),
    slug: z.string().url(),
  }),
})

const weeknotesCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    author: z.string().default('Anonymous'),
    slug: z.string().url(),
  }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  writing: writingCollection,
  weeknotes: weeknotesCollection,
}
