<template>
  <div>
    <NuxtLayout name="title" title="cat projetos.txt">
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-11 w-full h-fit">
        <li v-for="project in projects" :key="project.title">
          <LazyCardProject :project="project" />
        </li>
      </ul>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  title: "Projetos",
});

const { projects } = useProject();

useHead({
  title: 'Projetos - Davi Bezerra',
  meta: [
    {
      name: 'description',
      content: 'Explore meus projetos mais recentes e inovadores. Cada um reflete minha paixão por desenvolvimento e minha dedicação em criar soluções impactantes.',
    },
  ],
});

</script>
