<template>
  <NuxtLink
    :to="item.link"
    class="flex flex-col items-center justify-center text-slate-500 
    h-full w-full transition-colors duration-500 ease-in-out "
    :class="{
      'text-indigo-900 dark:text-emerald-900':
        isSelected(item.link),
    }"
  >
    <Icon :name="item.icon" class="text-xl" />
    <p class="text-[12px] font-body font-regular">{{ translateName(item.name) }}</p>
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
