<script setup lang="ts">
import { findTechnoByTitle } from '~/data/technos';
const props = defineProps<{ techno: string; logo?: boolean }>();

const techno = ref(findTechnoByTitle(props.techno));

const colorMode = useColorMode();
</script>

<template>
    <div
        v-if="techno"
        class="rounded-md flex flex-row items-center justify-start text-xs"
    >
        <p v-if="!logo" class="mr-2 text-xs">• {{ techno.title }}</p>
        <i
            v-if="techno.icon"
            :class="[
                `devicon-${techno.icon}-original devicon-${techno.icon}-plain`,
                { 'text-xl': !logo, 'text-3xl': logo },
                {
                    colored:
                        (techno.icon !== 'github' &&
                            techno.icon !== 'symfony' &&
                            colorMode.value === 'dark') ||
                        colorMode.value === 'light'
                }
            ]"
        ></i>
        <img
            v-if="!techno.icon"
            :src="`logos/${techno.image}.webp`"
            alt="logo"
            :class="{ 'w-4 h-4': !logo, 'w-8 h-8': logo }"
        />
    </div>
</template>
