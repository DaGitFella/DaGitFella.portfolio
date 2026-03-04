<template>
  <div class="w-full">
    <NuxtLayout name="title" title="ls habilidades/" 
    description="# Tecnologias e ferramentas que domino para criar soluções completas">
      <ul class="grid lg:grid-cols-2 gap-8 xl:gap-10 2xl:gap-12.5 w-full pb-10">
        <LazyCardSkill v-for="skill in skills" :key="skill.name" :skill="skill" />
      </ul>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from '~/components/Card/Skill.vue';

const skills = reactive<Skill[]>([
  {
    name: "Frontend",
    techstack: ["Vue.js", "React", "Angular", "Svelte"],
  },
  {
    name: "Backend",
    techstack: ["Node.js", "Django", "Flask", "Spring Boot"],
  },
  {
    name: "Mobile",
    techstack: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    name: "DevOps",
    techstack: ["Docker", "Kubernetes", "AWS", "Azure"],
  },
  {
    name: "DevOps",
    techstack: ["Docker", "Kubernetes", "AWS", "Azure"],
  },
]);

</script>