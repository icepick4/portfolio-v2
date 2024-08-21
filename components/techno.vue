<script setup lang="ts">
import { findTechnoByTitle } from '~/data/technos';
const props = defineProps<{
    techno: string;
    size: 'little' | 'medium' | 'big';
}>();

const technoObject = ref(findTechnoByTitle(props.techno));

const colorMode = useColorMode();

const littleClassesDisplay = 'rounded-md flex flex-row items-center text-xs';
const bigClassesDisplay =
    'flex flex-col items-center justify-evenly text-xs text-center w-full h-full';
</script>

<template>
    <ClientOnly>
        <div
            v-if="technoObject"
            :class="{
                [littleClassesDisplay]: size === 'little',
                [bigClassesDisplay]: size === 'big'
            }"
        >
            <p v-if="size == 'little'" class="mr-2 text-xs">
                • {{ technoObject.title }}
            </p>
            <p
                v-else-if="size == 'big'"
                class="text-xs font-bold text-stone-800 dark:text-neutral-400"
            >
                {{ technoObject.title }}
            </p>
            <div class="group/label relative">
                <i
                    v-if="technoObject.icon"
                    :class="[
                        `devicon-${technoObject.icon}-original devicon-${technoObject.icon}-plain`,
                        {
                            'text-xl': size == 'little',
                            'text-3xl': size == 'medium',
                            'text-5xl': size === 'big'
                        },
                        {
                            colored:
                                (technoObject.icon !== 'github' &&
                                    technoObject.icon !== 'symfony' &&
                                    technoObject.icon !== 'threejs' &&
                                    technoObject.icon !== 'oauth' &&
                                    technoObject.icon !== 'linux' &&
                                    technoObject.icon !== 'vercel' &&
                                    technoObject.icon !== 'markdown' &&
                                    colorMode.value === 'dark') ||
                                colorMode.value === 'light'
                        }
                    ]"
                ></i>
                <UBadge
                    class="text-xs group-hover/label:opacity-100 transition-all opacity-0 absolute -top-4 -right-10 z-10"
                    color="gray"
                    >{{ techno }}</UBadge
                >
            </div>
            <div class="group/label relative">
                <img
                    v-if="!technoObject.icon"
                    :src="`logos/${technoObject.image}.webp`"
                    alt="logo"
                    :class="{
                        'w-4 h-4': size == 'little',
                        'w-8 h-8': size == 'medium',
                        'w-12 h-12': size === 'big'
                    }"
                />
                <UBadge
                    class="text-xs group-hover/label:opacity-100 transition-all opacity-0 absolute -top-4 -right-8 z-10"
                    color="gray"
                    >{{ techno }}</UBadge
                >
            </div>
        </div>
        <div v-else>
            <div class="group/label relative">
                <img
                    :src="`logos/${techno
                        .toLocaleLowerCase()
                        .replace(' ', '-')
                        .replace('.', '')}.webp`"
                    alt="logo"
                    :class="{
                        'w-4 h-4': size == 'little',
                        'w-8 h-8': size == 'medium',
                        'w-12 h-12': size == 'big'
                    }"
                />
                <UBadge
                    class="text-xs group-hover/label:opacity-100 transition-all opacity-0 absolute -top-4 -right-10 z-10"
                    color="gray"
                    >{{ techno }}</UBadge
                >
            </div>
        </div>
    </ClientOnly>
</template>
