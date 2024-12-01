import { Home, List, Plus, Users } from "lucide-react";

export const navItems = [
  {
    path: "/",
    icon: <Home />,
    title: "Asosiy",
  },
  {
    path: "/customers",
    icon: <Users />,
    title: "Mijozlar",
  },
  {
    path: "/history",
    icon: <List />,
    title: "Tarixi",
  },
  {
    path: "/add",
    icon: <Plus />,
    title: "Yaratish",
  },
];
