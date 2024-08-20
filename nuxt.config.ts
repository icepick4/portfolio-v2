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
    ui: {},
    app: {
        head: {
            link: [
                {
                    rel: 'preload',
                    as: 'style',
                    type: 'text/css',
                    href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css',
                    onload: "this.onload=null;this.rel='stylesheet'"
                }
            ],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'en'
            }
        }
    },
    routeRules: {
        '/': { prerender: true }
    }
});
