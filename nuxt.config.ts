// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@nuxt/content', '@nuxtjs/google-fonts'],
    devtools: { enabled: true },
    googleFonts: {
        families: {
            'DM+Sans': true
        },
        display: 'swap'
    },
    tailwindcss: {
        configPath: 'tailwind.config.js',
        cssPath: '~/assets/css/main.css'
    },
    ui: {
        icons: ['tabler']
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
