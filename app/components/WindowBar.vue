<template>
  <header class="flex py-2.5 px-4 w-full items-center gap-5 bg-slate-500 text-slate-50 ">
    <div v-if="showActions" class="flex gap-1">
        <div class="rounded-full w-3 h-3 bg-red-600"></div>
        <div class="rounded-full w-3 h-3 bg-yellow-600"></div>
        <div class="rounded-full w-3 h-3 bg-green-600"></div>
    </div>
    <div class="flex items-center text-sm lg:text-[16px] gap-2.5">
        <Icon name="tabler:terminal" />
        <p>
          <slot></slot>
        </p>
    </div>
  </header>
</template>

<script setup lang="ts">

const props = defineProps({
  showActions: {
    type: Boolean,
    required: false,
    default: true,
  },
});

</script>
