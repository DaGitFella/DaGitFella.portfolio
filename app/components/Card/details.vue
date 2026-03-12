<template>
  <div
    @click="close"
    class="w-screen h-screen fixed top-0 lg:px-30 2xl:px-50 flex items-center justify-center z-50 bg-white/10 backdrop-blur-sm cursor-pointer"
  >
    <section
      class="bg-slate-100 dark:bg-slate-900 rounded-lg p-12.5 lg:grid grid-cols-2 gap-10 
      overflow-scroll lg:overflow-hidden"
    >
      <figure class="flex flex-col justify-between h-full">
        <img
          src="~/assets/images/portfolio.png"
          alt="Tux image"
          class="w-162.5 border-3 rounded-xl border-indigo-700 dark:border-emerald-500"
        />
        <div class="flex flex-col gap-2.5">
          <p class="text-lg font-title text-indigo-700 dark:text-emerald-500">
            # Links
          </p>
          <div class="flex gap-3">
            <LazyButtonCard
              @click.stop
              class="border border-indigo-700 dark:border-emerald-500 text-indigo-700 dark:text-emerald-500 hover:bg-indigo-700 hover:text-indigo-50 dark:hover:bg-emerald-500 dark:hover:text-emerald-50"
              text="Cliente"
              IconName="tabler:brand-github"
              :show-icon="true"
              link="projectgithub"
            />
            <LazyButtonCard
              @click.stop
              class="border border-indigo-700 dark:border-emerald-500 text-indigo-700 dark:text-emerald-500 hover:bg-indigo-700 hover:text-indigo-50 dark:hover:bg-emerald-500 dark:hover:text-emerald-50"
              text="Servidor"
              IconName="tabler:brand-github"
              :show-icon="true"
              link="projectgithub"
            />
            <LazyButtonCard
              @click.stop
              class="border border-indigo-700 dark:border-emerald-500 text-indigo-700 dark:text-emerald-500 hover:bg-indigo-700 hover:text-indigo-50 dark:hover:bg-emerald-500 dark:hover:text-emerald-50"
              text="Live Demo"
              IconName="tabler:external-link"
              :show-icon="true"
              link="projectgithub"
            />
          </div>
        </div>
      </figure>
      <article
        class="flex flex-col gap-5 text-indigo-700 dark:text-emerald-500"
      >
        <div class="flex flex-col gap-5">
          <p class="font-title font-bold text-lg">> descrição</p>
          <p class="text-[16px] font-body lg:overflow-scroll lg:max-h-60 2xl:max-h-75">
            <span class="font-bold">$</span> Enfatiza-se que a
            interoperabilidade de hardware causa uma diminuição do throughput da
            gestão de risco. Assim mesmo, a valorização de fatores subjetivos
            oferece uma interessante oportunidade para verificação das novas
            tendencias em TI. Acima de tudo, é fundamental ressaltar que a lei
            de Moore é um ativo de TI dos paradigmas de desenvolvimento de
            software. A certificação de metodologias que nos auxiliam a lidar
            com a preocupação com a TI verde faz parte de um processo de
            gerenciamento de memória avançado dos equipamentos
            pré-especificados. O cuidado em identificar pontos críticos no
            desenvolvimento contínuo de distintas formas de codificação auxilia
            no aumento da segurança e/ou na mitigação dos problemas de todos os
            recursos funcionais envolvidos. diminuição do throughput da gestão
            de risco. Assim mesmo, a valorização de fatores subjetivos oferece
            uma interessante oportunidade para verificação das novas tendencias
            em TI. Acima de tudo, é fundamental ressaltar que a lei de Moore é
            um ativo de TI dos paradigmas de desenvolvimento de software. A
            certificação de metodologias que nos auxiliam a lidar com a
            preocupação com a TI verde faz parte de um processo de gerenciamento
            de memória avançado dos equipamentos pré-especificados. O cuidado em
            identificar pontos críticos no desenvolvimento contínuo de distintas
            formas de codificação auxilia no aumento da segurança e/ou na
            mitigação dos problemas de todos os recursos funcionais envolvidos.
            diminuição do throughput da gestão de risco. Assim mesmo, a
            valorização de fatores subjetivos oferece uma interessante
            oportunidade para verificação das novas tendencias em TI. Acima de
            tudo, é fundamental ressaltar que a lei de Moore é um ativo de TI
            dos paradigmas de desenvolvimento de software. A certificação de
            metodologias que nos auxiliam a lidar com a preocupação com a TI
            verde faz parte de um processo de gerenciamento de memória avançado
            dos equipamentos pré-especificados. O cuidado em identificar pontos
            críticos no desenvolvimento contínuo de distintas formas de
            codificação auxilia no aumento da segurança e/ou na mitigação dos
            problemas de todos os recursos funcionais envolvidos.
          </p>
        </div>
        <div class="flex flex-col gap-5">
          <p class="font-title font-bold text-lg">> stack</p>
          <p>Vue.js, TypeScript, Tailwind CSS</p>
        </div>
        <div class="flex flex-col gap-5">
          <p class="font-title font-bold text-lg">> colaboradores</p>
          <p>John Doe, Jane Smith</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (event: "closeModal"): void;
}>();

function close() {
  emit("closeModal");
}
</script>

<style></style>
