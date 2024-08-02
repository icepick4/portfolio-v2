<script setup lang="ts">
import { IconMapPinFilled } from '@tabler/icons-vue';
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1">
            <h1 class="text-2xl font-bold">Rémi Jara</h1>
            <div class="my-1">
                <p class="max-w-md text-sm text-neutral-600">
                    DevOps Cloud Engineer & Full Stack Developer
                </p>
                <p
                    class="max-w-md items-center text-xs gap-1.5 inline-flex text-neutral-600"
                >
                    <IconMapPinFilled class="w-4 h-4" />
                    Lyon, France
                </p>
            </div>
            <div class="flex flex-row gap-2 items-center">
                <UButton
                    icon="i-tabler-brand-github"
                    size="sm"
                    color="primary"
                    variant="soft"
                    square
                    to="https://github.com/icepick4"
                    target="_blank"
                />
                <UButton
                    icon="i-tabler-brand-linkedin"
                    size="sm"
                    color="primary"
                    variant="soft"
                    square
                    to="https://www.linkedin.com/in/remijara/"
                    target="_blank"
                />
                <UButton
                    icon="i-tabler-phone"
                    size="sm"
                    color="primary"
                    variant="soft"
                    square
                    to="tel:+33771675362"
                />
                <UButton
                    icon="i-tabler-mail"
                    size="sm"
                    color="primary"
                    variant="soft"
                    square
                    to="mailto:remi.jara4@gmail.com"
                />
                <UButton
                    icon="i-tabler-download"
                    size="sm"
                    color="primary"
                    variant="soft"
                    square
                    to="https://flowcv.com/resume/s42pbqpvrc"
                    target="_blank"
                />
            </div>
        </div>
        <img
            src="/photo.jpg"
            alt="Rémi Jara"
            class="w-40 h-40 rounded-full object-cover"
        />
    </div>
</template>
