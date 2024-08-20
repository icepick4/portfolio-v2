<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const data = {
    fr: {
        competences: [
            {
                id: 1,
                name: 'Réaliser',
                summary:
                    "Développer, c'est à dire concevoir, coder, tester, et intégrer une solution informatique pour un client.",
                description:
                    'Élaborer une application informatique, faire évoluer une application informatique, maintenir en conditions opérationnelles une application informatique.',
                goals: [
                    'Élaborer une application informatique',
                    'Faire évoluer une application informatique',
                    'Maintenir en conditions opérationnelles une application informatique'
                ],
                levels: [
                    {
                        name: 'Développer des applications informatiques simples',
                        level: 1,
                        skills: [
                            'Implémenter des conceptions simples',
                            'Élaborer des conceptions simples',
                            'Faire des essais et évaluer leurs résultats en regard des spécifications',
                            'Développer des interfaces utilisateurs'
                        ]
                    },
                    {
                        name: "Partir des exigences et aller jusqu'à une application complète",
                        level: 2,
                        skills: [
                            'Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences',
                            "Appliquer des principes d'accessibilité et d'ergonomie",
                            'Adopter de bonnes pratiques de conception et de programmation',
                            "Vérifier et valider la qualité de l'application par les tests"
                        ]
                    },
                    {
                        name: 'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)',
                        level: 3,
                        skills: [
                            'Choisir et implémenter les architectures adaptées',
                            'Faire évoluer une application existante',
                            'Intégrer des solutions dans un environnement de production'
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: 'Optimiser',
                summary:
                    "Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources.",
                description:
                    "Améliorer les performances des programmes dans des contextes contraints. Limiter l'impact environnemental d'une application informatique. Mettre en place des applications informatiques adaptées et efficaces.",
                goals: [
                    'Améliorer les performances des programmes',
                    "Limiter l'impact environnemental",
                    'Mettre en place des applications adaptées'
                ],
                levels: [
                    {
                        name: 'Appréhender et construire des algorithmes',
                        level: 1,
                        skills: [
                            'Analyser un problème avec méthode',
                            'Comparer des algorithmes pour des problèmes classiques',
                            "Formaliser et mettre en œuvre des outils mathématiques pour l'informatique"
                        ]
                    },
                    {
                        name: 'Sélectionner les algorithmes adéquats pour répondre à un problème donné',
                        level: 2,
                        skills: [
                            'Choisir des structures de données complexes adaptées au problème',
                            'Utiliser des techniques algorithmiques adaptées pour des problèmes complexes',
                            'Comprendre les enjeux et moyens de sécurisation des données et du code',
                            "Évaluer l'impact environnemental et sociétal des solutions proposées"
                        ]
                    },
                    {
                        name: 'Analyser et optimiser des applications',
                        level: 3,
                        skills: [
                            'Anticiper les résultats de diverses métriques',
                            "Profiler, analyser et justifier le comportement d'un code existant",
                            "Choisir et utiliser des bibliothèques dédiées au domaine d'application"
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: 'Administrer',
                summary:
                    "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser les systèmes informatiques d'une organisation.",
                description:
                    'Déployer une nouvelle architecture technique, améliorer une infrastructure existante, sécuriser les applications et les services.',
                goals: [
                    'Déployer une nouvelle architecture technique',
                    'Améliorer une infrastructure existante',
                    'Sécuriser les applications et les services'
                ],
                levels: [
                    {
                        name: 'Installer et configurer un poste de travail',
                        level: 1,
                        skills: [
                            "Identifier les différents composants (matériels et logiciels) d'un système numérique",
                            "Utiliser les fonctionnalités de base d'un système multitâches/multiutilisateurs",
                            "Installer et configurer un système d'exploitation et des outils de développement",
                            "Configurer un poste de travail dans un réseau d'entreprise"
                        ]
                    },
                    {
                        name: 'Déployer des services dans une architecture réseau',
                        level: 2,
                        skills: [
                            'Concevoir et développer des applications communicantes',
                            'Utiliser des serveurs et des services réseaux virtualisés',
                            "Sécuriser les services et données d'un système"
                        ]
                    }
                ]
            },
            {
                id: 4,
                name: 'Gérer',
                summary:
                    "Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise.",
                description:
                    'Lancer un nouveau projet, sécuriser des données, exploiter des données pour la prise de décisions.',
                goals: [
                    'Lancer un nouveau projet',
                    'Sécuriser des données',
                    'Exploiter des données pour la prise de décisions'
                ],
                levels: [
                    {
                        name: "Concevoir et mettre en place une base de données à partir d'un cahier des charges client",
                        level: 1,
                        skills: [
                            'Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)',
                            'Visualiser des données',
                            "Concevoir une base de données relationnelle à partir d'un cahier des charges"
                        ]
                    },
                    {
                        name: 'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',
                        level: 2,
                        skills: [
                            "Optimiser les modèles de données de l'entreprise",
                            'Assurer la sécurité des données (intégrité et confidentialité)',
                            'Organiser la restitution de données à travers la programmation et la visualisation',
                            'Manipuler des données hétérogènes'
                        ]
                    }
                ]
            },
            {
                id: 5,
                name: 'Conduire',
                summary:
                    'Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.',
                description:
                    "Lancer un nouveau projet, piloter le maintien d'un projet en condition opérationnelle, faire évoluer un système d'information.",
                goals: [
                    'Lancer un nouveau projet',
                    "Piloter le maintien d'un projet en condition opérationnelle",
                    'Faire évoluer un système d’information'
                ],
                levels: [
                    {
                        name: 'Identifier les besoins métiers des clients et des utilisateurs',
                        level: 1,
                        skills: [
                            'Élaborer les spécifications fonctionnelles et non fonctionnelles à partir des besoins du client',
                            'Planifier et suivre les étapes du projet en tenant compte des contraintes',
                            'Assurer le bon déroulement du projet en gérant les risques et en résolvant les problèmes éventuels',
                            'Mettre en place les processus de validation et de recette pour garantir la qualité du produit final'
                        ]
                    },
                    {
                        name: 'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
                        level: 2,
                        skills: [
                            "Identifier les processus présents dans une organisation en vue d'améliorer les systèmes d'information",
                            "Formaliser les besoins du client et de l'utilisateur",
                            "Identifier les critères de faisabilité d'un projet informatique",
                            'Définir et mettre en œuvre une démarche de suivi de projet'
                        ]
                    }
                ]
            },
            {
                id: 6,
                name: 'Collaborer',
                summary:
                    'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',
                description:
                    "Lancer un nouveau projet, organiser son travail en relation avec celui de son équipe, élaborer, gérer et transmettre de l'information.",
                goals: [
                    'Lancer un nouveau projet',
                    'Organiser son travail en relation avec celui de son équipe',
                    "Élaborer, gérer et transmettre de l'information"
                ],
                levels: [
                    {
                        name: 'Identifier ses aptitudes pour travailler dans une équipe',
                        level: 1,
                        skills: [
                            "Appréhender l'écosystème numérique",
                            'Découvrir les aptitudes requises selon les différents secteurs informatiques',
                            "Identifier les statuts, les fonctions et les rôles de chaque membre d'une équipe pluridisciplinaire",
                            'Acquérir les compétences interpersonnelles pour travailler en équipe'
                        ]
                    },
                    {
                        name: "Situer son rôle et ses missions au sein d'une équipe informatique",
                        level: 2,
                        skills: [
                            "Comprendre la diversité, la structure et la dimension de l'informatique dans une organisation (ESN, DSI, ...)",
                            "Appliquer une démarche pour intégrer une équipe informatique au sein d'une organisation",
                            'Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique',
                            'Rendre compte de son activité professionnelle'
                        ]
                    },
                    {
                        name: 'Manager une équipe informatique',
                        level: 3,
                        skills: [
                            'Organiser et partager une veille technologique et informationnelle',
                            "Identifier les enjeux de l'économie de l'innovation numérique",
                            "Guider la conduite du changement informatique au sein d'une organisation",
                            'Accompagner le management de projet informatique'
                        ]
                    }
                ]
            }
        ]
    },
    en: {
        competences: [
            {
                id: 1,
                name: 'Develop',
                summary:
                    'Developing means designing, coding, testing, and integrating an IT solution for a client.',
                description:
                    'Develop a software application, enhance an existing application, maintain an application in operational condition.',
                goals: [
                    'Develop a software application',
                    'Enhance an existing application',
                    'Maintain an application in operational condition'
                ],
                levels: [
                    {
                        name: 'Develop simple software applications',
                        level: 1,
                        skills: [
                            'Implement simple designs',
                            'Create simple designs',
                            'Test and evaluate the results against specifications',
                            'Develop user interfaces'
                        ]
                    },
                    {
                        name: 'From requirements to a complete application',
                        level: 2,
                        skills: [
                            'Create and implement functional and non-functional specifications from requirements',
                            'Apply accessibility and ergonomics principles',
                            'Adopt best practices in design and programming',
                            'Verify and validate application quality through testing'
                        ]
                    },
                    {
                        name: 'Adapt applications across multiple platforms (embedded, web, mobile, IoT...)',
                        level: 3,
                        skills: [
                            'Choose and implement appropriate architectures',
                            'Enhance an existing application',
                            'Integrate solutions into a production environment'
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: 'Optimize',
                summary:
                    'Propose optimized IT solutions based on specific criteria: execution time, accuracy, resource consumption.',
                description:
                    'Improve program performance in constrained environments. Reduce the environmental impact of IT solutions. Implement efficient and adapted IT applications.',
                goals: [
                    'Improve program performance',
                    'Reduce environmental impact',
                    'Implement adapted applications'
                ],
                levels: [
                    {
                        name: 'Understand and build algorithms',
                        level: 1,
                        skills: [
                            'Analyze a problem methodically',
                            'Compare algorithms for common problems',
                            'Formalize and implement mathematical tools for IT'
                        ]
                    },
                    {
                        name: 'Select appropriate algorithms to address a given problem',
                        level: 2,
                        skills: [
                            'Choose complex data structures adapted to the problem',
                            'Use appropriate algorithmic techniques for complex problems',
                            'Understand data and code security challenges',
                            'Evaluate the environmental and societal impact of proposed solutions'
                        ]
                    },
                    {
                        name: 'Analyze and optimize applications',
                        level: 3,
                        skills: [
                            'Anticipate results of various metrics',
                            'Profile, analyze, and justify the behavior of existing code',
                            'Choose and use libraries specific to the application domain'
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: 'Administer',
                summary:
                    'Install, configure, deploy, maintain, and optimize the IT infrastructure, services, and networks of an organization.',
                description:
                    'Deploy a new technical architecture, improve an existing infrastructure, and secure applications and services.',
                goals: [
                    'Deploy a new technical architecture',
                    'Improve an existing infrastructure',
                    'Secure applications and services'
                ],
                levels: [
                    {
                        name: 'Install and configure a workstation',
                        level: 1,
                        skills: [
                            'Identify the different components (hardware and software) of a digital system',
                            'Use the basic functions of a multi-tasking/multi-user system',
                            'Install and configure an operating system and development tools',
                            'Configure a workstation in a corporate network'
                        ]
                    },
                    {
                        name: 'Deploy services in a network architecture',
                        level: 2,
                        skills: [
                            'Design and develop communication applications',
                            'Use virtualized servers and network services',
                            'Secure services and data in a system'
                        ]
                    }
                ]
            },
            {
                id: 4,
                name: 'Manage',
                summary:
                    'Design, manage, administer, and exploit corporate data, and provide all the information needed for effective business management.',
                description:
                    'Launch a new project, secure data, and exploit data for decision-making.',
                goals: [
                    'Launch a new project',
                    'Secure data',
                    'Exploit data for decision-making'
                ],
                levels: [
                    {
                        name: 'Design and implement a database from a client’s specifications',
                        level: 1,
                        skills: [
                            'Update and query a relational database (via direct queries or through an application)',
                            'Visualize data',
                            'Design a relational database from a specification'
                        ]
                    },
                    {
                        name: 'Optimize a database, interact with an application, and implement security',
                        level: 2,
                        skills: [
                            'Optimize company data models',
                            'Ensure data security (integrity and confidentiality)',
                            'Organize data retrieval through programming and visualization',
                            'Handle heterogeneous data'
                        ]
                    }
                ]
            },
            {
                id: 5,
                name: 'Lead',
                summary:
                    'Meet user needs with regard to the customer’s value chain, organize and manage an IT project using traditional or agile methods.',
                description:
                    'Launch a new project, manage project operations, and enhance an information system.',
                goals: [
                    'Launch a new project',
                    'Manage project operations',
                    'Enhance an information system'
                ],
                levels: [
                    {
                        name: 'Identify the business needs of clients and users',
                        level: 1,
                        skills: [
                            'Develop functional and non-functional specifications based on client needs',
                            'Plan and monitor project phases, taking constraints into account',
                            'Ensure project success by managing risks and resolving potential issues',
                            'Implement validation and acceptance processes to guarantee the quality of the final product'
                        ]
                    },
                    {
                        name: 'Apply a project management approach based on client and user business needs',
                        level: 2,
                        skills: [
                            'Identify existing processes in an organization to improve information systems',
                            'Formalize the needs of clients and users',
                            'Identify the feasibility criteria of an IT project',
                            'Define and implement a project management approach'
                        ]
                    }
                ]
            },
            {
                id: 6,
                name: 'Collaborate',
                summary:
                    'Acquire, develop, and leverage the skills necessary to work effectively in an IT team.',
                description:
                    'Launch a new project, organize work in relation to team objectives, and manage, share, and communicate information.',
                goals: [
                    'Launch a new project',
                    'Organize work in relation to team objectives',
                    'Manage, share, and communicate information'
                ],
                levels: [
                    {
                        name: 'Identify one’s skills for working in a team',
                        level: 1,
                        skills: [
                            'Understand the digital ecosystem',
                            'Discover the skills required in different IT sectors',
                            'Identify the roles and functions of each member of a multidisciplinary team',
                            'Acquire interpersonal skills to work in a team'
                        ]
                    },
                    {
                        name: 'Position one’s role and missions within an IT team',
                        level: 2,
                        skills: [
                            'Understand the diversity, structure, and scale of IT within an organization (IT services, etc.)',
                            'Apply an approach to integrate into an IT team within an organization',
                            'Leverage interpersonal skills to work effectively in an IT team',
                            'Report on professional activities'
                        ]
                    },
                    {
                        name: 'Manage an IT team',
                        level: 3,
                        skills: [
                            'Organize and share technological and informational monitoring',
                            'Identify the challenges of digital innovation',
                            'Guide IT change management within an organization',
                            'Support IT project management'
                        ]
                    }
                ]
            }
        ]
    }
};

const itemsEN = [
    {
        label: 'Develop',
        icon: 'i-mdi-code-braces',
        slot: 'develop'
    },
    {
        label: 'Optimize',
        icon: 'i-mdi-trending-up',
        slot: 'optimize'
    },
    {
        label: 'Administer',
        icon: 'i-mdi-server',
        slot: 'administer'
    },
    {
        label: 'Manage',
        icon: 'i-mdi-database',
        slot: 'manage'
    },
    {
        label: 'Lead',
        icon: 'i-mdi-briefcase',
        slot: 'lead'
    },
    {
        label: 'Collaborate',
        icon: 'i-mdi-account-group',
        slot: 'collaborate'
    }
];

const itemsFR = [
    {
        label: 'Réaliser',
        icon: 'i-mdi-code-braces',
        slot: 'develop'
    },
    {
        label: 'Optimiser',
        icon: 'i-mdi-trending-up',
        slot: 'optimize'
    },
    {
        label: 'Administrer',
        icon: 'i-mdi-server',
        slot: 'administer'
    },
    {
        label: 'Gérer',
        icon: 'i-mdi-database',
        slot: 'manage'
    },
    {
        label: 'Conduire',
        icon: 'i-mdi-briefcase',
        slot: 'lead'
    },
    {
        label: 'Collaborer',
        icon: 'i-mdi-account-group',
        slot: 'collaborate'
    }
];

const datas = computed(() => {
    return locale.value === 'fr' ? data.fr : data.en;
});

const competence1 = computed(() => datas.value.competences[0]);
const competence2 = computed(() => datas.value.competences[1]);
const competence3 = computed(() => datas.value.competences[2]);
const competence4 = computed(() => datas.value.competences[3]);
const competence5 = computed(() => datas.value.competences[4]);
const competence6 = computed(() => datas.value.competences[5]);
</script>

<template>
    <section class="flex flex-col gap-3">
        <a href="#schoolSkills">
            <div class="flex flex-row gap-1 items-center group relative">
                <IconLink
                    class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                />
                <h2 class="text-2xl font-bold hover:cursor-pointer">
                    {{ $t('schoolSkills') }}
                </h2>
            </div>
        </a>

        <p class="text-sm text-neutral-600 dark:text-neutral-400">
            {{ $t('schoolSkillsDescription') }}
        </p>
        <UAccordion :items="locale === 'fr' ? itemsFR : itemsEN">
            <template #develop>
                <SchoolSkill :competence="competence1" />
            </template>
            <template #optimize>
                <SchoolSkill :competence="competence2" />
            </template>
            <template #administer>
                <SchoolSkill :competence="competence3" />
            </template>
            <template #manage>
                <SchoolSkill :competence="competence4" />
            </template>
            <template #lead>
                <SchoolSkill :competence="competence5" />
            </template>
            <template #collaborate>
                <SchoolSkill :competence="competence6" />
            </template>
        </UAccordion>
    </section>
</template>
