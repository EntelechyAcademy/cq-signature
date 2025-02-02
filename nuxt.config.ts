import { defineNuxtConfig } from 'nuxt'
import { components } from './config/nuxt/components'
import { plugins } from './config/nuxt/plugins'
import { build } from './config/nuxt/build'
import { postcss } from './config/nuxt/postcss'
import { tailwindcss } from './config/nuxt/tailwindcss'
import { hooks } from './config/nuxt/hooks'
import { privateRuntimeConfig, publicRuntimeConfig } from './config/nuxt/runtimeConfig'

export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },

  publicRuntimeConfig,
  privateRuntimeConfig,

  components,

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-graphql-client',
  ],

  plugins,

  build,
  postcss,
  tailwindcss,

  hooks,
})
