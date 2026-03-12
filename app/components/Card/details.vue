<template>
  <div
    @click="close"
    class="w-screen h-screen fixed top-0 flex items-center justify-center z-50 bg-white/10 backdrop-blur-sm"
  >
    <div
      class="bg-black text-white h-100 w-100 rounded-lg flex items-center justify-center text-2xl font-bold backdrop:blur-3xl"
    >
      <p>details</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (event: "closeModal"): void;
}>();

function close() {
  emit("closeModal");
}
</script>

<style></style>
