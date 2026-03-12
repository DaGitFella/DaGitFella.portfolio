export const useTypewriter = (fullText: string, speed: number = 100) => {
  const displayText = ref('');
  const isCompleted = ref(false);

  onMounted(() => {
    let currentIndex = 0;
    isCompleted.value = false;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        displayText.value = fullText.slice(0, currentIndex);
        currentIndex++;
      } else {
        isCompleted.value = true;
        clearInterval(interval);
      }
    }, speed);

    onBeforeUnmount(() => {
      clearInterval(interval);
    });
  });

  return {
    displayText,
    isCompleted,
  };
};
