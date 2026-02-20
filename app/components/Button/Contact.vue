<template>

    <button class="border flex items-center gap-2 py-2 px-2 rounded-xl text-2xl w-fit h-fit text-zinc-50
    transition-colors duration-500 ease-in-out bg-zinc-700 border-zinc-600
    hover:bg-zinc-500 hover:border-zinc-400 cursor-pointer">
        <Icon :name="IconName || 'tabler:brand-github'" />
    </button>

</template>

<script setup lang="ts">

defineProps<{
    IconName?: string;
}>()


</script>