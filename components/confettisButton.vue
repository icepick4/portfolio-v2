<script setup lang="ts">
const { launchConfettis } = useConfettis();
</script>
<template>
    <div class="flex">
        <slot name="default" :onLaunchConfettis="launchConfettis" />
    </div>
</template>
