import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
  const writing = await getCollection('writing')
  const weeknotes = await getCollection('weeknotes')
  console.log('blogs', writing)
  console.log('wn', weeknotes)
  return rss({
    title: 'Chris Gibbons | gbbns.co',
    description:
      'Web stuff, old school front-end, accessibility and lots of waffling',
    site: context.site,
    customData: `<language>en-GB</language>`,
    items: weeknotes.map((post) => ({
      // id: post.id,
      // slug: post.slug,
      // title: post.data.title,
      // pubDate: post.data.date,
      // description:
      //   post.data.description || post.data.excerpt || post.data.content || '',
      // author: post.data.author,
      ...post.data,
      link: `/weeknotes/${post.slug}/`,
    })),
    items: writing.map((post) => ({
      // id: post.id,
      // slug: post.slug,
      // title: post.data.title,
      // pubDate: post.data.date,
      // description:
      //   post.data.description || post.data.excerpt || post.data.content || '',
      // author: post.data.author,
      ...post.data,
      link: `/writing/${post.slug}/`,
    })),
  })
}
