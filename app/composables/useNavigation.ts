export interface NavItem {
  name: string;
  icon: string;
  link: string;
}

export const translateName = (name: string) => {
  const translations: Record<string, string> = {
    About: "Sobre",
    Projects: "Projetos",
    Help: "Ajuda",
    Skills: "Hab.",
    Contact: "Contato",
  };
  return translations[name] || name;
};

export const useNavigation = () => {
  const sidebarItems = reactive<NavItem[]>([
    {
      name: "About",
      icon: "heroicons:book-open",
      link: "/",
    },
    {
      name: "Projects",
      icon: "heroicons:folder-open",
      link: "/projects",
    },
    {
      name: "Skills",
      icon: "heroicons:code-bracket",
      link: "/skills",
    },
    {
      name: "Help",
      icon: "heroicons:sparkles",
      link: "/help",
    },
    {
      name: "Contact",
      icon: "heroicons:chat-bubble-left",
      link: "/contact",
    },
  ]);

  return {
    sidebarItems,
  };
};
