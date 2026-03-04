<template>

    <button class="flex items-center gap-2 py-2.5 px-5 rounded-xl lg:text-xl 
    transition-colors duration-500 ease-in-out cursor-pointer">
        <Icon v-if="showIcon" :name="IconName || 'heroicons:arrow-down-circle'" 
        class="lg:text-2xl"/>
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