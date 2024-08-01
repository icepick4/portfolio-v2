type TechnoType =
    | 'language'
    | 'framework'
    | 'library'
    | 'database'
    | 'development-tool'
    | 'devops'
    | 'apis-integration';

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
