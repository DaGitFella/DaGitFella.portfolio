<template>
  <div @click="open"
    class="group outline flex flex-col gap-7.5 rounded-xl overflow-hidden transition-colors
    duration-300 ease-in-out bg-slate-100 outline-slate-200 
    shadow-base dark:bg-slate-900 dark:outline-slate-800 text-slate-950 
    dark:text-slate-50 cursor-pointer dark:shadow-base-dark hover:shadow-indigo-layered 
    hover:outline-[3px] lg:hover:outline-indigo-500 lg:dark:hover:outline-emerald-500
    dark:hover:shadow-emerald-layered"
  >
    <div class="card-top">
      <LazyWindowBar :title="project.title" class="bg-transparent text-slate-400" />
      <div class="overflow-hidden">
        <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-50 2xl:h-60 object-cover transition-transform duration-300 ease-in-out
        group-hover:scale-125 object-top"
      />
      </div>
    </div>
    <div class="px-9 pb-10 h-115 lg:h-100 flex flex-col justify-between">
      <div class="card-content flex flex-col gap-5">
        <div class="card-text flex flex-col gap-5">
          <div class="card-title font-semibold font-poppins gap-2.5 text-xl lg:text-[28px] flex">
            <span class="text-indigo-700 dark:text-emerald-500">$</span>
            <h2 class="font-[poppins]">{{ project.title }}</h2>
          </div>
          <p class="text-slate-400 text-sm text-[16px] 2xl:text-lg">{{ project.resume }}</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3  gap-2.5 h-fit w-full">
          <LazyCardTechBadge v-for="tech in project.techStack" :tech="tech" type="project" />
        </div>
      </div>
      <div 
      
      class="card-bottom flex gap-3.5">
        <LazyButtonCard
          @click.stop
          text="Código"
          IconName="tabler:brand-github"
          :show-icon="true"
          :link="project.code"
          class="bg-indigo-950 text-indigo-50 hover:bg-indigo-900
          dark:bg-emerald-950 dark:text-emerald-50 dark:hover:bg-emerald-900"
        />
        <LazyButtonCard
          @click.stop
          text="Live"
          :show-icon="true"
          :link="project.liveDemo"
          IconName="tabler:external-link"
          class="bg-indigo-500 text-indigo-50 hover:bg-indigo-400
          dark:bg-emerald-500 dark:text-emerald-50 dark:hover:bg-emerald-300"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/composables/useProject";

const props = defineProps<{
  project: Project;
}>();

const emit = defineEmits<{
  (event: 'openModal', project: Project): Project;
}>();

function open() {
  emit('openModal', props.project);
}

</script>
