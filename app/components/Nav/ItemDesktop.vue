<template>
  <NuxtLink
    :to="item.link"
    class="flex items-center justify-center text-slate-500 h-full w-full hover:text-slate-950
    transition-colors duration-500 ease-in-out dark:hover:text-slate-50 p-1.25"
    :class="{
      'bg-indigo-500 dark:bg-emerald-500 text-white rounded-xl hover:text-white':
        isSelected(item.link),
    }"
  >
    <Icon :name="item.icon" class="text-xl" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { NavItem } from "~/composables/useNavigation";


const route = useRoute();

const isSelected = (link: string) => {
  const current = route.path || "";
  return link === current;
};

defineProps<{
  item: NavItem;
}>();
</script>
