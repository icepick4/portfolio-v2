// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@nuxt/content'],
    devtools: { enabled: true },
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
