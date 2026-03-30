<template>
  <button
    @mouseover="showIcon = true"
    @mouseleave="showIcon = false"
    class="border flex items-center justify-center gap-2 py-2.5 px-7.5 rounded-xl lg:text-xl transition-all duration-500 ease-in-out cursor-pointer bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-700 hover:text-indigo-50 hover:border-indigo-500 hover:shadow-indigo-layered dark:bg-emerald-500 dark:border-emerald-600 dark:text-emerald-50 dark:hover:bg-emerald-50 dark:hover:text-emerald-700 dark:hover:border-emerald-500 dark:hover:shadow-emerald-layered"
  >
    <Transition>
      <span
        v-if="$slots.icon && showIcon"
        v-motion="applyAnimation"
        class="text-xl lg:text-2xl flex items-center"
      >
        <slot name="icon">icon</slot>
      </span>
    </Transition>
    <slot name="text">text</slot>
  </button>
</template>

<script setup lang="ts">
const { isMobileOrTablet } = useDevice();

const animationVariant = {
  initial: { opacity: 0, x: -50 },
  enter: { opacity: 1, x: 0, scale: 1  },
  delay: 200,
  duration: 300
}

const showIcon = ref(false);

const handleIconVisibility = computed(() => {
  if (isMobileOrTablet) return showIcon.value = true;

  return showIcon.value;
});

const applyAnimation = computed(() => {

  if (isMobileOrTablet) return;

  return animationVariant;
})

</script>
