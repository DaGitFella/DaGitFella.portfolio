<template>
  <div
    class="group flex flex-col font-body gap-7.5 rounded-xl lg:h-128 2xl:h-140
    transition-colors duration-300 ease-in-out
    px-12.5 py-10 bg-slate-100 outline-slate-200 outline
    shadow-base dark:bg-slate-900 dark:outline-slate-800 text-slate-950
    dark:text-slate-50 cursor-pointer dark:shadow-white-glow hover:shadow-indigo-layered
    hover:outline-[3px] hover:outline-indigo-500 dark:hover:outline-emerald-500
    dark:hover:shadow-emerald-layered"
  >
    <div class="flex flex-col gap-6 2xl:gap-6 lg:gap-4">
      <div class="flex flex-col gap-6 2xl:gap-6 lg:gap-3">
        <LazyCardIcon
          :IconName="help.icon || 'tabler:help'"
          class="w-12 h-12 text-indigo-700 dark:text-emerald-500"
        />
        <h2 class="text-xl md:text-2xl 2xl:text-4xl font-bold">
          {{ help.title }}
        </h2>
        <p class="text-slate-500 text-xl lg:text-base 2xl:text-xl font-title">{{ help.description }}</p>
      </div>
      <div class="w-full h-0.5 bg-slate-400"></div>
    </div>
    <div class="flex flex-col gap-5">
      <span class="font-medium">Inclui:</span>
      <ul
        role="list"
        class="list-disc list-inside marker:text-indigo-500 dark:marker:text-emerald-500
        text-slate-400 font-title flex flex-col 2xl:text-base
        2xl:gap-4 lg:text-sm lg:gap-3" 
      >
        <li v-for="service in help.services" :key="service">
          {{ service }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Help } from "~/composables/useService";

defineProps<{
  help: Help
}>();

</script>
