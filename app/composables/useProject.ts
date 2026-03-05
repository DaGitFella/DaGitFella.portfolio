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
      title: "matematês",
      description:
        "Diciclopédia matemática digital. Adaptação de livro autoral com definições, exemplos e ilustrações interativas.",
      image: "teste.png",
      techStack: ["Django", "Angular", "API Rest", "MySQL", "Bootstrap"],
      github: "https://github.com/isaque-dantas/matemates.client.git",
      showLiveDemo: true,
      liveDemo: "https://matemates.com.br",
    },
    {
      title: "4anime",
      description:
        "Sistema de posts sobre animes. Apresenta CRUD completo de posts e usuário, função de favoritar e curtir.",
      image: "4Anime.png",
      techStack: ["Vue.js", "FastAPI", "Tailwindcss", "API Rest", "JWT"],
      github: "https://gitlab.com/davibezerra123457/4Anime.client.git",
      showLiveDemo: true,
      liveDemo: "https://4-anime-client.vercel.app/",
    },
    {
      title: "ágora library",
      description:
        "Simulação de um e-commerce de biblioteca virtual. Apresenta CRUD de livros, gerenciamento de usuários e simulação de compras.",
      image: "agora_library.png",
      techStack: ["Flask", "Bootstrap", "Monolithic", "Sqlite", "Alembic"],
      github:
        "https://gitlab.com/davibezerra123457/Agora-Library-Monolithic.git",
      showLiveDemo: true,
      liveDemo: "https://agora-library-monolithic.onrender.com/?genre=Todos",
    },
    {
      title: "dados livres",
      description:
        "Contribuição em sistema de catalogação de dados abertos, projeto de extensão do IFRN campus Natal Zona Norte. ",
      image: "dados_livres.png",
      techStack: ["Flask", "API Rest", "Bootstrap", "Sqlite", "Alembic"],
      github: "https://gitlab.com/Ronald-Kaue/dados-livres",
      showLiveDemo: true,
      liveDemo: "https://dadoslivres.org/",
    },
    {
      title: "api mensagens",
      description:
        "API de mensagens, com autenticação JWT e CRUD completo de mensagens e usuários. Projeto pessoal para estudo de FastAPI.",
      image: "api_mensagens.png",
      techStack: ["FastAPI", "JWT", "Alembic", "API Rest"],
      github: "https://github.com/DaGitFella/api-mensagens.git",
      showLiveDemo: false,
    },
    {
      title: "portfolio pessoal",
      description:
        "Meu portfólio pessoal, desenvolvido com Nuxt, TypeScript e Tailwindcss. Tem por objetivo apresentar meus projetos e habilidades.",
      image: "portfolio.png",
      techStack: ["Nuxt", "TypeScript", "Tailwindcss"],
      github: "https://github.com/DaGitFella/portfolio.git",
    },
  ]);

  return {
    projects,
  };
};
