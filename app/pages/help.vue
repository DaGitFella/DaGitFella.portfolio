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
            :title="service.title"
            :description="service.description"
            :services="service.services"
            :icon="service.icon"
          />
        </li>
      </ul>
      <LazyStatsCaroussel />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
interface Service {
  title: string;
  description: string;
  services: string[];
  icon?: string;
}

const services = reactive<Service[]>([
  {
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações web responsivas e modernas.",
    services: [
      "Desenvolvimento Frontend",
      "Desenvolvimento Backend",
      "Integração de APIs",
      "Otimização de Performance",
    ],
    icon: "tabler:webhook",
  },
  {
    title: "Desenvolvimento Mobile",
    description: "Criação de aplicativos móveis para Android e iOS.",
    services: [
      "Desenvolvimento Nativo",
      "Desenvolvimento Cross-Platform",
      "Design de UI/UX para Mobile",
      "Publicação em Lojas de Apps",
    ],
    icon: "tabler:device-mobile",
  },
  {
    title: "Consultoria em Tecnologia",
    description: "Orientação estratégica para projetos de tecnologia.",
    services: [
      "Avaliação de Tecnologias",
      "Planejamento de Projetos",
      "Revisão de Código",
      "Mentoria Técnica",
    ],
    icon: "tabler:bulb",
  },
]);
</script>
