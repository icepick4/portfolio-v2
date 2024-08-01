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

type Status = 'completed' | 'in-progress' | 'planned';

type Project = {
    name: string;
    description: string;
    status: Status;
    date: string;
    technos: string[];
    link: string;
    repo_link: string;
};

export type { Project, Status, Techno, TechnoType };
