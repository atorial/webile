// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/node_modules/@atoria/css/dist/index.css"],
    ssr: false,
    runtimeConfig: {
        public: {
            UIlayout: process.env.UI_LAYOUT
        }
    }
})
