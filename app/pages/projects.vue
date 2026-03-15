<template>
  <div>
    <NuxtLayout name="title" title="ls projetos/">
      <ul
        class="grid md:grid-cols-2 lg:grid-cols-3 lg:pb-20 gap-8 2xl:gap-11 w-full h-fit"
      >
        <li v-for="project in projects" :key="project.title">
          <LazyCardProject @open-modal="open" :project="project" />
        </li>
      </ul>
      <Transition :css="false">
        <LazyCardDetails
          :project="project"
          :is-visible="isOpened"
          v-motion-slide-visible-bottom
          :exit="{ opacity: 0 }"
          @close-modal="close"
        />
      </Transition>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Projetos",
});

const { projects } = useProject();

const { open, close, isOpened, project } = useModal();

useHead({
  title: "Projetos - Davi Bezerra",
  meta: [
    {
      name: "description",
      content:
        "Explore meus projetos mais recentes e inovadores. Cada um reflete minha paixão por desenvolvimento e minha dedicação em criar soluções impactantes.",
    },
  ],
});
</script>
