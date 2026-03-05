export interface Help {
  title: string;
  description: string;
  icon?: string;
  services?: string[];
}

export const useUseService = () => {
  const services = reactive<Help[]>([
    {
      title: "Desenvolvimento Web",
      description: "Criação de sites e aplicações web responsivas e modernas.",
      services: [
        "Desenvolvimento Frontend",
        "Desenvolvimento Backend",
        "Integração de APIs",
        "Otimização de Performance",
      ],
      icon: "tabler:webhook",
    },
    {
      title: "Desenvolvimento Mobile",
      description: "Criação de aplicativos móveis para Android e iOS.",
      services: [
        "Desenvolvimento Nativo",
        "Desenvolvimento Cross-Platform",
        "Design de UI/UX para Mobile",
        "Publicação em Lojas de Apps",
      ],
      icon: "tabler:device-mobile",
    },
    {
      title: "Consultoria em Tecnologia",
      description: "Orientação estratégica para projetos de tecnologia.",
      services: [
        "Avaliação de Tecnologias",
        "Planejamento de Projetos",
        "Revisão de Código",
        "Mentoria Técnica",
      ],
      icon: "tabler:bulb",
    },
  ]);

  return {
    services,
  };
};
