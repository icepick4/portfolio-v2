<script setup lang="ts">
defineProps<{
    description: string;
    key_skills: string[];
}>();

const showMore = ref(false);

function toggleShowMore() {
    if (!showMore.value) {
        showMore.value = true;
    }
}

function toggleIcon() {
    showMore.value = !showMore.value;
}
</script>

<template>
    <p
        class="text-base text-neutral-600 dark:text-neutral-400 ml-5  flex flex-col items-start"
        :class="{ 'cursor-pointer': !showMore }"
        @click="!showMore && toggleShowMore()"
    >
    <p v-if="showMore" v-html="description"></p>
    <br v-if="showMore">
    <p v-if="showMore" class="font-bold text-base text-neutral-600 dark:text-neutral-400 underline">{{  $t('keySkills') }} :</p>
    <p v-if="showMore" v-for="skill in key_skills" :key="skill" class="text-base text-neutral-600 dark:text-neutral-400 ml-4">
        <Techno :techno="skill" size="little" />
    </p>
    <p v-else v-html="description.slice(0, 90) + '...'"></p>
        <span
            @click.stop="toggleIcon"
            class="cursor-pointer text-xl -translate-y-1"
            v-if="showMore"
        >
            ▲
        </span>
    </p>
</template>
