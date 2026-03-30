<template>
  <div>
    <NuxtLayout name="title" title="ls projetos/">
      <ul
        class="grid md:grid-cols-2 lg:grid-cols-3 lg:pb-20 gap-8 2xl:gap-11 w-full h-fit overflow-hidden lg:overflow-visible"
      >
        <LazyCardProject
          v-for="project in projects"
          :key="project.title"
          @open-modal="open"
          :project="project"
          is="li"
          :preset="applyAnimation"
        />
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

const { applyAnimation } = UseAnimation();

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
