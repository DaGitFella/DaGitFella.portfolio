<template>

    <span class="border flex items-center gap-2 py-2.5 px-4 rounded-lg text-sm w-fit h-fit
    transition-colors duration-500 ease-in-out">
        {{ text }}
    </span>

</template>

<script setup lang="ts">

defineProps<{
    text?: string;
}>()


</script>