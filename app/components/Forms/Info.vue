<template>

    <div class="flex flex-col px-10 py-7.5 gap-7.5 items-start outline outline-indigo-400 
    dark:outline-emerald-400 shadow-base bg-white dark:bg-slate-900 rounded-xl">
        <div class="flex font-medium text-[11px] lg:text-[16px]">
            <p class="text-slate-400">
                <span class="text-indigo-700 dark:text-emerald-500">{{devName}}@dev:~</span>$
            </p>
            <p>echo $INFO_CONTATO</p>
        </div>
        <div class="flex items-center gap-1.5">
            <Icon name="heroicons:envelope" class="text-indigo-700 text-xl lg:text-2xl dark:text-emerald-500"></Icon>
            <div class="flex flex-col items-start">
                <span class="text-slate-400 text-sm">Email</span>
                <span class="text-[11px] lg:text-[16px]">{{ devEmail }}</span>
            </div>
        </div>
        <div class="flex items-center gap-1.5">
            <Icon name="heroicons:map-pin" class="text-indigo-700 text-xl lg:text-2xl dark:text-emerald-500"></Icon>
            <div class="flex flex-col items-start">
                <span class="text-slate-400 text-sm">Localização</span>
                <span class="text-[11px] lg:text-[16px]">{{ devLoc }}</span>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

defineProps<{
    devName: String,
    devEmail: String,
    devLoc: String
}>()

</script>