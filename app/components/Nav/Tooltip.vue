<template>
  <div class="group relative inline-block w-full">
    <!-- Trigger slot -->
    <slot />

    <!-- Tooltip -->
    <div
      class="absolute z-50 hidden w-fit group-hover:block px-3 py-2 bg-slate-950 text-white text-sm rounded-lg 
      whitespace-nowrap shadow-lg transition-opacity duration-200 dark:bg-slate-800 pointer-events-none"
      :class="positionClasses"
    >
      {{ text }}
      <!-- Arrow -->
      <div
        class="absolute w-2 h-2 bg-slate-950 dark:bg-slate-800 transform rotate-45"
        :class="arrowClasses"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  text: string;
}>()

const positionClasses = computed(() => {
  return "left-10 top-1/2 -translate-y-1/2";
});

const arrowClasses = computed(() => {
  return "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2";
});
</script>

<style scoped>
.group:hover > div:last-child {
  animation: fadeInTooltip 200ms ease-in-out;
}

@keyframes fadeInTooltip {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
