<script setup lang="ts"></script>

<template>
    <div
        class="container relative mx-auto scroll-my-12 overflow-auto px-4 pt-6 md:p-x-16 md:pt-16"
    >
        <section class="mx-auto w-full max-w-[45rem] space-y-8">
            <Header id="me" />
            <About id="about" />
            <Projects id="projects" />
            <Work id="experience" />
            <Skills id="technologies" />
            <Certifications id="certifications" />
            <Education id="education" />
            <ClientOnly>
                <Hobbies id="hobbies" />
            </ClientOnly>
            <Footer />
        </section>
    </div>
</template>
