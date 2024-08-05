<script setup lang="ts">
import { IconLink } from '@tabler/icons-vue';
import { technos } from '~/data/technos';
import type { Techno, TechnoType } from '~/data/types';
import { getTechnoTypeLabel, technoTypes } from '~/data/types';

const skills = ref<Techno[]>(technos);

const currentFilter = ref<TechnoType>('language');
filterSkills(currentFilter.value);

function filterSkills(type: TechnoType) {
    skills.value = technos.filter((techno) => techno.type === type);
}

watch(currentFilter, (value) => {
    filterSkills(value);
});

const colorMode = useColorMode();
</script>

<template>
    <section class="flex flex-col gap-3">
        <a href="#technologies">
            <div class="flex flex-row gap-1 items-center group relative">
                <IconLink
                    class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                />
                <h2 class="text-xl font-bold hover:cursor-pointer">
                    Technologies
                </h2>
            </div>
        </a>
        <div class="flex flex-wrap gap-1">
            <UButton
                v-for="(type, index) in technoTypes"
                :key="index"
                @click="currentFilter = type"
                class="hover:bg-stone-600 hover:dark:bg-primary-300 hover:text-white"
                :class="{
                    'bg-stone-600 dark:bg-primary-300 text-white ':
                        type === currentFilter
                }"
            >
                {{ getTechnoTypeLabel(type) }}
            </UButton>
        </div>
        <div class="flex flex-wrap gap-1.5">
            <UButton
                v-for="skill in skills"
                :key="skill.title"
                class="relative border border-stone-200 dark:border-stone-600 p-0.5 rounded-md w-24 h-24 sm:w-28 sm:h-28"
                square
                variant="soft"
                :to="skill.url"
                target="_blank"
            >
                <Techno
                    :techno="skill.title"
                    size="big"
                    class="flex flex-col items-center justify-evenly text-xs text-center w-full h-full"
                />
            </UButton>
        </div>
    </section>
</template>
