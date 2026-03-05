<template>
  <NuxtLink
    :to="item.link"
    class="flex flex-col items-center justify-center text-slate-500 
    h-full w-full hover:text-slate-950 transition-colors duration-500 ease-in-out dark:hover:text-slate-50"
    :class="{
      'text-indigo-500 dark:text-emerald-500':
        isSelected(item.link),
    }"
  >
    <Icon :name="item.icon" class="text-xl" />
    <p class="text-sm font-medium">{{ translateName(item.name) }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { NavItem } from "~/composables/useNavigation";
const route = useRoute();

const isSelected = (link: string) => {
  const current = route.path || "";
  return link === current;
};

const translateName = (name: string) => {
  const translations: Record<string, string> = {
    About: "Sobre",
    Projects: "Projetos",
    Help: "Ajuda",
    Skills: "Habilidades",
    Contact: "Contato",
  };
  return translations[name] || name;
};

defineProps<{
  item: NavItem;
}>();
</script>
