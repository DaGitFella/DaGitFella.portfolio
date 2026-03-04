<template>
  <div class="flex items-center gap-5">
    <Icon :name="icon" class="text-4xl lg:text-6xl" />
    <div class="flex flex-col items-start">
      <span class="text-2xl 2xl:text-4xl text-cyan-700 dark:text-cyan-400"
        >{{ value }}</span
      >
      <span class="text-sm lg:text-[16px]">{{ skill }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  value: string;
  skill: string;
  icon: string;
}>();

</script>

<style></style>
