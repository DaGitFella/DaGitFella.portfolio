<template>
  <main class="h-full w-full flex items-center justify-between">
    <div class="dot-grid h-screen w-screen absolute -z-20 opacity-10 left-0"></div>
    <section class="w-fit flex flex-col gap-10">
      <article
        class="flex flex-col border border-slate-500 rounded-xl overflow-hidden dark:border-slate-800"
      >
        <WindowBar :show-actions="false" title="~/davi-portfolio" />
        <div class="flex flex-col gap-5 py-5 px-7.5">
          <h1 class="text-5xl font-body font-bold">Olá, eu sou o Davi</h1>
          <h2
            class="text-indigo-500 font-bold border-2 text-4xl w-fit rounded-xl px-7.5 py-1.5 dark:text-emerald-500 font-title"
          >
            > $desenvolverdor_fullstack_
          </h2>
          <p class="text-xl">
            Desenvolvedor com 3+ anos de experiência em
            <span class="text-indigo-500 font-medium dark:text-emerald-500"
              >Python</span
            >
            e no <br />
            ecossistema
            <span class="text-indigo-500 font-medium dark:text-emerald-500"
              >JavaScript</span
            >. Atuo com foco em qualidade de entrega <br />
            através de
            <span class="text-indigo-500 font-medium dark:text-emerald-500"
              >TDD</span
            >
            e metodologias ágeis como <br />
            <span class="text-indigo-500 font-medium dark:text-emerald-500"
              >Scrum e Kanban</span
            >.
          </p>
        </div>
      </article>
      <aside class="flex flex-col gap-7.5">
        <div class="flex items-center gap-5">
          <ButtonOutlined
            text="Download CV"
            :showIcon="true"
            :IconName="'heroicons:arrow-down-circle'"
          />
          <div class="flex gap-2.5">
            <ButtonContact />
            <ButtonContact IconName="tabler:brand-linkedin" />
            <ButtonContact IconName="tabler:mail" />
          </div>
        </div>
        <div class="flex gap-2.5">
          <ButtonBrand
            text="Angular"
            class="text-red-700 bg-red-50 border-red-200"
          />
          <ButtonBrand
            text="Python"
            class="text-sky-700 bg-sky-50 boder-sky-200"
          />
          <ButtonBrand
            text="Nuxt"
            class="text-teal-700 bg-teal-50 border-teal-200"
          />
          <ButtonBrand
            text="TypeScript"
            class="text-amber-700 bg-amber-50 border-amber-200"
          />
        </div>
      </aside>
    </section>
    <figure class="relative">
      <div
        class="h-140 w-140 bg-[linear-gradient(to_bottom,#C6D2FF_50%,transparent_100%)] absolute blur-3xl rounded-full -z-1 right-1/2 transform translate-x-1/2 top-1/2 -translate-y-1/2 dark:bg-[linear-gradient(to_bottom,#A4F4CF_50%,transparent_100%)]"
      ></div>
      <img
        src="~/assets/images/binux_1.png"
        alt="Tux image"
        class="w-96 relative"
      />
    </figure>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Sobre",
});
</script>
