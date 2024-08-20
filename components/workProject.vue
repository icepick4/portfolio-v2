<script setup lang="ts">
const props = defineProps<{
    org: 'senzu' | 'sanofi';
}>();

const projectLength = props.org === 'sanofi' ? 4 : 2;

const projectsKeySkills = ref<{
    fr: Record<'senzu' | 'sanofi', Record<number, string[]>>;
    en: Record<'senzu' | 'sanofi', Record<number, string[]>>;
}>({
    fr: {
        senzu: {
            1: [
                'Symfony 6',
                'PHP 8',
                'Authentification',
                "Gestion d'API",
                'Technologies Web'
            ],
            2: [
                'Nuki',
                'OAuth',
                'Gestion automatisée des appels',
                'JavaScript',
                "Gestion d'API",
                'OpenAI API'
            ]
        },
        sanofi: {
            1: [
                'Python',
                'GitHub Actions',
                'Agilité',
                'Sécurité',
                'Collaboration',
                'Qualité de code',
                'Automatisation'
            ],
            2: [
                'Python',
                'GitHub API',
                'GitHub Actions',
                'Agilité',
                'Gestion de projet',
                'Automatisation'
            ],
            3: [
                'Python',
                'GitHub API',
                'GitHub Actions',
                'Agilité',
                'Gestion de projet',
                'Automatisation'
            ],
            4: [
                'Terraform',
                'Infrastructure As Code',
                'Gestion de projet',
                'Cybersecurité',
                'MySQL',
                'AWS',
                'RDS'
            ]
        }
    },
    en: {
        senzu: {
            1: [
                'Symfony',
                'PHP',
                'Authentication',
                'API management',
                'Web Technologies'
            ],
            2: [
                'Nuki',
                'OAuth',
                'Automated call management',
                'JavaScript',
                'API management',
                'OpenAI API'
            ]
        },
        sanofi: {
            1: [
                'Python',
                'GitHub Actions',
                'Agility',
                'Security',
                'Collaboration',
                'Code quality',
                'Automation'
            ],
            2: [
                'Python',
                'GitHub API',
                'GitHub Actions',
                'Agility',
                'Project management',
                'Automation'
            ],
            3: [
                'Python',
                'GitHub API',
                'GitHub Actions',
                'Agility',
                'Project management',
                'Automation'
            ],
            4: [
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
});

const { locale } = useI18n();
</script>

<template>
    <div v-for="i in projectLength">
        <span class="text-lg font-bold">
            - {{ $t(`${org}.projects.${i}.title`) }}
        </span>
        <WorkProjectDescription
            :description="$t(`${org}.projects.${i}.description`)"
            :key_skills="
                locale == 'fr'
                    ? projectsKeySkills.fr[org][i]
                    : projectsKeySkills.en[org][i]
            "
        />
    </div>
</template>
