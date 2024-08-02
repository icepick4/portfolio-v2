<script setup lang="ts"></script>

<template>
    <section class="flex flex-col gap-3">
        <h2 class="text-xl font-bold">{{ $t('experience') }}</h2>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div class="flex flex-row items-center justify-between w-full">
                    <div class="flex flex-col items-start">
                        <a
                            class="text-lg font-bold hover:underline"
                            href="https://www.sanofi.com"
                            >Sanofi</a
                        >
                        <p>{{ $t('devopsDeveloper') }}</p>
                    </div>

                    <div class="flex flex-col items-end gap-0.5">
                        <p class="text-sm">2023 - 2027</p>
                        <p class="text-sm">({{ $t('apprenticeship') }})</p>
                    </div>
                </div>
            </div>
            <p class="text-xs text-neutral-600">- {{ $t('sanofi.1') }}</p>
            <p class="text-xs text-neutral-600">- {{ $t('sanofi.2') }}</p>
            <p class="text-xs text-neutral-600">- Technologies:</p>
            <div class="ml-4 list-disc list-inside text-neutral-600">
                <Techno techno="GitHub" />
                <Techno techno="GitHub Actions" />
                <Techno techno="Python" />
                <Techno techno="Terraform" />
                <Techno techno="AWS" />
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div
                    class="flex flex-row gap-1 items-center justify-between w-full"
                >
                    <div class="flex flex-col items-start">
                        <a
                            class="text-lg font-bold hover:underline"
                            href="https://welcome.senzu.app"
                            >Senzu</a
                        >
                        <p>{{ $t('fullStack') }}</p>
                    </div>

                    <div class="flex flex-col items-end gap-0.5">
                        <p class="text-sm">April 2023 - June 2023</p>
                        <p class="text-sm">({{ $t('internship') }})</p>
                    </div>
                </div>
            </div>
            <p class="text-xs text-neutral-600">- {{ $t('senzu.1') }}</p>
            <p class="text-xs text-neutral-600">- Technologies:</p>
            <ul class="ml-4 list-disc list-inside text-xs text-neutral-600">
                <Techno techno="PHP" />
                <Techno techno="JavaScript" />
                <Techno techno="HTML" />
                <Techno techno="CSS" />
                <Techno techno="Symfony" />
                <Techno techno="MySQL" />
            </ul>
        </div>
    </section>
</template>
