<script setup>
const { data } = await useAsyncData(() => queryContent('projects').find());

const projects = data.value[0].body;
</script>

<template>
    <p>Projects:</p>
    <div v-for="project in projects" :key="project.slug">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <p>{{ project.status }}</p>
        <p>{{ project.date }}</p>
        <p>{{ project.type }}</p>
        <p>{{ project.technos }}</p>
        <p>{{ project.link }}</p>
        <p>{{ project.repo_link }}</p>
    </div>
</template>
