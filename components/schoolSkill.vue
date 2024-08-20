<script setup lang="ts">
const props = defineProps<{
    competence: {
        id: number;
        name: string;
        summary: string;
        description: string;
        goals: string[];
        levels: {
            name: string;
            level: number;
            skills: string[];
        }[];
    };
}>();

const { locale } = useI18n();

const titlesFR = {
    description: 'Description:',
    associatedSkills: 'Compétences associées:',
    competenceLevels: 'Niveaux de compétence:'
};

const titlesEN = {
    description: 'Description:',
    associatedSkills: 'Associated Skills:',
    competenceLevels: 'Competence Levels:'
};
</script>

<template>
    <div
        :key="competence.id"
        class="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-4 transition-all hover:shadow-lg"
    >
        <h2 class="text-2xl font-bold mb-2 underline">{{ competence.name }}</h2>

        <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            {{ competence.summary }}
        </p>

        <div>
            <p
                class="text-lg font-bold text-neutral-600 dark:text-neutral-400 mb-1"
            >
                {{
                    locale === 'fr'
                        ? titlesFR.description
                        : titlesEN.description
                }}
            </p>
            <p>{{ competence.description }}</p>
        </div>

        <div class="mt-4">
            <p
                class="text-lg font-bold text-neutral-600 dark:text-neutral-400 mb-1"
            >
                {{
                    locale === 'fr'
                        ? titlesFR.associatedSkills
                        : titlesEN.associatedSkills
                }}
            </p>
            <ul class="list-disc list-inside pl-4 space-y-1">
                <li
                    v-for="goal in competence.goals"
                    :key="goal"
                    class="text-sm text-neutral-600 dark:text-neutral-400"
                >
                    {{ goal }}
                </li>
            </ul>
        </div>

        <div class="mt-4">
            <p
                class="text-lg font-bold text-neutral-600 dark:text-neutral-400 mb-1"
            >
                {{
                    locale === 'fr'
                        ? titlesFR.competenceLevels
                        : titlesEN.competenceLevels
                }}
            </p>
            <div
                v-for="level in competence.levels"
                :key="level.name"
                class="mb-3"
            >
                <h3 class="text-sm font-semibold">
                    {{ level.name }} ({{ $t('level') }} {{ level.level }})
                </h3>
                <ul
                    class="list-disc list-inside pl-4 space-y-1 mt-1 text-sm text-neutral-600 dark:text-neutral-400"
                >
                    <li v-for="skill in level.skills" :key="skill">
                        {{ skill }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
