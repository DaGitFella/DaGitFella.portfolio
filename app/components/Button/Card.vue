<template>

    <button class="flex items-center gap-2 py-2.5 px-5 rounded-xl lg:text-lg 2xl:text-xl 
    transition-colors duration-500 ease-in-out cursor-pointer">
        <a :href="props.link" target="_blank" rel="noopener noreferrer"
        class="flex items-center gap-2 w-fit">
            <Icon v-if="showIcon" :name="IconName || 'heroicons:arrow-down-circle'" 
            class="text-xl 2xl:text-2xl"/>
            <span>{{ text }}</span>
        </a>
    </button>

</template>

<script setup lang="ts">

const props = defineProps<{
    text: string;
    showIcon?: boolean;
    IconName?: string;
    link?: string;
}>()


</script>