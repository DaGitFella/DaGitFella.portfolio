export const UseAnimation = () => {
  const { isMobile } = useDevice();
  const applyAnimation = computed(() => {
    if (!isMobile) return "";

    return "slideVisibleOnceRight";
  });

  return {
    applyAnimation,
  };
};
