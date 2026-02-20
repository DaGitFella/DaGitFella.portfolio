<template>
  <div
    class="border-none bg-white outline-indigo-400 outline rounded-xl flex gap-2.5 text-xl
    dark:outline-emerald-400 dark:bg-slate-900 hover:outline-2 hover:outline-indigo-500 
    items-center dark:hover:outline-emerald-500 transition-colors 500 ease-in-out px-7.5 py-4
    font-medium"
  >
  <Icon name="heroicons:arrow-long-right-solid" class="text-sm"></Icon>
  <a :href="to">{{ to }}</a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>
