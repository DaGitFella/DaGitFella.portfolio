<template>
  <div class="w-full">
    <NuxtLayout
      name="title"
      title="./contato.sh"
      description="# Disponível para novos projetos e oportunidades"
    >
      <div class="grid grid-cols-2 w-full gap-25">
        <div class="flex flex-col gap-7.5">
          <FormsInfo
            dev-name="davi"
            dev-email="davibezerra123457@gmail.com"
            dev-loc="Natal/RN - Brasil"
          />
          <div class="flex flex-col gap-2.5">
            <span class="text-slate-400 text-[16px]"># Links rápidos</span>
            <FormsLink to="github.com/DaGitFella"/>
            <FormsLink to="linkedin.com/in/davi-lucas-510686283"/>
          </div>
        </div>
        <form class="flex flex-col gap-7.5">
          <FormsInput 
          type="name"
          />
          <FormsInput
          type="email" 
          />
          <FormsTextArea />
          <FormsButton />
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">



</script>
