<template>
  <button
    class="flex items-center gap-2 py-2.5 px-5 rounded-xl lg:text-lg 2xl:text-xl transition-colors duration-500 ease-in-out cursor-pointer"
  >
    <NuxtLink
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 w-fit"
    >
      <span v-if="$slots.Icon" class="text-xl 2xl:text-2xl flex items-center">
        <slot name="Icon">Icon</slot>
      </span>
      <slot name="text">text</slot>
    </NuxtLink>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  link?: string | CodeLink;
}>();

const link = computed(() => {
  if (typeof props.link === "string") {
    return props.link;
  } else if (typeof props.link === "object") {
    return props.link.client || props.link.server || "";
  }
  return "";
});
</script>
