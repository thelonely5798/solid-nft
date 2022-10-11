import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    css: ["assets/scss/index.scss"],
    build: {
        transpile: ['mdi-vue']
    },
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'],
    buildModules: [
        // pinia plugin
        '@pinia/nuxt',
    ],
    plugins: ['~/plugins/directive']
})
