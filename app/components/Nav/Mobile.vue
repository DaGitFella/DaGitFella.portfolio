<template>
  <nav class="flex fixed bottom-0 w-full gap-10 z-30">
    <ul
      class="flex w-full items-center justify-center gap-12.5 px-2.5 py-7.5 bg-slate-100 border-slate-200 border rounded-br-xl rounded-tr-xl shadow-base dark:bg-slate-900 dark:border-slate-800 dark:shadow-white-glow"
    >
      <li v-for="item in sidebarItems" :key="item.name" class="w-fit">
        <LazyNavItem :item="item" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const { sidebarItems } = useNavigation();
</script>

<style></style>
