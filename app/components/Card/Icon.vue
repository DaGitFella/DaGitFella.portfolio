<template>
  <div
    class="py-2.5 px-2.5 bg-indigo-50 outline-indigo-100 outline w-fit h-fit rounded-lg flex items-center justify-center dark:bg-emerald-50 dark:outline-emerald-100 group-hover:bg-indigo-500 group-hover:text-indigo-50 group-hover:outline-0 dark:group-hover:bg-emerald-500 text-indigo-500 dark:text-emerald-500 text-2xl transition-colors duration-300 ease-in-out"
  >
    <Icon :name="icon || 'tabler:code'" />
  </div>
</template>

<script setup lang="ts">

defineProps<{
  icon?: string;
}>();

</script>
