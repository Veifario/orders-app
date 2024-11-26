import { Home, List, Plus, Users } from "lucide-react";

export const navItems = [
  {
    path: "/",
    icon: <Home />,
    title: "Главная",
  },
  {
    path: "/customers",
    icon: <Users />,
    title: "Клиенты",
  },
  {
    path: "/history",
    icon: <List />,
    title: "История",
  },
  {
    path: "/add",
    icon: <Plus />,
    title: "Создать",
  },
];
