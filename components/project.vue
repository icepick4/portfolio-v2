<script setup lang="ts">
import { IconPlayerPlay } from '@tabler/icons-vue';
import type { Project } from '~/data/types';

const { locale } = useI18n();

defineProps<{ project: Project }>();

function getProjectImageName(title: string) {
    return title.toLowerCase().replace(/\s/g, '-').replace("'", '');
}
</script>

<template>
    <UCard
        class="relative overflow-hidden group hover:bg-neutral-100 dark:hover:bg-primary-900 transition duration-300"
        :ui="{
            body: {
                padding: 'px-3 py-4 sm:p-4'
            },
            background:
                'bg-white dark:bg-primary-950 border border-stone-200 dark:border-stone-600',
            ring: ''
        }"
    >
        <div class="flex flex-col gap-2">
            <div class="flex flex-row items-start justify-between w-full">
                <div class="flex flex-col gap-1 items-start">
                    <a
                        class="text-lg font-bold hover:underline"
                        :href="project.link"
                        >{{ project.name }}</a
                    >
                    <div
                        class="flex flex-wrap gap-4 text-neutral-600 dark:text-neutral-400"
                    >
                        <Techno
                            v-for="techno in project.technos"
                            :key="techno"
                            :techno="techno"
                            size="medium"
                        />
                    </div>
                </div>
                <div class="flex flex-col items-end gap-0.5">
                    <p class="text-sm">{{ project.date }}</p>
                </div>
            </div>
        </div>
        <div class="mt-4 flex flex-row items-center justify-between w-full">
            <p
                class="text-xs text-neutral-600 dark:text-neutral-400 w-full sm:w-1/2"
            >
                {{
                    locale === 'fr'
                        ? project.description.fr
                        : project.description.en
                }}
            </p>
            <img
                :src="`projects/${getProjectImageName(project.name)}.webp`"
                alt="logo"
                class="hidden sm:block absolute bottom-0 right-[-10%] shadow-2xl rounded-t-xl z-10 h-32 w-60 sm:h-44 sm:w-80 transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
            />
        </div>
        <div class="mt-4 flex flex-row items-center justify-start gap-2 w-full">
            <UButton :to="project.repo_link" target="_blank" variant="solid">
                <i class="devicon-github-original"></i> Code
            </UButton>
            <UButton :to="project.link" target="_blank" variant="solid">
                <IconPlayerPlay class="w-4 h-4" /> {{ $t('view') }}
            </UButton>
        </div>
    </UCard>
</template>
