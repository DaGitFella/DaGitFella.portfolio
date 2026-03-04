<template>

    <span class="px-4 flex justify-center py-2.5 transition-colors duration-300 
    rounded-lg border text-sm lg:text-[12px] 2xl:text-[16px] ease-in-out h-fit font-body"
    :class="badgeClass">
        {{ props.tech }}
    </span>

</template>

<script setup lang="ts">

const props = defineProps<{
  tech?: string;
  type?: string;
}>()

const isProject = computed(() => props.type === 'project')
const isExperience = computed(() => props.type === 'skill')

const badgeClass = computed(() => {
    if (isProject.value) {
        return 'text-indigo-700 bg-indigo-100 border-indigo-200 \
        dark:bg-emerald-100 dark:text-emerald-700 dark:border-emerald-200';
    } else if (isExperience.value) {
        return 'text-slate-700 bg-slate-100 border-slate-200 font-medium cursor-pointer \
        dark:bg-slate-800 dark:text-slate-50 dark:border-slate-700 \
        hover:bg-indigo-700 hover:border-indigo-800 hover:text-indigo-50 \
        dark:hover:bg-emerald-700 dark:hover:border-emerald-800 dark:hover:text-emerald-50';
    }
    return '';
})

</script>
