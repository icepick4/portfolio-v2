export const technoTypes = [
    'language',
    'framework',
    'library',
    'database',
    'development-tool',
    'devops',
    'apis-integration'
] as const;

export function getTechnoTypeLabel(type: TechnoType) {
    switch (type) {
        case 'language':
            return 'Language';
        case 'framework':
            return 'Framework';
        case 'library':
            return 'Library';
        case 'database':
            return 'Database';
        case 'development-tool':
            return 'Development Tool';
        case 'devops':
            return 'DevOps';
        case 'apis-integration':
            return 'APIs & Integration';
    }
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
    'web',
    'game',
    'dev-tool',
    'scripting'
] as const;

export function getProjectTypeLabel(type: ProjectType) {
    switch (type) {
        case 'web':
            return 'Web';
        case 'game':
            return 'Game';
        case 'dev-tool':
            return 'Dev Tool';
        case 'scripting':
            return 'Scripting';
        case 'all':
            return 'All';
        case 'favorite':
            return 'Favorite';
    }
}

type ProjectType = (typeof projectTypes)[number];

type Project = {
    name: string;
    description: string;
    date: string;
    type: ProjectType[];
    technos: string[];
    link: string;
    repo_link: string;
};

export type { Project, ProjectType, Techno, TechnoType };
