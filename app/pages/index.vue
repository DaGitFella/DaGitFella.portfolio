<template>
  <main class="flex items-center h-screen w-full">
    <div
      class="dot-grid h-screen w-screen absolute -z-20 opacity-10 left-0 top-0"
    ></div>
    <div class="grid lg:grid-cols-12 justify-between w-full">
      <section class="flex flex-col md:col-span-4 lg:col-span-8 2xl:col-span-7 gap-10">
        <article
          class="flex flex-col border border-slate-500 rounded-xl overflow-hidden dark:border-slate-800"
        >
          <LazyWindowBar :show-actions="false" title="~/davi-portfolio" />
          <div class="flex flex-col gap-5 py-5 px-7.5">
            <h1 class="text-2xl md:text-3xl xl:text-3xl 2xl:text-5xl font-body font-bold">Olá, eu sou o Davi</h1>
            <h2
              class="text-indigo-500 font-bold md:border-2 
              xl:text-2xl 2xl:text-4xl w-full lg:w-fit rounded-xl md:px-7.5 py-1.5 
              dark:text-emerald-500 font-title md:text-2xl"
            >
              {{ displayText }}<span class="animate-pulse">|</span>
            </h2>
            <p class="md:text-base lg:text-xl max-w-prose">
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
          <div class="flex flex-col lg:flex-row items-center gap-5">
            <LazyButtonOutlined
              text="Download CV"
              :showIcon="true"
              to="/downloads/curriculo.pdf"
              name="curriculo_davi.pdf"
              :IconName="'heroicons:arrow-down-circle'"
              class="w-full lg:w-fit"
            />
            <div class="flex gap-2.5">
              <LazyButtonContact 
                link="https://github.com/DaGitFella"
              />
              <LazyButtonContact IconName="tabler:brand-linkedin" link="https://www.linkedin.com/in/davi-lucas-510686283/" />
              <LazyButtonContact IconName="tabler:mail" link="mailto:davibezerra123457@gmail.com" />
            </div>
          </div>
          <div class="hidden lg:flex gap-2.5 w-full md:w-fit flex-wrap justify-center">
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
      <figure class="hidden md:hidden lg:flex items-center xl:col-span-4 2xl:col-span-5 col-span-1 justify-end">
        <div class="relative">
          <img v-motion-slide-visible-bottom
           src="~/assets/images/binux_1.png" alt="Tux image" class="xl:w-70 2xl:w-96 " />
          <div
            class="xl:h-70 xl:w-70 2xl:h-120 2xl:w-120 
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

const { displayText, isCompleted } = useTypewriter('> $desenvolverdor_fullstack_', 80);

useHead({
  title: 'Davi - Desenvolvedor Fullstack',
  meta: [
    {
      name: 'description',
      content:
        'Portfólio de Davi, desenvolvedor fullstack com experiência em Python e JavaScript. Confira meus projetos e habilidades.',
    },
    {
      name: 'keywords',
      content:
        'Davi, portfólio, desenvolvedor fullstack, Python, JavaScript, projetos, habilidades',
    },
  ],
});

</script>
