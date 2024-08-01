<script setup lang="ts">
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
</script>

<template>
    <section class="flex min-h-0 flex-col gap-3">
        <h2 class="text-xl font-bold">Skills</h2>
        <div class="flex flex-wrap gap-1">
            <UButton
                v-for="(type, index) in technoTypes"
                :key="index"
                @click="currentFilter = type"
                class="hover:bg-stone-600 hover:text-white"
                :class="{ 'bg-stone-600 text-white': type === currentFilter }"
            >
                {{ getTechnoTypeLabel(type) }}
            </UButton>
        </div>
        <div class="flex flex-wrap gap-1.5">
            <UButton
                v-for="skill in skills"
                :key="skill.title"
                class="relative text-center border border-stone-600 p-1 rounded-md flex flex-col gap-4 items-center text-xs w-28 h-28 justify-start"
                square
                variant="soft"
                :to="skill.url"
                target="_blank"
            >
                <p class="text-xs font-bold text-stone-800">
                    {{ skill.title }}
                </p>
                <i
                    v-if="skill.icon"
                    :class="[
                        `devicon-${skill.icon}-original devicon-${skill.icon}-plain colored`
                    ]"
                    class="text-5xl"
                ></i>
                <img
                    v-if="!skill.icon"
                    :src="`/logos/${skill.image}.webp`"
                    alt="logo"
                    class="w-12 h-12"
                />
            </UButton>
        </div>
    </section>
</template>
