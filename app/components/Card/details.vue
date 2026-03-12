<template>
  <div
    @click="close"
    class="w-screen h-screen fixed top-0 flex items-center justify-center z-50 bg-white/10 backdrop-blur-sm"
  >
    <section
      class="bg-slate-100 dark:bg-slate-900 rounded-lg p-10 grid grid-cols-2"
    >
      <figure class="flex flex-col">
        <img
          src="~/assets/images/binux_1.png"
          alt="Tux image"
          class="w-162.5 border-3 border-indigo-700 dark:border-emerald-500"
        />
        <div class="flex flex-col">
          <p># Links</p>
          <div class="flex gap-3">
            <LazyButtonContact link="https://github.com/binux" label="GitHub" />
            <LazyButtonContact
              link="https://twitter.com/binux"
              label="Twitter"
            />
          </div>
        </div>
      </figure>
      <article class="flex flex-col gap-4">
        <div>
          <p>> descrição</p>
          <p>
            $ Enfatiza-se que a interoperabilidade de hardware causa uma
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
        <div>
          <p>> stack</p>
          <p>Vue.js, TypeScript, Tailwind CSS</p>
        </div>
        <div>
          <p>> colaboradores</p>
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
