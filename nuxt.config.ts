// https://nuxt.com/docs/api/configuration/nuxt-config
const env = process.env;
export default defineNuxtConfig({
    css: ["~/node_modules/@atoria/css/dist/index.css",
        '@ionic/core/css/core.css',
        '@ionic/core/css/normalize.css',
        '@ionic/core/css/structure.css',
        '@ionic/core/css/typography.css',
        '@ionic/core/css/ionic.bundle.css',
        "@/assets/styles.scss"
    ],
    ssr: false,
    runtimeConfig: {
        public: {
            UIlayout: process.env.UI_LAYOUT,
            SUPABASE_URL: process.env.SUPABASE_URL,
            SUPABASE_API_KEY: process.env.SUPABASE_API_KEY,
        }
    },
    modules: [
        "@nuxtjs/algolia",
    ],
    algolia: {
        apiKey: process.env.AGOLIA_API,
        applicationId: process.env.AGOLIA_APP_ID,
    }
})
