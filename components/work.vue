<script setup lang="ts">
import { IconLink } from '@tabler/icons-vue';
</script>

<template>
    <section class="flex flex-col gap-3">
        <a href="#experience">
            <div class="flex flex-row gap-1 items-center group relative">
                <IconLink
                    class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                />
                <h2 class="text-xl font-bold hover:cursor-pointer">
                    {{ $t('experience') }}
                </h2>
            </div>
        </a>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div class="flex flex-row items-center justify-between w-full">
                    <div class="flex flex-col gap-1 items-start">
                        <div
                            class="flex justify-start flex-col sm:flex-row gap-1 sm:gap-2 items-start"
                        >
                            <a
                                class="text-lg font-bold hover:underline"
                                href="https://www.sanofi.com"
                                >Sanofi</a
                            >
                            <p class="block sm:hidden text-sm">
                                2023 - 2027 ({{ $t('apprenticeship') }})
                            </p>
                        </div>
                        <p>{{ $t('devopsDeveloper') }}</p>
                    </div>

                    <div class="flex flex-col items-end gap-0.5">
                        <p class="hidden sm:block text-sm">2023 - 2027</p>
                        <p class="hidden sm:block text-sm">
                            ({{ $t('apprenticeship') }})
                        </p>
                    </div>
                </div>
            </div>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('sanofi.1') }}
            </p>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('sanofi.2') }}
            </p>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - Technologies:
            </p>
            <div
                class="ml-4 list-disc list-inside text-neutral-600 dark:text-neutral-400"
            >
                <Techno techno="GitHub" size="little" />
                <Techno techno="GitHub Actions" size="little" />
                <Techno techno="Python" size="little" />
                <Techno techno="Terraform" size="little" />
                <Techno techno="AWS" size="little" />
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div
                    class="flex flex-row gap-1 items-center justify-between w-full"
                >
                    <div class="flex flex-col gap-1 items-start">
                        <div
                            class="flex justify-start flex-col sm:flex-row gap-1 sm:gap-2 items-start"
                        >
                            <a
                                class="text-lg font-bold hover:underline"
                                href="https://welcome.senzu.app"
                                >Senzu</a
                            >
                            <p class="sm:hidden block text-sm">
                                April 2023 - June 2023 ({{ $t('internship') }})
                            </p>
                        </div>
                        <p>{{ $t('fullStack') }}</p>
                    </div>

                    <div class="flex flex-col items-end gap-0.5">
                        <p class="hidden sm:block text-sm">
                            April 2023 - June 2023
                        </p>
                        <p class="hidden sm:block text-sm">
                            ({{ $t('internship') }})
                        </p>
                    </div>
                </div>
            </div>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('senzu.1') }}
            </p>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - Technologies:
            </p>
            <div
                class="ml-4 list-disc list-inside text-xs text-neutral-600 dark:text-neutral-400"
            >
                <Techno techno="PHP" size="little" />
                <Techno techno="JavaScript" size="little" />
                <Techno techno="HTML" size="little" />
                <Techno techno="CSS" size="little" />
                <Techno techno="Symfony" size="little" />
                <Techno techno="MySQL" size="little" />
            </div>
        </div>
    </section>
</template>
