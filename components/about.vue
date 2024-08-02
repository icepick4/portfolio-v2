<script setup lang="ts">
import { IconLink } from '@tabler/icons-vue';
</script>
<template>
    <section class="flex flex-col gap-3">
        <a href="#about">
            <div class="flex flex-row gap-1 items-center group relative">
                <IconLink
                    class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                />
                <h2 class="text-xl font-bold hover:cursor-pointer">
                    {{ $t('aboutMe') }}
                </h2>
            </div>
        </a>
        <p class="text-pretty text-sm text-neutral-600 dark:text-neutral-400">
            {{ $t('about.1') }}
        </p>
        <p class="text-pretty text-sm text-neutral-600 dark:text-neutral-400">
            {{ $t('about.2') }}
        </p>
        <p class="text-pretty text-sm text-neutral-600 dark:text-neutral-400">
            {{ $t('about.3') }}
        </p>
    </section>
</template>
