<script setup lang="ts">
import { IconArrowBigDownLine } from '@tabler/icons-vue';
import { projects } from '~/data/projects';
import type { ProjectType } from '~/data/types';
import { getProjectTypeLabel, projectTypes } from '~/data/types';

const projectsList = ref(projects);

const currentFilter = ref<ProjectType>('favorite');
filterSkills(currentFilter.value);

const defaultNumberOfProjects = 4;

const currentNumberOfProjects = ref(
    projectsList.value.length > defaultNumberOfProjects
        ? defaultNumberOfProjects
        : projectsList.value.length
);

function filterSkills(type: ProjectType) {
    projectsList.value = projects.filter(
        (project) => project.type.includes(type) || type === 'all'
    );
}

watch(currentFilter, (value) => {
    filterSkills(value);
    currentNumberOfProjects.value =
        projectsList.value.length > defaultNumberOfProjects
            ? defaultNumberOfProjects
            : projectsList.value.length;
});
</script>

<template>
    <section class="flex min-h-0 flex-col gap-3">
        <h2 class="text-xl font-bold">Projects</h2>
        <div class="flex flex-wrap gap-1">
            <UButton
                v-for="(type, index) in projectTypes"
                :key="index"
                @click="currentFilter = type"
                class="hover:bg-stone-600 hover:text-white"
                :class="{ 'bg-stone-600 text-white': type === currentFilter }"
            >
                {{ getProjectTypeLabel(type) }}
            </UButton>
        </div>
        <div class="flex flex-col gap-3 bg-white items-center">
            <Project
                v-for="i in currentNumberOfProjects"
                :key="projectsList[i - 1].name"
                :project="projectsList[i - 1]"
            />
            <div class="flex flex-row items-center justify-center w-full mt-3">
                <UButton
                    v-if="currentNumberOfProjects != projectsList.length"
                    @click="currentNumberOfProjects = projectsList.length"
                >
                    <IconArrowBigDownLine class="w-5 h-5" />
                    Load more
                </UButton>
            </div>
        </div>
    </section>
</template>
