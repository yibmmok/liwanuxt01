import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
    	// '@nuxtjs/tailwindcss',
        // '@vueuse/nuxt',
        // '@tinymce/tinymce-vue',
    ],
    meta: {
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/static/favicon.png' },
            {rel: 'stylesheet', type: 'text/css', href: '/assets/css/formkit.css'}
        ],
    },
    modules: [
        '@formkit/nuxt',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        // '@tinymce/tinymce-vue'
    ],
    css: [
        '~/assets/css/base.css',
    ],
    server: {
        port: 8000,
    },    
    tailwindcss: {
    	ccsPath: "~/assets/css/base.css",
    	configPath: 'tailwind.config.js',
    	exposeConfig: false,
    	config: {},
    	viewer: true,
    },
    formkit: {
        defaultConfig: true,
        configFile: "formkit.config.ts"
    },
})
