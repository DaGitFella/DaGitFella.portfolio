<template>
  <li
    class="group flex flex-col outline-1 gap-2 px-10 py-7.5 rounded-xl bg-slate-100 outline-slate-200 dark:bg-slate-800 dark:outline-slate-700 shadow-base dark:shadow-base-dark hover:shadow-indigo-elevated transitio transition-shadow duration-500 ease-in-out hover:outline-[3px] lg:hover:outline-indigo-500 w-full lg:dark:hover:outline-emerald-500 cursor-pointer dark:hover:shadow-emerald-layered"
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-4">
        <slot name="skill-icon">{{ skill.icon }}</slot>
        <h2 class="text-lg lg:text-2xl font-medium font-title">
          <slot name="skill-name">{{ skill.name }}</slot>
        </h2>
      </div>
    </div>
    <div class="flex flex-wrap gap-5 mt-5">
      <LazyCardTechBadge
        v-for="tech in skill.techstack"
        :tech="tech"
        type="skill"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
export interface Skill {
  name: string;
  icon: string;
  techstack: string[];
}

const skill = defineProps<{
  name: string,
  techstack: string[],
  icon: string,
}>()
</script>
