<script setup lang="ts">
useHead({
    title: 'Rémi Jara',
    meta: [
        {
            name: 'description',
            content: 'Portfolio of Rémi Jara'
        },
        {
            property: 'og:title',
            content: 'Rémi Jara'
        },
        {
            property: 'og:description',
            content: 'Portfolio of Rémi Jara'
        },
        {
            property: 'twitter:card',
            content: 'summary'
        }
    ]
});

useSeoMeta({
    title: 'Rémi Jara',
    description: 'Portfolio of Rémi Jara',
    ogTitle: 'Rémi Jara',
    ogDescription: 'Portfolio of Rémi Jara',
    twitterCard: 'summary'
});
</script>

<template>
    <div>
        <NuxtPage />
    </div>
</template>
