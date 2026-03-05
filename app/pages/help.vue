<template>
  <div>
    <NuxtLayout
      name="title"
      title="tldr serviços"
      description="# Serviços que forneço que podem ajudar você ou sua empresa"
    >
      <ul class="grid lg:grid-cols-3 gap-8 lg:gap-12.5 w-full h-fit">
        <li v-for="service in services" :key="service.title">
          <LazyCardHelp
            :help="service"
          />
        </li>
      </ul>
      <LazyStatsCaroussel />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

const { services }  = useHelp();

useHead({
  title: 'Serviços - Davi Bezerra',
  meta: [
    {
      name: 'description',
      content: 'Descubra os serviços que ofereço como desenvolvedor fullstack. Estou aqui para ajudar a transformar suas ideias em realidade.',
    },
  ],
});

</script>
