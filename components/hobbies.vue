<script setup lang="ts">
import { IconLink } from '@tabler/icons-vue';
import { hobbies } from '~/data/hobbies';
const _ = [
    'i-fluent-emoji-flat-skateboard',
    'i-fluent-emoji-flat-joystick',
    'i-fluent-emoji-flat-desktop-computer',
    'i-fluent-emoji-flat-keyboard',
    'i-fluent-emoji-flat-man-running'
];

const { locale } = useI18n();

const { launchConfettis } = useConfettis();
</script>

<template>
    <section class="flex flex-col gap-y-3">
        <a href="#hobbies">
            <div class="flex flex-row gap-1 items-center group relative">
                <IconLink
                    class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                />
                <h2 class="text-2xl font-bold hover:cursor-pointer">Hobbies</h2>
            </div>
        </a>
        <div class="flex flex-wrap gap-1.5">
            <UButton
                v-for="hobby in hobbies"
                :key="locale == 'en' ? hobby.title.en : hobby.title.fr"
                class="relative text-center border border-stone-200 dark:border-stone-600 p-0.5 rounded-md flex flex-col items-center justify-evenly text-base w-24 h-24 sm:w-32 sm:h-32 group"
                square
                variant="soft"
                @click="launchConfettis(hobby.emoji)"
            >
                <p
                    class="text-base font-bold text-stone-800 dark:text-neutral-400"
                >
                    {{ locale == 'en' ? hobby.title.en : hobby.title.fr }}
                </p>
                <UIcon
                    v-if="hobby.icon"
                    class="text-5xl group-hover:scale-125 transition-all duration-200"
                    :name="`i-fluent-emoji-flat-${hobby.icon}`"
                />
            </UButton>
        </div>
    </section>
</template>
