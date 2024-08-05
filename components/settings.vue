<script setup lang="ts">
const { locale, setLocale } = useI18n();

function localeToSet() {
    return locale.value === 'fr' ? 'en' : 'fr';
}

const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === 'dark';
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
    }
});

function rickRoll() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}
</script>

<template>
    <div class="flex flex-row gap-2 items-center">
        <UButton icon="i-circle-flags-fr" class="hidden" />
        <UButton icon="i-circle-flags-en" class="hidden" />
        <UButton
            @click="setLocale(localeToSet())"
            variant="ghost"
            :icon="`i-circle-flags-${localeToSet()}`"
            label="Change language"
        >
        </UButton>
        <UButton
            @click="isDark = !isDark"
            variant="ghost"
            :icon="isDark ? 'i-tabler-moon' : 'i-tabler-sun'"
            label="Dark mode"
        />
        <UButton
            @click="rickRoll()"
            variant="ghost"
            icon="i-tabler-info-circle"
            label="Infos"
        />
    </div>
</template>
