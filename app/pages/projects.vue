<template>
  <div>
    <NuxtLayout name="title" title="ls projetos/">
      <TransitionGroup
        name="project-list"
        tag="ul"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-11 w-full h-fit overflow-hidden lg:overflow-visible"
        :class="{'lg:pb-20': projects.length <= 6}"
      >
        <li v-for="project in displayedProjects" :key="project.title" class="w-full">
          <LazyCardProject
            @open-modal="open"
            :project="project"
            :preset="applyAnimation"
          />
        </li>
      </TransitionGroup>

      <div v-if="projects.length > 6" class="w-full flex justify-center lg:pb-10">
        <ButtonDefault
          type="button"
          @click="toggleProjects"
          class="w-full max-w-full"
        >
          <template #text>{{ isExpanded ? "Mostrar menos projetos" : "Mostrar todos os projetos" }}</template>
        </ButtonDefault>
      </div>

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
const isExpanded = ref(false);

const displayedProjects = computed(() =>
  isExpanded.value ? projects : projects.slice(0, 6)
);

const toggleProjects = () => {
  isExpanded.value = !isExpanded.value;
};

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

<style scoped>
.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

.project-list-enter-to,
.project-list-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.project-list-enter-active,
.project-list-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

button {
  min-width: 0;
}

</style>
