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
                <a href="https://vitejs.dev/" class="hover:underline font-bold"
                    >Nuxt.js</a
                >
            </p>
            <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Black%20Heart.png"
                alt="Black Heart"
                width="23"
                height="23"
            />
        </div>
    </div>
</template>
