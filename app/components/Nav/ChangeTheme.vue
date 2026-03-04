<template>
  <ClientOnly>
    <button
      @click="toggleDark()"
      class="flex items-center justify-center text-slate-500 h-12.5 w-12.5 bg-white border-slate-200 cursor-pointer hover:bg-slate-200 transition-colors duration-500 ease-in-out p-2.5 rounded-br-xl rounded-tr-xl shadow-base dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:shadow-white-glow"
    >
      <Icon :name="icon" class="text-2xl" />
      
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const toggleDark = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const icon = computed(() => {
  return colorMode.preference === "dark" ? "heroicons:moon" : "heroicons:sun";
});

</script>
