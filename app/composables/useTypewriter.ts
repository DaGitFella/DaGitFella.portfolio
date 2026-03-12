export const useTypewriter = (fullText: string, speed: number = 100) => {
  const displayText = ref('');

  onMounted(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        displayText.value = fullText.slice(0, currentIndex);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    onBeforeUnmount(() => {
      clearInterval(interval);
    });
  });

  return {
    displayText,
  };
};
