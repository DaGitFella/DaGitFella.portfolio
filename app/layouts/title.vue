<template>
  <main class="flex flex-col items-center w-full pt-15 gap-8 2xl:gap-12.5 h-fit">
    <div class="flex flex-col items-center gap-5">
      <h1
        class="flex items-center font-bold text-indigo-700 
        dark:text-emerald-500 font-title border-2 border-indigo-700 dark:border-emerald-500 
        rounded-lg py-1.5 px-7.5 w-fit lg:text-4xl 2xl:text-6xl text-2xl"
      >
        <span>></span>
        {{ props.title }}
        <span class="ml-2 w-2 h-10 bg-current animate-cursor-blink"></span>
      </h1>
      <p class="lg:w-152 w-90 lg:text-xl 2xl:text-2xl text-sm text-center text-slate-400">{{ props.description }}</p>
    </div>
    <slot />
  </main>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<style scoped>

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-cursor-blink {
  animation: blink 1s step-end infinite;
}
</style>
