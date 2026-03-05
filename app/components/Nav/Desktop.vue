<template>
  <nav class="flex flex-col fixed top-1/2 -translate-y-1/2 left-0 gap-10 z-30">
    <ul
      class="flex flex-col items-center justify-center gap-12.5 px-2.5 py-7.5 bg-slate-100 border-slate-200 border rounded-br-xl rounded-tr-xl w-fit h-fit shadow-base dark:bg-slate-900 dark:border-slate-800 dark:shadow-white-glow"
    >
      <li v-for="item in sidebarItems" :key="item.name" class="w-fit">
        <LazyNavItemDesktop :item="item" />
      </li>
    </ul>
    <div class="flex flex-col gap-5">
      <LazyNavChangeTheme />
      <LazyNavTranslate />
    </div>
  </nav>
</template>

<script setup lang="ts">
const { sidebarItems } = useNavigation();
</script>
