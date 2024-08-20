export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'fr',
    messages: {
        en: {
            about: {
                1: "Hello! I'm a passionate developer with a deep interest in technology and all things related to computing. Over the years, I've dedicated myself creating a variety of personal projects, driven by my passion for learning and exploring new technologies.",
                2: "I'm proficient in full-stack development and DevOps, with a particular focus on Vue.js and Nuxt for web development. On the DevOps side, I have experience with tools like GitHub Actions, Python, Automation, Linux, Terraform, and AWS—skills I've been improving through both personal projects and professional experience.",
                3: 'I hold a BUT in Computer Science from the University of Lyon 1 and am currently pursuing a three-year engineering degree at CPE Lyon, specializing in Computer Engineering. I completed an apprenticeship at Sanofi as a DevOps Developer during my final year of the BUT. Sanofi has continued to support me by hiring me as a DevOps Cloud Engineer throughout my engineering studies. This role is enhancing my skills in DevOps, particularly with GitHub Actions, Python, Terraform, and AWS. I also recently earned the GitHub Foundations certification, demonstrating my knowledge of GitHub.'
            },
            view: 'Live',
            sanofi: {
                1: 'Project to migrate over 10,000 projects from GitLab to GitHub. I implemented automation scripts to streamline the migration process. My responsibilities included coordinating with application teams to ensure a smooth transition, managing workflows, and conducting tests to ensure the reliability of the migrations.',
                2: 'Currently, I am expanding my expertise in Cloud & DevOps, and I am actively working on projects in these areas. As part of an international virtual team, I am enhancing my skills in communication, teamwork, and automation, contributing to the success of our initiatives.',
                projects: {
                    '1': {
                        title: 'Migration from GitLab to GitHub',
                        description:
                            'As part of my tutored project at Sanofi, I successfully led the migration of over 9,000 repositories from GitLab to GitHub, impacting more than 3,000 users. This project, integrated into a broader strategy to modernize DevOps tools, aimed to improve <b>agility</b>, <b>security</b>, and <b>collaboration</b> within the company. My role involved creating <b>Python scripts</b> to <b>automate</b> the migration and rewriting CI/CD pipelines from GitLab to GitHub Actions. This project directly leveraged the skills acquired in my BUT Informatique, notably in <b>Agile project management</b> (using Jira and sprints), <b>automation</b> (developing Python scripts and CI/CD pipelines with GitHub Actions), and <b>code quality</b>. The transition also strengthened my ability to collaborate in multidisciplinary teams and apply best practices in <b>security</b> and development learned during my studies.',
                        key_skills: [
                            'Python',
                            'GitHub Actions',
                            'Agility',
                            'Security',
                            'Collaboration',
                            'Code quality',
                            'Automation'
                        ]
                    },
                    '2': {
                        title: 'Automation of GitHub Repository Updates',
                        description:
                            'I developed an automated tool to clean and update GitHub repositories following the migration from GitLab. The project aimed to detect and remove obsolete strings across the organization’s repositories. I designed a <b>Python script</b> capable of automatically scanning all repositories using the <b>GitHub API</b> and integrating it as a reusable <b>GitHub Action</b>. This project, conducted in collaboration with a DevOps expert, was managed using <b>Agile methods</b> with structured tracking on Jira and regular iterations to refine the results. This work allowed me to apply and reinforce several skills gained during my BUT Informatique, including <b>project management</b>, <b>programming</b>, and <b>automation</b>.',
                        key_skills: [
                            'Python',
                            'GitHub API',
                            'GitHub Actions',
                            'Agility',
                            'Project management',
                            'Automation'
                        ]
                    },
                    '3': {
                        title: 'Automated Retrieval of GitHub Repository/Team Administrators',
                        description:
                            'I developed an automated tool to retrieve project or team administrators on GitHub, reducing the recurring manual requests made to the DevOps team. I designed a <b>Python script</b> capable of fetching this information based on simple inputs, integrated into <b>GitHub Actions</b> via an issue template. This project, structured using <u>Agile methods</u> and managed via Jira, allowed me to consolidate several skills learned during my BUT Informatique, such as <u>project management</u>, <b>automation</b>, and <b>programming</b>. By automating this task, the team was able to save time and improve productivity while making this information more accessible to users.',
                        key_skills: [
                            'Python',
                            'GitHub API',
                            'GitHub Actions',
                            'Agility',
                            'Project management',
                            'Automation'
                        ]
                    },
                    '4': {
                        title: 'Qualification of AWS Services with Terraform',
                        description:
                            'I participated in the qualification of AWS services to ensure their compliance with internal security standards, in collaboration with the cybersecurity team. My primary role was to qualify <b>AWS RDS MySQL</b> by adhering to rules identified through Prisma and developing a compliant <b>Terraform module</b>. During this project, I merged the qualifications for <b>RDS MySQL</b> and <b>PostgreSQL</b> into a single module, optimizing efforts and standardizing the process. This work, structured around <u>Agile cycles</u> with tracking via Jira, allowed me to apply and enhance skills in <u>infrastructure as code</u>, <u>project management</u>, and <u>cybersecurity</u> developed during my BUT Informatique. Although the module is awaiting final validation, this project has already contributed to standardizing the qualification of similar services for the future.',
                        key_skills: [
                            'Terraform',
                            'Infrastructure As Code',
                            'Project management',
                            'Cybersecurity',
                            'MySQL',
                            'AWS',
                            'RDS'
                        ]
                    }
                }
            },
            senzu: {
                1: 'As a Full-Stack Developer, I have honed my skills in managing the whole Senzu API, handling the addition of new features and updating dependencies independently. I have also developed modules for various connected devices. This experience has provided me with valuable exposure to the corporate IT world, deepening my understanding of industry practices and workflows.',
                projects: {
                    '1': {
                        title: 'Update of the Senzu API',
                        description:
                            'The main objective of this mission was to update the API using <b>Symfony 6</b> and <b>PHP 8</b> to resolve issues related to latency and malfunctions. Thanks to the training in <b>PHP</b> and <b>Symfony</b> provided during my BUT, I was able to reimplement several features to ensure compatibility with these new versions while getting familiar with significant changes in Symfony, especially regarding <u>authentication</u>. This update required a thorough analysis of the existing code, identifying incompatibilities, and making the necessary adjustments. The knowledge gained in <u>API management</u> and <u>web technologies</u> during my BUT played a crucial role in the success of this project. The new version of the API was successfully deployed before the end of my internship, followed by rigorous monitoring to correct any potential errors.',
                        key_skills: [
                            'Symfony',
                            'PHP',
                            'Authentication',
                            'API management',
                            'Web Technologies'
                        ]
                    },
                    '2': {
                        title: 'Development of Plugins for Connected Devices',
                        description:
                            "During my internship, I developed several plugins, each addressing specific user needs, directly applying skills acquired during my BUT. The <b>Nuki plugin</b> allows users to remotely control their connected locks via the Senzu application, with seamless integration using <u>OAuth 2.0</u>. The interactive voice server plugin provides <u>automated call management</u> with customizable messages and SMS notifications in case of no response. My understanding of <b>JavaScript</b> and <u>API management</u>, developed during my studies, was instrumental in these tasks. I also developed the Talk AI plugin, a chatbot based on the <b>OpenAI API</b> that scrapes and processes data to provide personalized responses. Additionally, I enhanced the LinkedIn plugin by adding a widget that displays the user's profile picture and other information, addressing technical challenges related to <u>OAuth access management</u> and automatic data updates.",
                        key_skills: [
                            'Nuki',
                            'OAuth',
                            'Automated call management',
                            'JavaScript',
                            'API management',
                            'OpenAI API'
                        ]
                    }
                }
            },
            internship: 'Internship',
            apprenticeship: 'Apprenticeship',
            cpe: 'Computer Engineering course',
            but: 'Computer Science Bachelor - Application Development',
            experience: 'Experience',
            role: 'DevOps Cloud Engineer & Full Stack Developer',
            aboutMe: 'About Me',
            showAll: 'Show all',
            showLess: 'Show less',
            madeBy: 'Made by',
            with: 'with',
            fullStack: 'Full-Stack Developer',
            devopsDeveloper: 'DevOps Developer',
            githubCert:
                'I recently passed the GitHub Foundations certification, demonstrating my knowledge of GitHub and its features. This certification is a testament to my expertise in using GitHub for version control, collaboration, open-source projects, good practices, and more. This is my first certification, I am proud to have passed it and I am looking forward to obtaining more certifications in the future.',
            projects: 'Projects',
            showMore: 'Show more',
            keySkills: 'Key Skills',
            level: 'Level',
            schoolSkills: 'School Skills',
            schoolSkillsDescription:
                'During my Computer Science Bachelor, I acquired strong skills in Developing, Optimizing, Administering, Managing, Leading, and Collaborating, which I was able to deepen during my missions at Senzu and Sanofi. In development, I worked on the Senzu API, improving its performance and integrating new features, while applying my knowledge in API management and web technologies. At Sanofi, I automated the migration of thousands of Git projects, optimized workflows, and strengthened my skills in system administration, agile project management, and cybersecurity. These experiences allowed me to consolidate my knowledge and effectively apply these skills in various professional contexts. You will find more details on these skills in the section just below.'
        },
        fr: {
            about: {
                1: "Bonjour! Je suis un développeur passionné par la technologie et tout ce qui touche à l'informatique. Au fil des années, je me suis consacré à la création de divers projets personnels, animé par ma passion pour l'apprentissage et l'exploration de nouvelles technologies.",
                2: "Je suis compétent en développement full-stack et DevOps, avec un accent particulier sur Vue.js et Nuxt pour le développement web. Du côté DevOps, j'ai de l'expérience avec des outils comme GitHub Actions, Python, l'automatisation, Linux, Terraform et AWS, des compétences que j'ai améliorées à la fois grâce à des projets personnels et à mon expérience professionnelle.",
                3: "Je suis titulaire d'un BUT en informatique de l'Université Lyon 1 et je poursuis actuellement un diplôme d'ingénieur en trois ans à CPE Lyon, spécialisé ingénieur informatique. J'ai effectué une alternance chez Sanofi en tant que développeur DevOps lors de ma dernière année de BUT. Sanofi a continué à me soutenir en m'embauchant en tant qu'alternant ingénieur Cloud DevOps tout au long de mes études d'ingénieur. Ce rôle me permet de renforcer mes compétences en DevOps, en particulier avec GitHub Actions, Python, Terraform et AWS. J'ai également récemment obtenu la certification GitHub Foundations, démontrant mes connaissances sur GitHub."
            },
            view: 'Voir',
            sanofi: {
                1: "Projet de migration de plus de 10 000 projets de GitLab vers GitHub. J'ai mis en place des scripts d'automatisation pour rationaliser le processus de migration. Mes responsabilités comprenaient la coordination avec les équipes d'applications pour assurer une transition en douceur, la gestion des workflows et la réalisation de tests pour garantir la fiabilité des migrations.",
                2: "Actuellement, j'élargis mes compétences en Cloud & DevOps, et je travaille activement sur des projets dans ces domaines. Dans le cadre d'une équipe virtuelle internationale, je renforce mes compétences en communication, anglais, travail d'équipe et automatisation, contribuant ainsi au succès de nos initiatives.",
                projects: {
                    '1': {
                        title: 'Migration de GitLab vers GitHub',
                        description:
                            "Dans le cadre de mon projet tutoré chez Sanofi, j'ai mené à bien la migration de plus de 9 000 repositories de GitLab vers GitHub, impactant plus de 3 000 utilisateurs. Ce projet, intégré à une stratégie de modernisation des outils DevOps, avait pour objectif d'améliorer l'<u>agilité</u>, la <u>sécurité</u> et la <u>collaboration</u> au sein de l'entreprise. Mon rôle a impliqué la création de scripts <b>Python</b> pour <b>automatiser</b> la migration et la réécriture des pipelines CI/CD de GitLab vers <b>GitHub Actions</b>. Ce projet a mobilisé des compétences en <u>gestion de projet Agile</u> (suivi avec Jira), en <b>automatisation</b> (scripts Python et pipelines CI/CD avec GitHub Actions) et en <u>qualité de code</u>. La transition a également renforcé mes capacités à collaborer en équipe pluridisciplinaire et à intégrer les bonnes pratiques de <u>sécurité</u> enseignées durant ma formation.",
                        key_skills: [
                            'Python',
                            'GitHub Actions',
                            'Agilité',
                            'Sécurité',
                            'Collaboration',
                            'Qualité de code',
                            'Automatisation'
                        ]
                    },
                    '2': {
                        title: 'Automatisation de la mise à jour des repositories GitHub',
                        description:
                            "J'ai développé un outil automatisé pour nettoyer et mettre à jour les repositories GitHub après la migration depuis GitLab. Le projet visait à détecter et supprimer des chaînes de caractères obsolètes dans l'ensemble des dépôts de l'organisation. J'ai conçu un script <b>Python</b> capable de parcourir automatiquement tous les repositories en utilisant l'<b>API GitHub</b> et de l'intégrer sous forme de <b>GitHub Action</b>. Ce projet, mené en collaboration avec un expert DevOps, a été géré selon des méthodes <u>Agiles</u>, avec un suivi structuré sur Jira et des itérations régulières pour affiner les résultats. Ce travail m'a permis d'appliquer et de renforcer plusieurs compétences acquises dans le cadre de mon BUT Informatique, notamment en <u>gestion de projet</u>, <b>programmation</b> et <b>automatisation</b>.",
                        key_skills: [
                            'Python',
                            'GitHub API',
                            'GitHub Actions',
                            'Agilité',
                            'Gestion de projet',
                            'Automatisation'
                        ]
                    },
                    '3': {
                        title: 'Récupération automatisée des administrateurs de Repositories/Teams GitHub',
                        description:
                            "J'ai développé un outil automatisé pour récupérer les administrateurs de projets ou de teams sur GitHub, afin de réduire les demandes manuelles récurrentes adressées à l'équipe DevOps. J'ai conçu un script <b>Python</b> capable de récupérer ces informations à partir de simples inputs, le tout intégré à <b>GitHub Actions</b> via une issue template. Ce projet, structuré selon des <u>méthodes Agiles</u> et géré via Jira, m'a permis de consolider plusieurs compétences acquises lors de mon BUT Informatique, telles que la <u>gestion de projet</u>, l'<b>automatisation</b> et la <b>programmation</b>. En automatisant cette tâche, l'équipe a pu libérer du temps et améliorer sa productivité, tout en facilitant l'accès à ces informations pour les utilisateurs.",
                        key_skills: [
                            'Python',
                            'GitHub API',
                            'GitHub Actions',
                            'Agilité',
                            'Gestion de projet',
                            'Automatisation'
                        ]
                    },
                    '4': {
                        title: 'Qualification de Services AWS avec Terraform',
                        description:
                            "J'ai participé à la qualification de services AWS pour garantir leur conformité avec les normes de sécurité internes, en collaboration avec l'équipe cybersécurité. Mon rôle principal consistait à qualifier <b>AWS RDS MySQL</b> en respectant les règles identifiées via Prisma et en développant un module <b>Terraform</b> conforme. Durant ce projet, j'ai fusionné les qualifications pour <b>RDS MySQL</b> et <b>PostgreSQL</b> en un module unique, optimisant ainsi les efforts et standardisant la procédure. Ce travail, structuré selon des <u>cycles Agiles</u> avec un suivi via Jira, m'a permis d'appliquer et de renforcer des compétences en <u>infrastructure as code</u>, <u>gestion de projet</u> et <u>cybersécurité</u>, développées au cours de mon BUT Informatique. Bien que le module soit en attente de validation finale, ce projet a déjà contribué à standardiser la qualification de services similaires pour l'avenir.",
                        key_skills: [
                            'Terraform',
                            'Infrastructure As Code',
                            'Gestion de projet',
                            'Cybersecurité',
                            'MySQL',
                            'AWS',
                            'RDS'
                        ]
                    }
                }
            },
            senzu: {
                1: "En tant que développeur Full-Stack, j'ai affiné mes compétences en gérant toute l'API de Senzu, en gérant l'ajout de nouvelles fonctionnalités et la mise à jour des dépendances de manière indépendante. J'ai également développé des modules pour divers appareils connectés. Cette expérience m'a permis d'acquérir une exposition précieuse au monde de l'informatique d'entreprise, approfondissant ma compréhension des pratiques et des flux de travail",
                projects: {
                    '1': {
                        title: "Mise à jour de l'API Senzu",
                        description:
                            "L'objectif principal de cette mission était de mettre à jour l'API en utilisant <b>Symfony 6</b> et <b>PHP 8</b> pour résoudre des problèmes de latence et de dysfonctionnement. Grâce à la formation en <b>PHP</b> et <b>Symfony</b> acquise durant mon BUT, j'ai pu réimplémenter plusieurs fonctionnalités pour assurer la compatibilité avec ces nouvelles versions tout en me familiarisant avec les changements majeurs de Symfony, notamment en matière d'<u>authentification</u>. Cette mise à jour a nécessité une analyse approfondie du code existant, l'identification des incompatibilités et la réalisation des ajustements nécessaires. Les connaissances acquises en <u>gestion d'API</u> et en <u>technologies web</u> durant mon BUT ont joué un rôle clé dans le succès de ce projet. La nouvelle version de l'API a été mise en production avec succès avant la fin de mon stage, avec un suivi rigoureux pour corriger d'éventuelles erreurs.",
                        key_skills: [
                            'Symfony',
                            'PHP',
                            'Authentification',
                            "Gestion d'API",
                            'Technologies Web'
                        ]
                    },
                    '2': {
                        title: 'Développement de plugins pour appareils connectés',
                        description:
                            "Durant mon stage, j'ai développé plusieurs plugins répondant à des besoins spécifiques des utilisateurs, en appliquant directement les compétences acquises pendant mon BUT. Le plugin <b>Nuki</b> permet aux utilisateurs de contrôler à distance leurs serrures connectées via l'application Senzu, avec une intégration fluide utilisant <u>OAuth 2.0</u>. Le plugin de serveur vocal interactif offre une <u>gestion automatisée des appels</u> avec des messages personnalisables et l'envoi de SMS en cas d'absence. Mes connaissances en <b>JavaScript</b> et en <u>gestion d'API</u>, développées pendant mon cursus, ont été essentielles pour ces tâches. J'ai également développé le plugin Talk IA, un chatbot basé sur l'<b>API d'OpenAI</b>, qui scrape et traite des données pour fournir des réponses personnalisées. De plus, j'ai amélioré le plugin LinkedIn en ajoutant un widget affichant la photo de profil et d'autres informations de l'utilisateur, en relevant des défis techniques liés à la <u>gestion des accès OAuth</u> et à la mise à jour automatique des données.",
                        key_skills: [
                            'Nuki',
                            'OAuth',
                            'Gestion automatisée des appels',
                            'JavaScript',
                            'Gestion d API',
                            'OpenAI API'
                        ]
                    }
                }
            },
            internship: 'Stage',
            apprenticeship: 'Alternance',
            cpe: "Cursus d'ingénieur en informatique",
            but: "BUT Informatique - Réalisation d'applications",
            experience: 'Expérience',
            role: 'Ingénieur Cloud DevOps & Développeur FullStack',
            aboutMe: 'À Propos de moi',
            showAll: 'Voir tout',
            showLess: 'Voir moins',
            madeBy: 'Fait par',
            with: 'avec',
            fullStack: 'Développeur Full-Stack',
            devopsDeveloper: 'Développeur DevOps',
            githubCert:
                "J'ai récemment obtenu la certification GitHub Foundations, démontrant mes connaissances sur GitHub et ses fonctionnalités. Cette certification est la preuve de mon expertise dans l'utilisation de GitHub pour le contrôle de version, la collaboration, les projets open-source, les bonnes pratiques, et plus encore. C'est ma première certification, je suis fier de l'avoir obtenue et j'ai hâte d'obtenir plus de certifications à l'avenir.",
            projects: 'Projets',
            showMore: 'Voir plus',
            keySkills: 'Compétences Clés',
            level: 'Niveau',
            schoolSkills: 'Compétences Scolaires',
            schoolSkillsDescription:
                "Au cours de mon BUT Informatique, j'ai acquis des compétences solides en Réaliser, Optimiser, Administrer, Gérer, Conduire, et Collaborer, que j'ai pu approfondir durant mes missions chez Senzu et Sanofi. En développement, j'ai travaillé sur l'API de Senzu, en améliorant ses performances et en intégrant de nouvelles fonctionnalités, tout en appliquant mes connaissances en gestion d'API et technologies web. Chez Sanofi, j'ai automatisé la migration de milliers de projets Git, en optimisant les workflows et en renforçant mes compétences en administration de systèmes, en gestion de projet agile et en sécurité informatique. Ces expériences m'ont permis de consolider mes acquis et d'appliquer efficacement ces compétences dans des contextes professionnels variés. Vous retrouverez plus de détails sur ces compétences dans la section juste en dessous."
        }
    }
}));
