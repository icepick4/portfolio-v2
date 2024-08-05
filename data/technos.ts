import type { Techno } from './types';

export function findTechnoByTitle(title: string): Techno | undefined {
    return technos.find((techno) => techno.title === title);
}

export const technos: Techno[] = [
    {
        title: 'JavaScript',
        icon: 'javascript',
        type: 'language',
        url: 'https://www.javascript.com/'
    },
    {
        title: 'TypeScript',
        icon: 'typescript',
        type: 'language',
        url: 'https://www.typescriptlang.org/'
    },
    {
        title: 'Angular',
        icon: 'angularjs',
        type: 'framework',
        url: 'https://angular.io/'
    },
    {
        title: 'Java',
        icon: 'java',
        type: 'language',
        url: 'https://java.com/fr/'
    },
    {
        title: 'Python',
        icon: 'python',
        type: 'language',
        url: 'https://www.python.org/'
    },
    {
        title: 'Pygame',
        image: 'pygame',
        type: 'library',
        url: 'https://pygame.org/'
    },
    {
        title: 'PHP',
        icon: 'php',
        type: 'language',
        url: 'https://www.php.net/'
    },
    {
        title: 'C',
        icon: 'c',
        type: 'language',
        url: 'https://www.cprogramming.com/'
    },
    {
        title: 'HTML',
        icon: 'html5',
        type: 'language',
        url: 'https://www.w3schools.com/html/'
    },
    {
        title: 'CSS',
        icon: 'css3',
        type: 'language',
        url: 'https://www.w3schools.com/css/'
    },
    {
        title: 'Markdown',
        icon: 'markdown',
        type: 'language',
        url: 'https://www.markdownguide.org/'
    },
    {
        title: 'SCSS',
        icon: 'sass',
        type: 'library',
        url: 'https://sass-lang.com/'
    },
    {
        title: 'Tailwind CSS',
        icon: 'tailwindcss',
        type: 'library',
        url: 'https://tailwindcss.com/'
    },
    {
        title: 'Symfony',
        icon: 'symfony',
        type: 'framework',
        url: 'https://symfony.com/'
    },
    {
        title: 'Vue.js',
        icon: 'vuejs',
        type: 'framework',
        url: 'https://vuejs.org/'
    },
    {
        title: 'Nuxt.js',
        icon: 'nuxtjs',
        type: 'framework',
        url: 'https://nuxt.com/'
    },
    {
        title: 'Node.js',
        icon: 'nodejs',
        type: 'framework',
        url: 'https://nodejs.org/'
    },
    {
        title: 'React',
        icon: 'react',
        type: 'library',
        url: 'https://reactjs.org/'
    },
    {
        title: 'MySQL',
        icon: 'mysql',
        type: 'database',
        url: 'https://www.mysql.com/'
    },
    {
        title: 'MongoDB',
        icon: 'mongodb',
        type: 'database',
        url: 'https://www.mongodb.com/'
    },
    {
        title: 'Prisma',
        icon: 'prisma',
        type: 'library',
        url: 'https://www.prisma.io/'
    },
    {
        title: 'VS Code',
        icon: 'vscode',
        type: 'development-tool',
        url: 'https://code.visualstudio.com/'
    },
    {
        title: 'Git',
        icon: 'git',
        type: 'development-tool',
        url: 'https://git-scm.com/'
    },
    {
        title: 'GitHub',
        icon: 'github',
        type: 'development-tool',
        url: 'https://github.com'
    },
    {
        title: 'GitHub Actions',
        icon: 'githubactions',
        type: 'devops',
        url: 'https://github.com/features/actions'
    },
    {
        title: 'GitHub Copilot',
        image: 'githubcopilot',
        type: 'development-tool',
        url: 'https://copilot.github.com/'
    },
    {
        title: 'Vercel',
        icon: 'vercel',
        type: 'development-tool',
        url: 'https://vercel.com/'
    },
    {
        title: 'Docker',
        icon: 'docker',
        type: 'devops',
        url: 'https://www.docker.com/'
    },
    {
        title: 'Terraform',
        icon: 'terraform',
        type: 'devops',
        url: 'https://www.terraform.io/'
    },
    {
        title: 'AWS',
        icon: 'amazonwebservices',
        type: 'devops',
        url: 'https://aws.amazon.com/'
    },
    {
        title: 'Linux',
        icon: 'linux',
        type: 'development-tool',
        url: 'https://www.linux.org/'
    },
    {
        title: 'Arch Linux',
        icon: 'archlinux',
        type: 'development-tool',
        url: 'https://archlinux.org/'
    },
    {
        title: 'Windows',
        icon: 'windows11',
        type: 'development-tool',
        url: 'https://www.microsoft.com/en-us/windows'
    },
    {
        title: 'Postman',
        icon: 'postman',
        type: 'apis-integration',
        url: 'https://www.postman.com/'
    },
    {
        title: 'Insomnia',
        icon: 'insomnia',
        type: 'apis-integration',
        url: 'https://insomnia.rest/'
    },
    {
        title: 'GraphQL',
        icon: 'graphql',
        type: 'apis-integration',
        url: 'https://graphql.org/'
    },
    {
        title: 'OAuth',
        icon: 'oauth',
        type: 'apis-integration',
        url: 'https://oauth.net/'
    },
    {
        title: 'Zod',
        image: 'zod',
        type: 'library',
        url: 'https://zod.dev/'
    },
    {
        title: 'NuxtUI',
        icon: 'nuxtjs',
        type: 'library',
        url: 'https://ui.nuxt.com/'
    },
    {
        title: 'Three.js',
        icon: 'threejs',
        type: 'library',
        url: 'https://threejs.org/'
    },
    {
        title: 'OpenAI',
        image: 'openai',
        type: 'library',
        url: 'https://openai.com/'
    },
    {
        title: 'Resend',
        image: 'resend',
        type: 'library',
        url: 'https://resend.com/'
    }
];
