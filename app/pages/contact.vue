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
      <div
        class="flex flex-col-reverse pb-8 lg:py-0 lg:grid lg:grid-cols-2 w-full gap-8 lg:gap-25"
      >
        <div v-motion-slide-visible-once-left class="flex flex-col gap-7.5">
          <LazyFormsInfo
            dev-name="davi"
            dev-email="davibezerra123457@gmail.com"
            dev-loc="Natal/RN - Brasil"
          />
          <div class="flex flex-col gap-2.5">
            <span class="text-slate-400 text-sm lg:text-[16px]"
              ># Links rápidos</span
            >
            <div class="flex flex-col gap-4">
              <LazyFormsLink
                link="https://github.com/DaGitFella"
                name="GitHub"
              />
              <LazyFormsLink
                link="https://linkedin.com/in/davi-lucas-510686283"
                name="LinkedIn"
              />
            </div>
          </div>
        </div>
        <form
          v-motion-slide-visible-once-right
          @submit.prevent="handleSubmit"
          class="flex flex-col gap-7.5"
        >
          <LazyFormsInput v-model="formData.name" type="name" />
          <LazyFormsInput v-model="formData.email" type="email" />
          <LazyFormsTextArea v-model="formData.message" />
          <LazyButtonDefault>
            <template #text
              ><input
                type="submit"
                value="Enviar mensagem"
                class="cursor-pointer"
            /></template>
            <template #icon
              ><Icon name="tabler:send" class="text-sm lg:text-xl"></Icon
            ></template>
          </LazyButtonDefault>
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const mailtoLink = computed(() => {
  const recipient = "davibezerra123457@gmail.com";
  const subject = encodeURIComponent(`Message from ${formData.name}`);

  const bodyText = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
  const body = encodeURIComponent(bodyText);

  return `mailto:${recipient}?subject=${subject}&body=${body}`;
});

const handleSubmit = async () => {
  if (!formData.name || !formData.message) {
    alert("Por favor preencha seu nome e nos mande uma mensagem.");
    return;
  }

  try {
    window.location.href = mailtoLink.value;
    formData.name = "";
    formData.email = "";
    formData.message = "";
  } catch (error) {
    console.error("Erro ao enviar email:", error);
  }
};

useHead({
  title: "Contato - Davi Bezerra",
  meta: [
    {
      name: "description",
      content:
        "Entre em contato comigo para discutir projetos, oportunidades ou apenas para dizer oi! Estou sempre aberto a novas conexões e colaborações.",
    },
  ],
});
</script>
