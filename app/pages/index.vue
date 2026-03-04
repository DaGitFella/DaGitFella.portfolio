<template>
  <main class="flex items-center h-screen w-full">
    <div
      class="dot-grid h-screen w-screen absolute -z-20 opacity-10 left-0 top-0"
    ></div>
    <div class="grid md:grid-cols-4 lg:grid-cols-5 justify-between w-full">
      <section class="flex flex-col md:col-span-3 gap-10">
        <article
          class="flex flex-col border border-slate-500 rounded-xl overflow-hidden dark:border-slate-800"
        >
          <LazyWindowBar :show-actions="false" title="~/davi-portfolio" />
          <div class="flex flex-col gap-5 py-5 px-7.5">
            <h1 class="text-2xl lg:text-5xl font-body font-bold">Olá, eu sou o Davi</h1>
            <h2
              class="text-indigo-500 font-bold lg:border-2 
              lg:text-4xl  w-full lg:w-fit rounded-xl lg:px-7.5 py-1.5 
              dark:text-emerald-500 font-title"
            >
              > $desenvolverdor_fullstack_
            </h2>
            <p class="lg:text-xl max-w-183">
              Desenvolvedor com 3+ anos de experiência em
              <span class="text-indigo-500 font-medium dark:text-emerald-500"
                >Python</span
              >
              e no 
              ecossistema
              <span class="text-indigo-500 font-medium dark:text-emerald-500"
                >JavaScript</span
              >. Atuo com foco em qualidade de entrega 
              através de
              <span class="text-indigo-500 font-medium dark:text-emerald-500"
                >TDD</span
              >
              e metodologias ágeis como 
              <span class="text-indigo-500 font-medium dark:text-emerald-500"
                >Scrum e Kanban</span
              >.
            </p>
          </div>
        </article>
        <aside class="flex flex-col gap-7.5">
          <div class="flex items-center gap-5">
            <LazyButtonOutlined
              text="Download CV"
              :showIcon="true"
              :IconName="'heroicons:arrow-down-circle'"
              class="w-full lg:w-fit"
            />
            <div class="hidden md:flex gap-2.5">
              <LazyButtonContact />
              <LazyButtonContact IconName="tabler:brand-linkedin" />
              <LazyButtonContact IconName="tabler:mail" />
            </div>
          </div>
          <div class="flex gap-2.5 w-full md:w-fit flex-wrap justify-center">
            <LazyButtonBrand
              text="Angular"
              class="text-red-700 bg-red-50 border-red-200"
            />
            <LazyButtonBrand
              text="Python"
              class="text-sky-700 bg-sky-50 boder-sky-200"
            />
            <LazyButtonBrand
              text="Nuxt"
              class="text-teal-700 bg-teal-50 border-teal-200"
            />
            <LazyButtonBrand
              text="TypeScript"
              class="text-amber-700 bg-amber-50 border-amber-200"
            />
          </div>
        </aside>
      </section>
      <figure class="hidden md:flex items-center col-span-1 justify-end">
        <div class="relative">
          <img src="~/assets/images/binux_1.png" alt="Tux image" class="w-96" />
          <div
            class="h-140 w-140 
            bg-[linear-gradient(to_bottom,#C6D2FF_50%,transparent_100%)] 
            absolute blur-3xl rounded-full -z-1 right-1/2 transform translate-x-1/2 top-1/2 
            -translate-y-1/2 dark:bg-[linear-gradient(to_bottom,#A4F4CF_50%,transparent_100%)]"
          ></div>
        </div>
      </figure>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Sobre",
});
</script>
