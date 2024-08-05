// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@nuxt/content', '@nuxtjs/i18n'],
    devtools: { enabled: true },
    i18n: {
        vueI18n: './i18n.config.ts',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root'
        },
        defaultLocale: 'en'
    },
    tailwindcss: {
        configPath: 'tailwind.config.js',
        cssPath: '~/assets/css/main.css'
    },
    ui: {
        icons: ['tabler', 'circle-flags', 'fluent-emoji-flat']
    },
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
                }
            ],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1'
        }
    },
    ssr: false
});
