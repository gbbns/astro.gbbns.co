import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
  const writing = await getCollection('writing')
  const weeknotes = await getCollection('weeknotes')
  return rss({
    title: 'Chris Gibbons | gbbns.co',
    description:
      'Web stuff, old school front-end, accessibility and lots of waffling',
    site: context.site,
    items: weeknotes.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description:
        post.data.description || post.data.excerpt || post.data.content || '',
      customData: `<language>en-GB</language>`,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/weeknotes/${post.slug}/`,
    })),
    items: writing.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description:
        post.data.description || post.data.excerpt || post.data.content || '',
      customData: `<language>en-GB</language>`,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/writing/[slug]` routes
      link: `/writing/${post.slug}/`,
    })),
  })
}
