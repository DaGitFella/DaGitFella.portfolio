<template>
  <div class="w-full">
    <NuxtLayout
      name="title"
      title="ls habilidades/"
      description="# Tecnologias e ferramentas que domino para criar soluções completas"
    >
      <ul
        class="flex flex-col justify-center md:grid md:grid-cols-2 gap-8 xl:gap-10 2xl:gap-12.5 w-full pb-10"
      >
        <LazyCardSkill
          v-for="skill in skills"
          :key="skill.icon"
          :name="skill.name"
          :icon="skill.icon"
          :techstack="skill.techstack"
          :v-motion="applyAnimation"
        >
        <template #skill-icon>
          <LazyCardIcon :icon="skill.icon" />
        </template>
      </LazyCardSkill>
      </ul>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from "~/components/Card/Skill.vue";

const applyAnimation = computed(() => {
  const { isMobile } = useDevice();

  if (!isMobile) return {}

  return 'v-motion-slide-visible-once-right'
})

const skills = reactive<Skill[]>([
  {
    name: "frontend.html",
    techstack: [
      "Vue",
      "Nuxt",
      "HTML/CSS",
      "Tailwindcss",
      "JavaScript",
      "TypeScript",
      "Angular",
      "bootstrap",
    ],
    icon: "heroicons:rectangle-group-16-solid",
  },
  {
    name: "backend.py",
    techstack: ["NestJS", "FastAPI", "Flask", "API REST"],
    icon: "heroicons:command-line",
  },
  {
    name: "banco_de_dados.sql",
    techstack: ["MariaDB", "MySQL", "SQLite"],
    icon: "tabler:database",
  },
  {
    name: "metodologias.txt",
    techstack: ["Scrum", "Kanban", "TDD", "DRY"],
    icon: "heroicons:sparkles",
  },
  {
    name: "testes.ts",
    techstack: ["Pytest"],
    icon: "tabler:test-pipe",
  },
  {
    name: "ORM.lib",
    techstack: ["Prisma", "SQLAlchemy"],
    icon: "tabler:database-import",
  },
  {
    name: "controle_de_versao.git",
    techstack: ["Git", "GitHub", "GitLab"],
    icon: "tabler:brand-git",
  },
]);

useHead({
  title: "Habilidades - Davi Bezerra",
  meta: [
    {
      name: "description",
      content:
        "Explore as tecnologias e ferramentas que domino como desenvolvedor fullstack. De frontend a backend, estou equipado para criar soluções completas e inovadoras.",
    },
  ],
});
</script>
