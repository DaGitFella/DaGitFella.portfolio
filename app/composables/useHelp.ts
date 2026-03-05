export interface Help {
  title: string;
  description: string;
  icon?: string;
  services?: string[];
}

export const useHelp = () => {
  const services = reactive<Help[]>([
    {
      title: "Desenvolvimento Web",
      description: "Criação de aplicações web modernas e responsivas, desde landing pages até sistemas complexos.",
      services: [
        "Sites institucionais e landing pages",
        "Aplicações web full-stack",
        "Plataformas personalizadas",
      ],
      icon: "heroicons:globe-alt",
    },
    {
      title: "APIs e Backend ",
      description: "Desenvolvimento de APIs robustas e escaláveis com documentação completa e segurança.",
      services: [
        "Autenticação e autorização",
        "Integração com serviços de terceiros",
        "Documentação técnica completa",
      ],
      icon: "heroicons:code-bracket",
    },
    {
      title: "Automação",
      description: "Criação de aplicações web modernas e responsivas, desde landing pages até sistemas complexos.",
      services: [
        "Automação de tarefas repetitivas",
        "Web scraping ",
        "Bots e ferramentas personalizadas",
      ],
      icon: "heroicons:cpu-chip",
    },
  ]);

  return {
    services,
  };
};
