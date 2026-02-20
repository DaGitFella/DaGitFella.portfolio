<template>
  <NuxtLink
    :to="item.link"
    class="flex items-center justify-center text-slate-500 h-full w-full
      hover:text-slate-950 transition-colors duration-500 ease-in-out
      dark:hover:text-slate-50"
    :class="{
      'bg-indigo-500 dark:bg-emerald-500 text-white rounded-xl hover:text-white p-1.25':
        isSelected(item.link),
    }"
  >
    <Icon :name="item.icon" class="text-xl" />
  </NuxtLink>
</template>

<script setup lang="ts">
const route = useRoute();

const isSelected = (link: string) => {
  const current = route.path || '';
  return link === current;
};

export type NavItem = {
  name: string;
  link: string;
  icon: string;
};

defineProps<{
  item: NavItem;
}>();
</script>
