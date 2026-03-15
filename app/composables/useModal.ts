export const useModal = () => {
  const isOpened = ref(false)
  const project = ref<Project | null>(null)

  const open = (projectData: Project) => {
    project.value = projectData
    console.log('opening modal with data:', project.value)
    isOpened.value = true
  }

  const close = () => {
    console.log('closing modal')
    isOpened.value = false
    project.value = null
  }

  return {
    isOpened,
    open,
    close,
    project,
  }
}
