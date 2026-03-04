<template>
  <div
    class="w-full my-8 lg:my-0 flex justify-center py-5 border border-slate-300 rounded-xl"
  >
    <LazyClientOnly>
      <Carousel :autoplay="1" :wrap-around="true" :transition="5000" 
      :pause-autoplay-on-hover="true" transitionEasing="ease-in-out" class="w-full">
      <slide v-for="skill in skills" :key="skill.skill">
        <LazyStatsItem :value="skill.value" :skill="skill.skill" :icon="skill.icon" />
      </slide>
      </Carousel>
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
  }
]);

</script>

