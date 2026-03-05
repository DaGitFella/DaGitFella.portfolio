<template>
  <div class="w-full h-full">
    <div
      class="dot-grid h-screen w-screen absolute -z-20 opacity-10 left-0 top-0"
    ></div>
    <NuxtLayout
      name="title"
      title="./contato.sh"
      description="# Disponível para novos projetos e oportunidades"
    >
      <div class="flex flex-col-reverse pb-8 lg:py-0 lg:grid lg:grid-cols-2 w-full gap-8 lg:gap-25">
        <div class="flex flex-col gap-7.5">
          <FormsInfo
            dev-name="davi"
            dev-email="davibezerra123457@gmail.com"
            dev-loc="Natal/RN - Brasil"
          />
          <div class="flex flex-col gap-2.5">
            <span class="text-slate-400 text-sm lg:text-[16px]"># Links rápidos</span>
            <div class="flex flex-col gap-4">
              <FormsLink 
              link="github.com/DaGitFella"
              name="GitHub"
              />
              <FormsLink 
              link="linkedin.com/in/davi-lucas-510686283" 
              name="LinkedIn"
              />
            </div>
          </div>
        </div>
        <form class="flex flex-col gap-7.5">
          <FormsInput type="name" />
          <FormsInput type="email" />
          <FormsTextArea />
          <FormsButton />
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Contato - Davi Bezerra',
  meta: [
    {
      name: 'description',
      content: 'Entre em contato comigo para discutir projetos, oportunidades ou apenas para dizer oi! Estou sempre aberto a novas conexões e colaborações.',
    },
  ],
});

</script>
