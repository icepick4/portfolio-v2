<script setup lang="ts"></script>

<template>
    <section class="flex flex-col gap-y-3">
        <h2 class="text-xl font-bold">Education</h2>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div
                    class="flex flex-row gap-1 items-center justify-between w-full"
                >
                    <div class="flex flex-col items-start">
                        <a
                            class="text-lg font-bold hover:underline"
                            href="https://www.cpe.fr/"
                            >CPE Lyon</a
                        >
                        <p>{{ $t('cpe') }}</p>
                    </div>

                    <div class="flex flex-col items-end gap-0.5">
                        <p class="text-sm">2024 - 2027</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div class="flex flex-row items-center justify-between w-full">
                    <div class="flex flex-col items-start">
                        <a
                            class="text-lg font-bold hover:underline"
                            href="https://www.univ-lyon1.fr/"
                            >Université Lyon 1</a
                        >
                        <p>{{ $t('but') }}</p>
                    </div>
                    <p class="text-sm">2021 - 2024</p>
                </div>
            </div>
        </div>
    </section>
</template>
