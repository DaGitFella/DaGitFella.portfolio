<template>
  <div
    v-if="isVisible"
    @click="close"
  
    class="w-screen h-screen fixed top-0 p-5 py-50 lg:px-30 2xl:px-50 flex items-center justify-center z-50 bg-white/10 backdrop-blur-sm cursor-pointer"
  >
    <section
      class="bg-slate-100 flex flex-col-reverse max-h-180 overflow-scroll dark:bg-slate-900 rounded-lg p-9 lg:p-12.5 lg:grid lg:grid-cols-2 gap-10 shadow-indigo-layered dark:shadow-emerald-layered"
    >
      <figure class="flex flex-col gap-3 lg:justify-between lg:h-full">
        <NuxtImg
          :src="project?.image"
          alt="Tux image"
          class="lg:w-162.5 border-3 rounded-xl border-indigo-700 dark:border-emerald-500 cursor-zoom-in"
          @click.stop="toggleImageExpand"
        />
        <div
          v-if="isImageExpanded"
          @click.stop="isImageExpanded = false"
          class="fixed inset-0 z-60 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-5 cursor-zoom-out"
        >
          <NuxtImg
            :src="project?.image"
            alt="Tux image expanded"
            class="h-[90vh] w-[90vw] rounded-2xl border-2 
            border-indigo-500 dark:border-emerald-500 shadow-2xl"
          />
        </div>
        <div class="flex flex-col gap-2.5">
          <p class="text-lg font-title text-indigo-700 dark:text-emerald-500">
            # Links
          </p>
          <div class="flex flex-col lg:flex-row gap-3">
            <LazyButtonCard
              v-if="typeof project?.code === 'object' && project?.code.client"
              @click.stop
              class="border border-indigo-700 dark:border-emerald-500 text-indigo-700 dark:text-emerald-500 hover:bg-indigo-700 hover:text-indigo-50 dark:hover:bg-emerald-500 dark:hover:text-emerald-50"
              text="Cliente"
              IconName="tabler:brand-github"
              :show-icon="true"
              :link="project.code.client"
            />
            <LazyButtonCard
              v-if="typeof project?.code === 'object' && project?.code.server"
              @click.stop
              class="border border-indigo-700 dark:border-emerald-500 text-indigo-700 dark:text-emerald-500 hover:bg-indigo-700 hover:text-indigo-50 dark:hover:bg-emerald-500 dark:hover:text-emerald-50"
              text="Servidor"
              IconName="tabler:brand-github"
              :show-icon="true"
              :link="project.code.server"
            />
            <LazyButtonCard
              v-else-if="typeof project?.code === 'string'"
              @click.stop
              class="border border-indigo-700 dark:border-emerald-500 text-indigo-700 dark:text-emerald-500 hover:bg-indigo-700 hover:text-indigo-50 dark:hover:bg-emerald-500 dark:hover:text-emerald-50"
              text="Código"
              IconName="tabler:brand-github"
              :show-icon="true"
              :link="project.code"
            />
            <LazyButtonCard
              @click.stop
              class="border border-indigo-700 dark:border-emerald-500 text-indigo-700 dark:text-emerald-500 hover:bg-indigo-700 hover:text-indigo-50 dark:hover:bg-emerald-500 dark:hover:text-emerald-50"
              text="Live Demo"
              IconName="tabler:external-link"
              :show-icon="true"
              :link="project?.liveDemo"
            />
          </div>
        </div>
      </figure>
      <article
        class="flex flex-col gap-5 text-indigo-700 dark:text-emerald-500"
      >
        <div class="flex flex-col gap-5">
          <p class="font-title font-bold text-lg">> descrição</p>
          <p class="text-[16px] font-body overflow-scroll max-h-30 lg:max-h-45">
            <span class="font-bold">$</span>
            {{ project?.description }}
          </p>
        </div>
        <div class="flex flex-col gap-5">
          <p class="font-title font-bold text-lg">> stack</p>
          <div class="flex flex-wrap gap-2">
            <LazyCardTechBadge
              v-for="tech in project?.techStack || []"
              :key="tech"
              :tech="tech"
              type="tech"
            />
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <p class="font-title font-bold text-lg">> colaboradores</p>
          <ul class="list-inside text-[16px] font-body">
            <li v-for="colaborator in project?.colaborators || []" :key="colaborator"
            class="flex items-center gap-2">
              <Icon name="heroicons:user"/>
              {{ colaborator }}
            </li>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { Project } from "~/composables/useProject";

defineProps<{
  isVisible: boolean;
  project: Project | null;
}>();

const emit = defineEmits<{
  (event: "closeModal"): void;
}>();

const isImageExpanded = ref(false);

function toggleImageExpand() {
  isImageExpanded.value = !isImageExpanded.value;
}

function close() {
  emit("closeModal");
}
</script>
