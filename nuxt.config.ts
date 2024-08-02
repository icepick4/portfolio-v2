// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/ui',
        '@nuxt/content',
        '@nuxtjs/google-fonts',
        '@nuxtjs/i18n'
    ],
    devtools: { enabled: true },
    googleFonts: {
        families: {
            'DM+Sans': true
        },
        display: 'swap'
    },
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
        icons: ['tabler', 'circle-flags']
    },
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
                }
            ]
        }
    }
});
