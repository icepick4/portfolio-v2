<script setup lang="ts">
const { launchConfettis } = useConfettis();
</script>
<template>
    <div class="flex">
        <UButton
            icon="i-tabler-confetti"
            @click="launchConfettis()"
            variant="soft"
            label="Confettis"
        />
    </div>
</template>
