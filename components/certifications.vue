<script setup lang="ts">
import { IconExternalLink, IconLink } from '@tabler/icons-vue';
useHead({
    script: [
        {
            src: '//cdn.credly.com/assets/utilities/embed.js',
            async: true,
            type: 'text/javascript'
        }
    ]
});
</script>

<template>
    <section class="flex flex-col gap-3">
        <div class="flex flex-row gap-2 items-center">
            <a href="#certifications">
                <div class="flex flex-row gap-1 items-center group relative">
                    <IconLink
                        class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                    />
                    <h2 class="text-xl font-bold hover:cursor-pointer">
                        Certifications
                    </h2>
                </div>
            </a>
            <ClientOnly>
                <ConfettisButton>
                    <template v-slot:default="{ onLaunchConfettis }">
                        <UButton
                            icon="i-tabler-confetti"
                            variant="soft"
                            label="Celebrate"
                            @click="onLaunchConfettis"
                        />
                    </template>
                </ConfettisButton>
            </ClientOnly>
        </div>

        <div class="flex flex-col gap-5">
            <div>
                <div class="flex flex-row justify-between gap-2 w-full">
                    <div class="flex flex-col items-start gap-2 w-3/4">
                        <a
                            class="text-lg font-bold hover:underline"
                            href="https://resources.github.com/learn/certifications/"
                            >GitHub Actions</a
                        >
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400"
                        >
                            {{ $t('githubActionsCert.description') }}
                        </p>
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400 mt-2"
                            v-html="$t('githubActionsCert.skills')"
                        />
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400 mt-2"
                        >
                            {{ $t('githubActionsCert.recap') }}
                        </p>
                    </div>

                    <div class="flex flex-col justify-start items-end gap-0.5">
                        <p class="text-sm mb-1.5">October 2024</p>
                        <a
                            href="https://www.credly.com/badges/a3e27415-2a38-4d99-940c-f3df155fbad1/public_url"
                            target="_blank"
                            class="group relative"
                        >
                            <img
                                src="/logos/github-actions-badge.webp"
                                alt="GitHub Cert"
                                class="w-24 h-24"
                            />
                            <IconExternalLink
                                class="w-5 h-5 opacity-0 group-hover:opacity-100 transition duration-300 absolute"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex flex-row justify-between gap-2 w-full">
                    <div class="flex flex-col items-start gap-2 w-3/4">
                        <a
                            class="text-lg font-bold hover:underline"
                            href="https://resources.github.com/learn/certifications/"
                            >GitHub Foundations</a
                        >
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400"
                        >
                            {{ $t('githubFoundationsCert.description') }}
                        </p>
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400 mt-2"
                            v-html="$t('githubFoundationsCert.skills')"
                        />
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400 mt-2"
                        >
                            {{ $t('githubFoundationsCert.recap') }}
                        </p>
                    </div>

                    <div class="flex flex-col justify-start items-end gap-0.5">
                        <p class="text-sm mb-1.5">July 2024</p>
                        <a
                            href="https://www.credly.com/badges/73b09490-6836-4bc1-b934-8238c75d4d0d/public_url"
                            target="_blank"
                            class="group relative"
                        >
                            <img
                                src="/logos/github-foundations-badge.webp"
                                alt="GitHub Cert"
                                class="w-24 h-24"
                            />
                            <IconExternalLink
                                class="w-5 h-5 opacity-0 group-hover:opacity-100 transition duration-300 absolute"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex flex-row justify-between gap-2 w-full">
                    <div class="flex flex-col items-start gap-2 w-5/6">
                        <a
                            class="text-lg font-bold hover:underline"
                            href="https://www.ets.org/toeic"
                            >{{ $t('toeicTitle') }}</a
                        >
                        <p
                            class="text-xs text-pretty text-neutral-600 dark:text-neutral-400"
                        >
                            {{ $t('toeicDescription') }}<br />
                            ———<br />
                            {{ $t('toeicListening') }}: 460/495<br />
                            {{ $t('toeicReading') }}: 420/495<br />
                            Total: 880/990 ({{ $t('toeicLevel') }})
                        </p>
                    </div>

                    <div class="flex flex-col justify-start items-end gap-0.5">
                        <p class="text-sm mb-1.5">May 2024</p>
                        <a
                            href="https://www.ets.org/toeic"
                            target="_blank"
                            class="group relative"
                        >
                            <img
                                src="/logos/toeic.webp"
                                alt="TOEIC Cert"
                                class="h-9 w-auto"
                            />
                            <IconExternalLink
                                class="w-5 h-5 opacity-0 group-hover:opacity-100 transition duration-300 absolute"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
