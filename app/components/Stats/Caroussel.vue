<template>
  <div
    class="w-full overflow-x-hidden h-fit my-8 lg:my-0 py-5 border border-slate-300 rounded-xl"
  >
    <LazyClientOnly>
      <Carousel
        :autoplay="3000"
        :wrap-around="true"
        :transition="5000"
        snap-align="center"
        dir="left-to-right"
        :pause-autoplay-on-hover="true"
        transitionEasing="ease-in-out"
        class="max-w-80 lg:max-w-full w-full"
      >
        <slide v-for="skill in skills" :key="skill.skill">
          <LazyStatsItem
            :value="skill.value"
            :skill="skill.skill"
            :icon="skill.icon"
          />
        </slide>
      </Carousel>

      <template #placeholder>
        <div class="w-full flex items-center justify-center">
          Loading Skills...
        </div>
      </template>
    </LazyClientOnly>
  </div>
</template>

<script lang="ts" setup>
const skills = reactive([
  {
    value: "500+",
    skill: "Commits",
    icon: "tabler:brand-github",
  },
  {
    value: "6+",
    skill: "Projetos",
    icon: "heroicons:folder-open",
  },
  {
    value: "3+",
    skill: "Anos exp.",
    icon: "heroicons:clock",
  },
]);
</script>

<style scoped></style>
