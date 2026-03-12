<template>
  <main class="flex flex-col items-center w-full pb-20 lg:pb-0 pt-15 gap-8 2xl:gap-10 h-fit">
    <div class="flex flex-col items-center gap-5">
      <h1
        class="flex items-center font-bold text-indigo-700 
        dark:text-emerald-500 font-title border-2 border-indigo-700 dark:border-emerald-500 
        rounded-lg py-1.5 px-7.5 w-fit lg:text-4xl 2xl:text-6xl text-2xl md:text-3xl"
      >
        <span>></span>
        {{ displayText }}<span class="animate-pulse">|</span>
  
      </h1>
      <p class="lg:w-152 w-90 lg:text-xl 2xl:text-xl text-sm text-center text-slate-400">{{ props.description }}</p>
    </div>
    <slot />
  </main>
</template>

<script setup lang="ts">

const props = defineProps<{
  title?: string;
  description?: string;
}>();

const { displayText } = useTypewriter(props.title || '', 100);
</script>

<style scoped>

</style>
