export const useTypewriter = (fullText: string, speed: number = 100) => {
  const displayText = ref('');
  let interval: NodeJS.Timeout;

  onMounted(() => {
    let currentIndex = 0;

    interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        displayText.value = fullText.slice(0, currentIndex);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);
  });

  onBeforeUnmount(() => {
    if (interval) {
      clearInterval(interval);
    }
  });

  return {
    displayText,
  };
};
