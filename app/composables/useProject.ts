export interface CodeLink {
  client?: string;
  server?: string;
}

export interface Project {
  title: string;
  resume: string;
  description: string;
  image: string;
  techStack: string[];
  code: string | CodeLink;
  liveDemo?: string;
  colaborators?: string[];
}

export const useProject = () => {
  const projects = reactive<Project[]>([
    {
      title: "matematês",
      resume:
        "Diciclopédia matemática digital. Adaptação de livro autoral com definições, exemplos e ilustrações interativas.",
      description:
        "Projeto de extensão do IFRN campus Natal Zona Norte, desenvolvido em equipe. O Matemates é uma diciclopédia matemática digital, que tem por objetivo apresentar definições, exemplos e ilustrações interativas sobre diversos temas matemáticos. O projeto é uma adaptação de um livro autoral, e apresenta uma interface intuitiva e acessível para estudantes e entusiastas da matemática. \
        Atuei majoritariamente no desenvolvimento do frontend, utilizando Django e Angular para criar uma experiência de usuário fluida e interativa. O projeto também conta com um backend robusto, desenvolvido por @isaque-dantas, que gerencia o conteúdo e as interações dos usuários. \
        O design ficou por cargo de @alphalt-ofc, que criou uma identidade visual atraente e coerente com o tema do projeto. O Matemates é um recurso valioso para estudantes e professores de matemática, oferecendo uma abordagem inovadora para o ensino e aprendizado da disciplina.",
      image: "teste.png",
      techStack: ["Django", "Angular", "API Rest", "MySQL", "Bootstrap"],
      code: {
        client: "https://github.com/isaque-dantas/matemates.client.git",
        server: "https://github.com/isaque-dantas/matemates.server.git",
      },
      liveDemo: "https://matemates.com.br",
      colaborators: ["DaGitFella", "isaque-dantas", "alphalt-ofc"],
    },
    {
      title: "4anime",
      resume:
        "Sistema de posts sobre animes. Apresenta CRUD completo de posts e usuário, função de favoritar e curtir.",
      description: "Projeto de desenvolvimento para estudo de FastAPI e Vue.js desenvolvido no IFRN. O 4Anime é um sistema de posts sobre animes, que apresenta um CRUD completo de posts e usuários, além de funções de favoritar e curtir. O frontend foi desenvolvido com Vue.js, proporcionando uma experiência de usuário fluida e responsiva, enquanto o backend foi construído com FastAPI, garantindo alta performance e escalabilidade. \
        O projeto é uma plataforma interativa para fãs de anime, permitindo que compartilhem suas opiniões e descubram novos títulos. Atuei como desenvolvedor Full Stack, sendo responsável por toda a implementação do frontend e backend, além da arquitetura do sistema e concepção do banco de dados. O design ficou por conta de @alphalt-ofc e @luanny, que criaram uma interface moderna e atraente, alinhada com a temática do projeto. O 4Anime é um recurso valioso para a comunidade de fãs de anime, oferecendo uma plataforma para interação e compartilhamento de conteúdo relacionado a animes. ",
      image: "4Anime.png",
      techStack: ["Vue.js", "FastAPI", "Tailwindcss", "API Rest", "JWT"],
      code: {
        client: "https://gitlab.com/davibezerra123457/4Anime.client.git",
        server: "https://gitlab.com/davibezerra123457/4Anime.server.git",
      },
      liveDemo: "https://4-anime-client.vercel.app/",
      colaborators: ["DaGitFella", "alphalt-ofc", "luaanny"],
    },
    {
      title: "ágora library",
      resume:
        "Simulação de um e-commerce de biblioteca virtual. Apresenta CRUD de livros, gerenciamento de usuários e simulação de compras.",
      description:
        "Projeto de desenvolvimento para estudo de Flask e arquitetura monolítica, desenvolvido no IFRN. O Ágora Library é uma simulação de um e-commerce de biblioteca virtual, que apresenta um CRUD completo de livros, gerenciamento de usuários e simulação de compras. O projeto foi desenvolvido utilizando Flask, proporcionando uma estrutura leve e flexível para o backend, enquanto o frontend foi construído com Bootstrap, garantindo uma interface responsiva e amigável. \
        O Ágora Library é uma plataforma interativa para amantes de livros, permitindo que explorem um catálogo virtual, gerenciem suas contas e simulem compras. Atuei como desenvolvedor Full Stack, sendo responsável por parte da implementação do frontend e todo o backend, além da arquitetura do sistema e concepção do banco de dados. O design ficou por conta de @alphalt-ofc e @luanny, que criaram uma interface moderna e atraente, alinhada com a temática do projeto.",
      image: "agora_library.png",
      techStack: ["Flask", "Bootstrap", "Monolithic", "Sqlite", "Alembic"],
      code: "https://gitlab.com/davibezerra123457/Agora-Library-Monolithic.git",
      liveDemo: "https://agora-library-monolithic.onrender.com/?genre=Todos",
      colaborators: ["DaGitFella", "alphalt-ofc", "luaanny"],
    },
    {
      title: "dados livres",
      resume:
        "Contribuição em sistema de catalogação de dados abertos, projeto de extensão do IFRN campus Natal Zona Norte. ",
      description: 
        "O Dados Livres é um projeto de extensão do IFRN e de código aberto que foca na colaboração da comunidade para a catalogação de dados abertos. Atuei tanto no frontend, desenvolvendo \
        a interface mobile e corrigindo problemas na versão de desktop, como no backend, construindo uma API em Flask. Além disso, consertei as dependências do projeto que estavam legadas e \
        alterei o gerenciador de dependências para o poetry.",
      image: "dados_livres.png",
      techStack: ["Flask", "API Rest", "Bootstrap", "Sqlite", "Alembic"],
      code: "https://gitlab.com/Ronald-Kaue/dados-livres",
      liveDemo: "https://dadoslivres.org/",
      colaborators: ["DaGitFella"],
    },
    {
      title: "api mensagens",
      resume:
        "API de mensagens, com autenticação JWT e CRUD completo de mensagens e usuários. Projeto pessoal para estudo de FastAPI.",
      description: 
        "Projeto pessoal de estudos em FastApi desenvolvido no IFRN. Fui o principal desenvolvedor, responsável pela arquitetura e boa parte da implementação. Apresenta \
        CRUD completo de mensagens, autenticação com JWT e testes automatizados.",
      image: "api_mensagens.png",
      techStack: ["FastAPI", "JWT", "Alembic", "API Rest"],
      code: "https://github.com/DaGitFella/api-mensagens.git",
      colaborators: ["DaGitFella", "alphalt-ofc", "luaanny"],
    },
    {
      title: "portfolio pessoal",
      resume:
        "Meu portfólio pessoal, desenvolvido com Nuxt, TypeScript e Tailwindcss. Tem por objetivo apresentar meus projetos e habilidades.",
      description:
        "Meu projeto de portfólio pessoal, desenvolvido utilizando nuxt como parte de meu aprendizado.",
      image: "portfolio.png",
      techStack: ["Nuxt", "TypeScript", "Tailwindcss"],
      code: "https://github.com/DaGitFella/portfolio.git",
      colaborators: ["DaGitFella"],
    },
  ]);

  return {
    projects,
  };
};
