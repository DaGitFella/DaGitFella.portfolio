<template>
  <div>
    <NuxtLayout name="title" title="ls projetos/">
      <ul class="grid lg:grid-cols-3 gap-11 w-full h-fit pb-20">
        <li v-for="project in projects" :key="project.title">
          <LazyCardProject :project="project" />
        </li>
      </ul>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/components/Card/Project.vue";

definePageMeta({
  title: "Projetos",
});

const projects = reactive<Project[]>([
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "teste.png",
    techStack: ["Vue.js", "TypeScript", "Tailwindcss", "Tailwindcss", "Tailwindcss"],
    github: "",
    showLiveDemo: true,
  },
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "teste.png",
    techStack: ["Vue.js", "TypeScript", "Tailwindcss", "Tailwindcss", "Tailwindcss"],
    github: "",
    showLiveDemo: true,
  },
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "teste.png",
    techStack: ["Vue.js", "TypeScript", "Tailwindcss", "Tailwindcss", "Tailwindcss"],
    github: "",
    showLiveDemo: true,
  },
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "teste.png",
    techStack: ["Vue.js", "TypeScript", "Tailwindcss", "Tailwindcss", "Tailwindcss"],
    github: "",
    showLiveDemo: true,
  },
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "teste.png",
    techStack: ["Vue.js", "TypeScript", "Tailwindcss", "Tailwindcss", "Tailwindcss"],
    github: "",
    showLiveDemo: true,
  },
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "teste.png",
    techStack: ["Vue.js", "TypeScript", "Tailwindcss", "Tailwindcss", "Tailwindcss"],
    github: "",
    showLiveDemo: true,
  },
]);
</script>
