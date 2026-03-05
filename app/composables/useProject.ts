export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  showLiveDemo?: boolean;
  liveDemo?: string;
}

export const useProject = () => {
  const projects = reactive<Project[]>([
    {
      title: "Projeto 1",
      description: "Descrição do projeto 1",
      image: "teste.png",
      techStack: [
        "Vue.js",
        "TypeScript",
        "Tailwindcss",
        "Tailwindcss",
        "Tailwindcss",
      ],
      github: "",
      showLiveDemo: true,
    },
    {
      title: "Projeto 1",
      description: "Descrição do projeto 1",
      image: "teste.png",
      techStack: [
        "Vue.js",
        "TypeScript",
        "Tailwindcss",
        "Tailwindcss",
        "Tailwindcss",
      ],
      github: "",
      showLiveDemo: true,
    },
    {
      title: "Projeto 1",
      description: "Descrição do projeto 1",
      image: "teste.png",
      techStack: [
        "Vue.js",
        "TypeScript",
        "Tailwindcss",
        "Tailwindcss",
        "Tailwindcss",
      ],
      github: "",
      showLiveDemo: true,
    },
    {
      title: "Projeto 1",
      description: "Descrição do projeto 1",
      image: "teste.png",
      techStack: [
        "Vue.js",
        "TypeScript",
        "Tailwindcss",
        "Tailwindcss",
        "Tailwindcss",
      ],
      github: "",
      showLiveDemo: true,
    },
    {
      title: "Projeto 1",
      description: "Descrição do projeto 1",
      image: "teste.png",
      techStack: [
        "Vue.js",
        "TypeScript",
        "Tailwindcss",
        "Tailwindcss",
        "Tailwindcss",
      ],
      github: "",
      showLiveDemo: true,
    },
    {
      title: "Projeto 1",
      description: "Descrição do projeto 1",
      image: "teste.png",
      techStack: [
        "Vue.js",
        "TypeScript",
        "Tailwindcss",
        "Tailwindcss",
        "Tailwindcss",
      ],
      github: "",
      showLiveDemo: true,
    },
  ]);

  return {
    projects,
  };
};
