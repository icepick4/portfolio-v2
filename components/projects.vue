<script setup lang="ts">
import { IconArrowBigDownLine, IconLink } from '@tabler/icons-vue';
import { projects } from '~/data/projects';
import type { Project, ProjectType } from '~/data/types';
import { getProjectTypeLabel, projectTypes } from '~/data/types';

const projectsList = ref<Project[]>([]);

const currentFilter = ref<ProjectType>('favorite');

const defaultNumberOfProjects = 4;
const currentNumberOfProjects = ref(0);

function filterSkills(type: ProjectType) {
    projectsList.value = projects.filter((project) =>
        project.type.includes(type)
    );
    currentNumberOfProjects.value =
        projectsList.value.length > defaultNumberOfProjects
            ? defaultNumberOfProjects
            : projectsList.value.length;
}

filterSkills(currentFilter.value);

watch(currentFilter, (value) => {
    filterSkills(value);
});
</script>

<template>
    <section class="flex flex-col gap-3">
        <a href="#projects">
            <div class="flex flex-row gap-1 items-center group relative">
                <IconLink
                    class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                />
                <h2 class="text-xl font-bold hover:cursor-pointer">
                    {{ $t('projects') }}
                </h2>
            </div>
        </a>
        <div class="flex flex-wrap gap-1">
            <UButton
                v-for="(type, index) in projectTypes"
                :key="index"
                @click="currentFilter = type"
                class="hover:bg-stone-600 hover:dark:bg-primary-300 hover:text-white"
                :class="{
                    'bg-stone-600 dark:bg-primary-300 text-white':
                        type === currentFilter
                }"
            >
                {{ getProjectTypeLabel(type) }}
            </UButton>
        </div>
        <div class="flex flex-col gap-3 items-center">
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
                    {{ $t('showAll') }}
                </UButton>
                <UButton
                    v-else-if="projectsList.length > defaultNumberOfProjects"
                    @click="currentNumberOfProjects = defaultNumberOfProjects"
                >
                    <IconArrowBigDownLine class="w-5 h-5 rotate-180" />
                    {{ $t('showLess') }}
                </UButton>
            </div>
        </div>
    </section>
</template>
