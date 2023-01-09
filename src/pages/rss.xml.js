import rss from '@astrojs/rss'

export const get = () =>
  rss({
    title: 'Chris Gibbons | gbbns.co',
    description: 'Web stuff',
    site: 'https://www.gbbns.co',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-GB</language>`,
  })
