<template>
  <NuxtLink
    :to="link"
    :external=true
    :download="name"
    class="border flex items-center justify-center gap-2 py-2.5 px-7.5 rounded-xl lg:text-xl transition-colors duration-500 ease-in-out cursor-pointer bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-700 hover:text-indigo-50 hover:border-indigo-500 hover:shadow-indigo-layered dark:bg-emerald-500 dark:border-emerald-600 dark:text-emerald-50 dark:hover:bg-emerald-50 dark:hover:text-emerald-700 dark:hover:border-emerald-500 dark:hover:shadow-emerald-layered"
  >
    <span v-if="$slots.icon" class="text-xl lg:text-2xl flex items-center">
      <slot name="icon">icon</slot>
    </span>
    <span>
      <slot name="text">text</slot>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  link: string;
  name: string;
}>();
</script>
