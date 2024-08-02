<script setup lang="ts">
import { IconLink, IconMapPinFilled } from '@tabler/icons-vue';
const { locale, setLocale } = useI18n();

function localeToSet() {
    return locale.value === 'fr' ? 'en' : 'fr';
}

const { launchConfettis } = useConfettis();

const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === 'dark';
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
    }
});
</script>

<template>
    <div class="flex items-start sm:items-center justify-between">
        <div class="flex flex-col gap-2">
            <a href="#me">
                <div class="flex flex-row gap-1 items-center group relative">
                    <IconLink
                        class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                    />
                    <h2 class="text-2xl font-bold hover:cursor-pointer">
                        Rémi Jara
                    </h2>
                </div>
            </a>
            <div class="my-1">
                <p
                    class="max-w-md text-sm text-neutral-600 dark:text-neutral-400"
                >
                    {{ $t('role') }}
                </p>
                <p
                    class="max-w-md items-center text-xs gap-1.5 inline-flex text-neutral-600 dark:text-neutral-400"
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
                    icon="i-tabler-file"
                    size="sm"
                    color="primary"
                    variant="soft"
                    square
                    to="https://flowcv.com/resume/s42pbqpvrc"
                    target="_blank"
                />
            </div>
            <div class="flex flex-row gap-2 items-center">
                <UButton icon="i-circle-flags-fr" class="hidden" />
                <UButton icon="i-circle-flags-en" class="hidden" />
                <UButton
                    @click="setLocale(localeToSet())"
                    variant="ghost"
                    :icon="`i-circle-flags-${localeToSet()}`"
                >
                </UButton>
                <UButton
                    @click="isDark = !isDark"
                    variant="ghost"
                    :icon="isDark ? 'i-tabler-moon' : 'i-tabler-sun'"
                />
            </div>
        </div>
        <img
            src="/photo.jpg"
            alt="Rémi Jara"
            class="sm:w-40 sm:h-40 w-20 h-20 rounded-full object-cover"
            @click="launchConfettis()"
        />
    </div>
</template>
