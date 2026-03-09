<template>
  <div class="flex flex-col gap-2.5">
    <label :for="getPlaceholder[0]" class="text-sm lg:text-[16px] text-slate-400 font-medium">
        # {{ getPlaceholder[0] }}
    </label>
    <input v-model="model" :type="checkType" :name="type" :placeholder="getPlaceholder[1]" class="border-none outline rounded-xl 
    bg-white  outline-indigo-400  dark:outline-emerald-400 dark:bg-slate-900 
    focus:outline-indigo-500 focus:outline-2 px-7.5 py-3 dark:focus:outline-emerald-500 
    transition-colors 500 ease-in-out lg:text-xl shadow-base dark:shadow-base-dark 
    focus:shadow-indigo-layered dark:focus:shadow-emerald-layered" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: String,
});

const model = defineModel();

const checkType = computed(() => {
    return props.type === 'name' ? 'text' : 'email'
})

const getPlaceholder = computed(() => {
    return checkType.value === 'text' ? ['Nome', 'Seu Nome'] : ['Email', 'seu@email.com'] 
})

</script>
