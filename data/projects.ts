import type { Project } from './types';

export const projects: Project[] = [
    {
        name: 'LyricsLingua',
        description: {
            en: 'A web application for translating song lyrics using AI. This project involved learning new technologies like Nuxt, Stripe, and OpenAI integration. I learnt a lot of new things such as how to use Stripe for payments, Resend for email sending. I really enjoyed working on this project and I am proud of the result.',
            fr: "Une application web pour traduire les paroles de chansons en utilisant l'IA. Ce projet a impliqué l'apprentissage de nouvelles technologies comme Nuxt, Stripe et l'intégration d'OpenAI. J'ai appris beaucoup de nouvelles choses comme l'utilisation de Stripe pour les paiements, Resend pour l'envoi d'emails. J'ai vraiment aimé travailler sur ce projet et je suis fier du résultat."
        },
        type: ['web', 'favorite'],
        date: '2024',
        technos: [
            'Nuxt.js',
            'TypeScript',
            'Tailwind CSS',
            'Stripe',
            'OpenAI',
            'MongoDB',
            'Resend'
        ],
        link: 'https://www.lyricslingua.com/',
        repo_link: 'https://github.com/icepick4'
    },
    {
        name: 'GoNuxt',
        description: {
            fr: "Un boilerplate en Nuxt.js pour démarrer rapidement n'importe quel SaaS ou micro-SaaS. Il est livré avec des fonctionnalités telles que l'authentification, les paiements Stripe, les e-mails, les pages de profil, et bien plus encore. Il est conçu pour être facilement extensible et personnalisable. Pas besoin de réfléchir à la mise en place de votre application, GoNuxt le fait pour vous !",
            en: 'A Nuxt.js boilerplate to quickly start any SaaS or micro-SaaS. It comes with features such as authentication, Stripe payments, emails, profile pages, and much more. It is designed to be easily extensible and customizable. No need to think about setting up your application, GoNuxt does it for you !'
        },
        type: ['web', 'favorite', 'dev-tool'],
        date: '2024',
        technos: [
            'Nuxt.js',
            'TypeScript',
            'Tailwind CSS',
            'Stripe',
            'MongoDB',
            'Resend',
            'Zod'
        ],
        link: 'https://gonuxt.dev/',
        repo_link: 'https://github.com/icepick4'
    },
    {
        name: 'Capitalympics',
        description: {
            en: 'A web application to help users learn about country flags and capitals, offering a focused learning experience based on regions. Built using Vue.js and Tailwind CSS, with backend services hosted via Docker and Nginx.',
            fr: "Une application web pour aider les utilisateurs à apprendre les drapeaux et les capitales des pays, offrant une expérience d'apprentissage ciblée basée sur les régions. Construit en utilisant Vue.js et Tailwind CSS, avec des services backend hébergés via Docker et Nginx."
        },
        type: ['web', 'game', 'favorite'],
        date: '2023',
        technos: [
            'Vue.js',
            'TypeScript',
            'Tailwind CSS',
            'MySQL',
            'Three.js',
            'Docker',
            'Zod',
            'Express',
            'Prisma'
        ],
        link: 'https://capitalympics.com/',
        repo_link: 'https://github.com/icepick4/capitalympics'
    },
    {
        name: 'Portfolio',
        description: {
            en: 'My personal portfolio website, showcasing my projects, skills, professionnal experience, and even more ! This project was developed using Nuxt.js, TailWind CSS, and TypeScript, focusing on responsive design and accessibility. The design is very clean, minimalist, and modern.',
            fr: "Mon site web de portfolio personnel, présentant mes projets, compétences, expérience professionnelle, et plus encore ! Ce projet a été développé en utilisant Nuxt.js, TailWind CSS, et TypeScript, en mettant l'accent sur le design responsive et l'accessibilité. Le design est très propre, minimaliste, et moderne."
        },
        type: ['web', 'favorite'],
        date: '2024',
        technos: ['Nuxt.js', 'TypeScript', 'Tailwind CSS'],
        link: 'https://www.remi-jara.fr/',
        repo_link: 'https://github.com/icepick4/portfolio-v2/'
    },
    {
        name: 'OnePyece',
        description: {
            en: 'A Python package serving as an API wrapper for the One Piece universe, allowing users to retrieve data from the series. This project was a learning experience in Python package development and API integration.',
            fr: "Un package Python servant de wrapper API pour l'univers One Piece, permettant aux utilisateurs de récupérer des données de la série. Ce projet a été une expérience d'apprentissage dans le développement de packages Python et l'intégration d'API"
        },
        type: ['dev-tool', 'favorite'],
        date: '2023',
        technos: ['Python', 'PyPi'],
        link: 'https://pypi.org/project/onepyece/',
        repo_link: 'https://github.com/icepick4/onepyece'
    },
    {
        name: 'Portfolio Levi Lea',
        description: {
            en: 'A portfolio website created for Levi Lea, a student graphic designer. The site showcases her work and was developed using Vue.js, TypeScript, and Tailwind CSS.',
            fr: 'Un site web de portfolio créé pour Levi Lea, une étudiante en design graphique. Le site présente son travail et a été développé en utilisant Vue.js, TypeScript et Tailwind CSS.'
        },
        type: ['web'],
        date: '2023',
        technos: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Swiper.js'],
        link: 'https://levilea.fr/',
        repo_link: 'https://github.com/icepick4'
    },
    {
        name: 'Sonic Game',
        description: {
            en: 'This project is a game inspired by the Dino Game in Google Chrome. The game is a simple endless runner game where the player controls a character that must avoid obstacles. I chose to use a pixel art style for the game, designing some of the assets myself. This project was created to practice my skills in Pygame and Python, aiming to create a simple and fun game.',
            fr: "Ce projet est un jeu inspiré du jeu Dino dans Google Chrome. Le jeu est un simple jeu de course sans fin où le joueur contrôle un personnage qui doit éviter les obstacles. J'ai choisi d'utiliser un style pixel art pour le jeu, concevant certains des actifs moi-même. Ce projet a été créé pour pratiquer mes compétences en Pygame et Python, dans le but de créer un jeu simple et amusant."
        },
        type: ['game'],
        date: '2022',
        technos: ['Python', 'Pygame'],
        link: 'https://github.com/icepick4/Sonic-Game/archive/refs/heads/main.zip',
        repo_link: 'https://github.com/icepick4/Sonic-Game'
    },
    {
        name: 'Tower of Hanoi',
        description: {
            en: 'Inspired by the classic Tower of Hanoi puzzle, this game challenges players to move disks between towers using TypeScript and Three.js. I initially started with JavaScript and transitioned to TypeScript, learning how to use Three.js for 3D graphics.',
            fr: "Inspiré du classique puzzle de la Tour de Hanoï, ce jeu met au défi les joueurs de déplacer des disques entre des tours en utilisant TypeScript et Three.js. J'ai commencé avec JavaScript et suis passé à TypeScript, apprenant à utiliser Three.js pour les graphiques 3D."
        },
        type: ['game'],
        date: '2022',
        technos: ['TypeScript', 'Three.js', 'CSS'],
        link: 'https://icepick4.github.io/tower-of-hanoi/threejs/public/',
        repo_link: 'https://github.com/icepick4/tower-of-hanoi'
    },
    {
        name: 'Memory Game One Piece',
        description: {
            en: 'A memory game inspired by the One Piece anime universe, allowing single or multiplayer gameplay with varying difficulty levels. This project was an opportunity to practice TypeScript and explore the One Piece theme.',
            fr: "Un jeu de mémoire inspiré de l'univers de l'anime One Piece, permettant un jeu solo ou multijoueur avec différents niveaux de difficulté. Ce projet a été l'occasion de pratiquer TypeScript et d'explorer le thème de One Piece."
        },
        type: ['web', 'game'],
        date: '2022',
        technos: ['TypeScript', 'HTML', 'CSS'],
        link: 'https://icepick4.github.io/Memory-One-Piece/public',
        repo_link: 'https://github.com/icepick4/Memory-One-Piece'
    },
    {
        name: 'Daily Steam Stats',
        description: {
            en: 'This project is a Twitter bot that tweets daily stats about the Steam platform, including trending games, most played games, and peak player counts. Hosted on a TrueNAS server with Docker, I developed this bot using Tweepy to share gaming data and practiced containerization for local hosting.',
            fr: "Ce projet est un bot Twitter qui tweete quotidiennement des statistiques sur la plateforme Steam, y compris les jeux tendances, les jeux les plus joués et les pics de joueurs. Hébergé sur un serveur TrueNAS avec Docker, j'ai développé ce bot en utilisant Tweepy pour partager des données de jeu et j'ai pratiqué la conteneurisation pour l'hébergement local."
        },
        type: ['scripting'],
        date: '2022',
        technos: ['Python', 'Tweepy', 'Docker', 'Web Scraping'],
        link: 'https://twitter.com/DailySteamStats',
        repo_link: 'https://github.com/icepick4/daily-steam-stats'
    },
    {
        name: "Rubik's Cube Sessions Manager",
        description: {
            en: "This Python application helps users track their Rubik's Cube solving times across different cube types. It stores session data locally, providing automatic updates and detailed statistics to monitor progress over time.",
            fr: "Cette application Python aide les utilisateurs à suivre leurs temps de résolution de Rubik's Cube sur différents types de cubes. Elle stocke les données de session localement, fournissant des mises à jour automatiques et des statistiques détaillées pour surveiller les progrès au fil du temps."
        },
        type: ['game'],
        date: '2022',
        technos: ['Python', 'Pygame'],
        link: 'https://github.com/icepick4/timer-stats-rubiks-cube/archive/refs/heads/main.zip',
        repo_link: 'https://github.com/icepick4/timer-stats-rubiks-cube'
    },
    {
        name: 'Connect 4',
        description: {
            en: 'A digital version of the classic Connect 4 game, allowing players to compete against an AI or another player. The game was developed using Python and Pygame.',
            fr: 'Une version numérique du jeu classique Puissance 4, permettant aux joueurs de concourir contre une IA ou un autre joueur. Le jeu a été développé en utilisant Python et Pygame.'
        },
        type: ['game'],
        date: '2022',
        technos: ['Python', 'Pygame'],
        link: 'https://github.com/icepick4/Connect-4/archive/refs/heads/main.zip',
        repo_link: 'https://github.com/icepick4/Connect-4'
    },
    {
        name: 'PacSida',
        description: {
            en: "A serious game inspired by Pac-Man, developed during 'La Nuit de l'Info' event to raise awareness about AIDS. The game includes educational elements about the virus, built using HTML, CSS, and JavaScript.",
            fr: "Un jeu sérieux inspiré de Pac-Man, développé lors de l'événement 'La Nuit de l'Info' pour sensibiliser à propos du SIDA. Le jeu comprend des éléments éducatifs sur le virus, construit en utilisant HTML, CSS et JavaScript."
        },
        type: ['web', 'game'],
        date: '2022',
        technos: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://ndli.rabec.eu/',
        repo_link: 'https://github.com/icepick4/nuit-de-l-info2022'
    }
];
