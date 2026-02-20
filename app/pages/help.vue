<template>
  <div>
    <NuxtLayout
      name="title"
      title="tldr serviços"
      description="# Serviços que forneço que podem ajudar você ou sua empresa"
    >
      <ul class="grid lg:grid-cols-3 gap-12.5 w-full h-fit">
        <li v-for="service in services" :key="service.title">
          <CardHelp
            :title="service.title"
            :description="service.description"
            :services="service.services"
            :icon="service.icon"
          />
        </li>
      </ul>
      <div class="w-full flex justify-center py-5 border border-slate-300 rounded-xl">
        <div class="flex gap-10">
          <div class="flex items-center gap-5">
            <Icon name="tabler:brand-github" class="text-6xl"/>
            <div class="flex flex-col items-start">
              <span class="text-4xl text-rose-700 dark:text-rose-400">500+</span>
              <span class="text-[16px]">Commits</span>
            </div>
          </div>
          <div class="bg-slate-400 h-full w-0.5"></div>
          <div class="flex items-center gap-5">
            <Icon name="heroicons:folder-open" class="text-6xl"/>
            <div class="flex flex-col items-start">
              <span class="text-4xl text-green-700 dark:text-green-400">6+</span>
              <span class="text-[16px]">Projetos</span>
            </div>
          </div>
          <div class="bg-slate-400 h-full w-0.5"></div>
          <div class="flex items-center gap-5">
            <Icon name="heroicons:clock" class="text-6xl"/>
            <div class="flex flex-col items-start">
              <span class="text-4xl text-cyan-700 dark:text-cyan-400">3+</span>
              <span class="text-[16px]">Anos exp.</span>
            </div>
          </div>
        </div>
      </div>
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
