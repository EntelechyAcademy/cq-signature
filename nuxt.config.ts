import { defineNuxtConfig } from 'nuxt'
import plugins from './config/nuxt/plugins'
import hooks from './config/nuxt/hooks'
import { privateRuntimeConfig, publicRuntimeConfig } from './config/nuxt/runtimeConfig'

export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },

  publicRuntimeConfig,
  privateRuntimeConfig,

  components: {
    dirs: [
      '~/components',
      {
        path: '~/features/ui/Modals/components',
        extensions: ['vue'],
      },
    ],
  },

  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  plugins,

  hooks,
})
