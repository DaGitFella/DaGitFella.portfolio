<template>
  <div class="min-h-screen px-5 xl:px-25 2xl:px-50">
    <NuxtLayout name="sidebar">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

</style>
