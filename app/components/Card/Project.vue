<template>
  <div
    class="group outline flex flex-col gap-7.5 rounded-xl overflow-hidden transition-colors
    duration-300 ease-in-out bg-slate-100 outline-slate-200 
    shadow-base dark:bg-slate-900 dark:outline-slate-800 text-slate-950 
    dark:text-slate-50 cursor-pointer dark:shadow-base-dark hover:shadow-indigo-layered 
    hover:outline-[3px] hover:outline-indigo-500 dark:hover:outline-emerald-500
    dark:hover:shadow-emerald-layered"
  >
    <div class="card-top">
      <LazyWindowBar :title="project.title" class="bg-transparent text-slate-400" />
      <div class="overflow-hidden">
        <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-60 object-cover transition-transform duration-300 ease-in-out
        group-hover:scale-125"
      />
      </div>
    </div>
    <div class="px-9 pb-10 h-full flex flex-col gap-7.5">
      <div class="card-content flex flex-col gap-5">
        <div class="card-text flex flex-col gap-5">
          <div class="card-title font-semibold font-poppins gap-2.5 text-xl lg:text-[28px] flex">
            <span class="text-indigo-700 dark:text-emerald-500">$</span>
            <h2 class="font-[poppins]">{{ project.title }}</h2>
          </div>
          <p class="text-slate-400 text-sm lg:text-xl">{{ project.description }}</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3  gap-2.5 h-fit w-full">
          <LazyCardTechBadge v-for="tech in project.techStack" :tech="tech" type="project" />
        </div>
      </div>
      <div class="card-bottom grid grid-cols-2 lg:flex gap-3.5">
        <LazyButtonCard
          text="GitHub"
          IconName="tabler:brand-github"
          :show-icon="true"
          class="bg-indigo-950 text-indigo-50 hover:bg-indigo-900
          dark:bg-emerald-950 dark:text-emerald-50 dark:hover:bg-emerald-900"
        />
        <LazyButtonCard
          v-if="project.showLiveDemo"
          text="Live"
          :show-icon="true"
          IconName="tabler:external-link"
          class="bg-indigo-500 text-indigo-50 hover:bg-indigo-400
          dark:bg-emerald-500 dark:text-emerald-50 dark:hover:bg-emerald-300"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  showLiveDemo?: boolean;
  liveDemo?: string;
}

const props = defineProps<{
  project: Project;
}>();
</script>
