<script setup lang="ts">
import { projects } from '~/data/projects';

const projectsList = ref(projects);
</script>

<template>
    <section class="flex min-h-0 flex-col gap-3">
        <h2 class="text-xl font-bold">Projects</h2>
        <div class="flex flex-col gap-3 bg-white">
            <Project
                v-for="project in projectsList"
                :key="project.name"
                :project="project"
            />
        </div>
    </section>
</template>
