<script setup lang="ts">
useHead({
    title: 'Rémi Jara',
    meta: [
        {
            name: 'description',
            content:
                "Rémi Jara, I'm a passionate developer with a deep interest in technology and all things related to computing. Over the years, I've dedicated myself creating a variety of personal projects, driven by my passion for learning and exploring new technologies."
        },
        {
            property: 'og:title',
            content: 'Rémi Jara'
        },
        {
            property: 'og:description',
            content:
                "Rémi Jara, I'm a passionate developer with a deep interest in technology and all things related to computing. Over the years, I've dedicated myself creating a variety of personal projects, driven by my passion for learning and exploring new technologies."
        },
        {
            property: 'twitter:card',
            content: 'summary'
        }
    ]
});

useSeoMeta({
    title: 'Rémi Jara',
    description:
        "Rémi Jara, I'm a passionate developer with a deep interest in technology and all things related to computing. Over the years, I've dedicated myself creating a variety of personal projects, driven by my passion for learning and exploring new technologies.",
    ogTitle: 'Rémi Jara',
    ogDescription:
        "Rémi Jara, I'm a passionate developer with a deep interest in technology and all things related to computing. Over the years, I've dedicated myself creating a variety of personal projects, driven by my passion for learning and exploring new technologies.",
    twitterCard: 'summary'
});
</script>

<template>
    <div>
        <NuxtPage />
    </div>
</template>
