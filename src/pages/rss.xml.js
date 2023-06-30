import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
  const blog = await getCollection('blog')
  return rss({
    title: 'Chris Gibbons | gbbns.co',
    description:
      'Web stuff, old school front-end, accessibility and lots of waffling',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: `<language>en-GB</language>`,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
  })
}
