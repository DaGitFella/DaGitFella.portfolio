<template>
  <div class="flex flex-col gap-2.5">
    <label :for="getPlaceholder[0]" class="text-[16px] text-slate-400 font-medium">
        # {{ getPlaceholder[0] }}
    </label>
    <input :type="checkType" :name="type" :placeholder="getPlaceholder[1]" class="border-none outline rounded-xl 
    bg-white  outline-indigo-400  dark:outline-emerald-400 dark:bg-slate-900 
    focus:outline-indigo-500 focus:outline-2 px-7.5 py-3 dark:focus:outline-emerald-500 
    transition-colors 500 ease-in-out text-xl shadow-base dark:shadow-base-dark" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: String,
});

const checkType = computed(() => {
    return props.type === 'name' ? 'text' : 'email'
})

const getPlaceholder = computed(() => {
    return checkType.value === 'text' ? ['Nome', 'Seu Nome'] : ['Email', 'seu@email.com'] 
})

</script>
