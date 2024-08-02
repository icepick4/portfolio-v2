<script setup lang="ts">
import { IconLink } from '@tabler/icons-vue';
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
            <ConfettisButton />
        </div>

        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div
                    class="flex flex-row gap-2 items-start justify-between w-full"
                >
                    <div class="flex flex-col items-start w-5/6">
                        <a
                            class="text-lg font-bold hover:underline"
                            href="https://resources.github.com/learn/certifications/"
                            >GitHub Foundations</a
                        >
                        <p class="text-xs text-pretty text-neutral-600">
                            {{ $t('githubCert') }}
                        </p>
                    </div>

                    <div class="flex flex-col items-end gap-0.5">
                        <p class="text-sm mb-1.5">2024</p>
                        <a
                            href="https://www.credly.com/badges/73b09490-6836-4bc1-b934-8238c75d4d0d/public_url"
                            target="_blank"
                        >
                            <img
                                src="/logos/github-badge.png"
                                alt="GitHub Cert"
                                class="w-20 h-18"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
