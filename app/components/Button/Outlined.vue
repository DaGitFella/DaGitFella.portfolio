<template>

    <button class="border flex items-center gap-2 py-2.5 px-7.5 rounded-xl text-xl 
    transition-colors duration-500 ease-in-out cursor-pointer
   bg-indigo-50 text-indigo-700 border-indigo-200
            hover:bg-indigo-700 hover:text-indigo-50 hover:border-indigo-500
            hover:shadow-indigo-layered dark:bg-emerald-500 
            dark:border-emerald-600 dark:text-emerald-50 dark:hover:bg-emerald-50
            dark:hover:text-emerald-700 dark:hover:border-emerald-500 
            dark:hover:shadow-emerald-layered">
        <Icon v-if="showIcon" :name="IconName || 'heroicons:arrow-down-circle'" 
        class="text-2xl"/>
        <span>{{ text }}</span>
    </button>

</template>

<script setup lang="ts">

const props = defineProps<{
    text: string;
    showIcon?: boolean;
    IconName?: string;
}>()


</script>