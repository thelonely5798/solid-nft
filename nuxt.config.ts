import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["assets/scss/index.scss"],
    build: {
        transpile: ['mdi-vue']
    },
    modules: ['@nuxtjs/tailwindcss',  '@pinia/nuxt',],
    buildModules: [
        // pinia plugin
        '@pinia/nuxt',
      ],
})
