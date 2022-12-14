import { defineConfig } from 'astro/config'

// https://astro.build/config
import mdx from '@astrojs/mdx'

// https://astro.build/config
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.gbbns.co',
  integrations: [mdx(), sitemap()],
})
