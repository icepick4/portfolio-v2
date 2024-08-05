<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
    <div class="border-t border-stone-200 mt-8 py-4 text-center text-xs">
        <div class="flex flex-row items-center justify-center gap-1.5">
            <p>
                {{ $t('madeBy') }}
                <a
                    href="https://github.com/icepick4"
                    class="hover:underline font-bold"
                    >Rémi Jara</a
                >
                {{ $t('with') }}
                <a href="https://nuxt.com/" class="hover:underline font-bold"
                    >Nuxt.js</a
                >
            </p>
            <img
                v-if="colorMode.value == 'light'"
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Black%20Heart.png"
                alt="Black Heart"
                width="23"
                height="23"
            />
            <img
                v-else
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png"
                alt="Blue Heart"
                width="25"
                height="25"
            />
        </div>
    </div>
</template>
