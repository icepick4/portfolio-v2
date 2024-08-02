<script setup lang="ts">
const { launchConfettis } = useConfettis();
</script>
<template>
    <div class="flex">
        <UButton
            icon="i-tabler-confetti"
            @click="launchConfettis()"
            variant="soft"
        />
    </div>
</template>
