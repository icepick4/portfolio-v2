import type { Project } from './types';

export const projects: Project[] = [
    {
        name: 'LyricsLingua',
        description:
            'A web application for translating song lyrics using AI. This project involved learning new technologies like Nuxt, Stripe, and OpenAI integration.',
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
        name: 'Capitalympics',
        description:
            'A web application to help users learn about country flags and capitals, offering a focused learning experience based on regions. Built using Vue.js and Tailwind CSS, with backend services hosted via Docker and Nginx.',
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
        name: 'OnePyece',
        description:
            'A Python package serving as an API wrapper for the One Piece universe, allowing users to retrieve data from the series. This project was a learning experience in Python package development and API integration.',
        type: ['dev-tool', 'favorite'],
        date: '2023',
        technos: ['Python', 'PyPi'],
        link: 'https://pypi.org/project/onepyece/',
        repo_link: 'https://github.com/icepick4/onepyece'
    },
    {
        name: 'Portfolio Levi Lea',
        description:
            'A portfolio website created for Levi Lea, a student graphic designer. The site showcases her work and was developed using Vue.js, TypeScript, and Tailwind CSS.',
        type: ['web'],
        date: '2023',
        technos: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Swiper.js'],
        link: 'https://levilea.fr/',
        repo_link: 'https://github.com/icepick4'
    },
    {
        name: 'Sonic Game',
        description:
            'This project is a game inspired by the Dino Game in Google Chrome. The game is a simple endless runner game where the player controls a character that must avoid obstacles. I chose to use a pixel art style for the game, designing some of the assets myself. This project was created to practice my skills in Pygame and Python, aiming to create a simple and fun game.',
        type: ['game'],
        date: '2022',
        technos: ['Python', 'Pygame'],
        link: 'https://github.com/icepick4/Sonic-Game/archive/refs/heads/main.zip',
        repo_link: 'https://github.com/icepick4/Sonic-Game'
    },
    {
        name: 'Tower of Hanoi',
        description:
            'Inspired by the classic Tower of Hanoi puzzle, this game challenges players to move disks between towers using TypeScript and Three.js. I initially started with JavaScript and transitioned to TypeScript, learning how to use Three.js for 3D graphics.',
        type: ['game'],
        date: '2022',
        technos: ['TypeScript', 'Three.js', 'CSS'],
        link: 'https://icepick4.github.io/tower-of-hanoi/threejs/public/',
        repo_link: 'https://github.com/icepick4/tower-of-hanoi'
    },
    {
        name: 'Memory Game One Piece',
        description:
            'A memory game inspired by the One Piece anime universe, allowing single or multiplayer gameplay with varying difficulty levels. This project was an opportunity to practice TypeScript and explore the One Piece theme.',
        type: ['web', 'game'],
        date: '2022',
        technos: ['TypeScript', 'HTML', 'CSS'],
        link: 'https://icepick4.github.io/Memory-One-Piece/public',
        repo_link: 'https://github.com/icepick4/Memory-One-Piece'
    },
    {
        name: 'Daily Steam Stats',
        description:
            'This project is a Twitter bot that tweets daily stats about the Steam platform, including trending games, most played games, and peak player counts. Hosted on a TrueNAS server with Docker, I developed this bot using Tweepy to share gaming data and practiced containerization for local hosting.',
        type: ['scripting'],
        date: '2022',
        technos: ['Python', 'Tweepy', 'Docker', 'Web Scraping'],
        link: 'https://twitter.com/DailySteamStats',
        repo_link: 'https://github.com/icepick4/daily-steam-stats'
    },
    {
        name: "Rubik's Cube Sessions Manager",
        description:
            "This Python application helps users track their Rubik's Cube solving times across different cube types. It stores session data locally, providing automatic updates and detailed statistics to monitor progress over time.",
        type: ['game'],
        date: '2022',
        technos: ['Python', 'Pygame', 'Data Management'],
        link: 'https://github.com/icepick4/timer-stats-rubiks-cube/archive/refs/heads/main.zip',
        repo_link: 'https://github.com/icepick4/timer-stats-rubiks-cube'
    },
    {
        name: 'Connect 4',
        description:
            'A digital version of the classic Connect 4 game, allowing players to compete against an AI or another player. The game was developed using Python and Pygame.',
        type: ['game'],
        date: '2022',
        technos: ['Python', 'Pygame'],
        link: 'https://github.com/icepick4/Connect-4/archive/refs/heads/main.zip',
        repo_link: 'https://github.com/icepick4/Connect-4'
    },
    {
        name: 'PacSida',
        description:
            "A serious game inspired by Pac-Man, developed during 'La Nuit de l'Info' event to raise awareness about AIDS. The game includes educational elements about the virus, built using HTML, CSS, and JavaScript.",
        type: ['web', 'game'],
        date: '2022',
        technos: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://ndli.rabec.eu/',
        repo_link: 'https://github.com/icepick4/nuit-de-l-info2022'
    }
];
