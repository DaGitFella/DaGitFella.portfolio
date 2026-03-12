export const useModal = () => {
  const isOpened = ref(false)

  const open = () => {
    console.log('opening modal')
    isOpened.value = true
  }

  const close = () => {
    console.log('closing modal')
    isOpened.value = false
  }

  return {
    isOpened,
    open,
    close,
  }
}
