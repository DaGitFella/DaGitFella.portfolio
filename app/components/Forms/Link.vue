<template>
  <div
    class="border-none bg-white outline-indigo-400 outline rounded-xl flex gap-2.5 text-sm lg:text-xl
    dark:outline-emerald-400 dark:bg-slate-900 hover:outline-2 hover:outline-indigo-500 
    items-center dark:hover:outline-emerald-500 transition-colors 500 ease-in-out px-7.5 py-4
    font-medium shadow-base dark:shadow-base-dark cursor-pointer hover:shadow-indigo-layered 
    dark:hover:shadow-emerald-layered"
  >
  <a :href="to">> wget <span class="text-indigo-500 dark:text-emerald-500 font-bold">{{ to }}</span></a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>
