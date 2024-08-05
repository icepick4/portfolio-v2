<script setup lang="ts">
import { findTechnoByTitle } from '~/data/technos';
const props = defineProps<{
    techno: string;
    size: 'little' | 'medium' | 'big';
}>();

const techno = ref(findTechnoByTitle(props.techno));

const colorMode = useColorMode();

const littleClassesDisplay = 'rounded-md flex flex-row items-center text-xs';
const bigClassesDisplay =
    'flex flex-col items-center justify-evenly text-xs text-center w-full h-full';
</script>

<template>
    <ClientOnly>
        <div
            v-if="techno"
            :class="{
                [littleClassesDisplay]: size === 'little',
                [bigClassesDisplay]: size === 'big'
            }"
        >
            <p v-if="size == 'little'" class="mr-2 text-xs">
                • {{ techno.title }}
            </p>
            <p
                v-else-if="size == 'big'"
                class="text-xs font-bold text-stone-800 dark:text-neutral-400"
            >
                {{ techno.title }}
            </p>
            <i
                v-if="techno.icon"
                :class="[
                    `devicon-${techno.icon}-original devicon-${techno.icon}-plain`,
                    {
                        'text-xl': size == 'little',
                        'text-3xl': size == 'medium',
                        'text-5xl': size === 'big'
                    },
                    {
                        colored:
                            (techno.icon !== 'github' &&
                                techno.icon !== 'symfony' &&
                                techno.icon !== 'threejs' &&
                                techno.icon !== 'oauth' &&
                                techno.icon !== 'linux' &&
                                techno.icon !== 'vercel' &&
                                techno.icon !== 'markdown' &&
                                colorMode.value === 'dark') ||
                            colorMode.value === 'light'
                    }
                ]"
            ></i>
            <img
                v-if="!techno.icon"
                :src="`logos/${techno.image}.webp`"
                alt="logo"
                :class="{
                    'w-4 h-4': size == 'little',
                    'w-8 h-8': size == 'medium',
                    'w-12 h-12': size === 'big'
                }"
            />
        </div>
    </ClientOnly>
</template>
