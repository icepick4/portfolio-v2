export const technoTypes = [
    'language',
    'framework',
    'library',
    'database',
    'development-tool',
    'devops',
    'apis-integration'
] as const;

const technoTypesLabels: Record<TechnoType, Record<string, string>> = {
    language: {
        en: 'Language',
        fr: 'Langage'
    },
    framework: {
        en: 'Framework',
        fr: 'Framework'
    },
    library: {
        en: 'Library',
        fr: 'Bibliothèque'
    },
    database: {
        en: 'Database',
        fr: 'Base de données'
    },
    'development-tool': {
        en: 'Development Tool',
        fr: 'Outil de développement'
    },
    devops: {
        en: 'DevOps',
        fr: 'DevOps'
    },
    'apis-integration': {
        en: 'APIs & Integration',
        fr: 'APIs et intégration'
    }
};

export function getTechnoTypeLabel(type: TechnoType) {
    const { locale } = useI18n();
    return technoTypesLabels[type][locale.value];
}

type TechnoType = (typeof technoTypes)[number];

type Techno = {
    title: string;
    icon?: string;
    image?: string;
    type: TechnoType;
    url: string;
};

export const projectTypes = [
    'favorite',
    'all',
    'game',
    'web',
    'dev-tool',
    'scripting'
] as const;

const projectTypesLabels: Record<ProjectType, Record<string, string>> = {
    favorite: {
        en: 'Favorite',
        fr: 'Favoris'
    },
    all: {
        en: 'All',
        fr: 'Tous'
    },
    game: {
        en: 'Game',
        fr: 'Jeux-vidéo'
    },
    web: {
        en: 'Web',
        fr: 'Web'
    },
    'dev-tool': {
        en: 'Dev Tool',
        fr: 'Outil de développement'
    },
    scripting: {
        en: 'Scripting',
        fr: 'Script'
    }
};

export function getProjectTypeLabel(type: ProjectType) {
    const { locale } = useI18n();
    return projectTypesLabels[type][locale.value];
}

type ProjectType = (typeof projectTypes)[number];

type Locale = 'en' | 'fr';

type Project = {
    name: string;
    description: Record<Locale, string>;
    date: string;
    type: ProjectType[];
    technos: string[];
    link: string;
    repo_link: string;
};

type Hobby = {
    title: Record<Locale, string>;
    icon: string;
};

export type { Hobby, Locale, Project, ProjectType, Techno, TechnoType };
