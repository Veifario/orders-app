import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Clients from "@/pages/Clients/Clients";
import History from "@/pages/History/History";
import AddOrder from "@/pages/AddOrder/AddOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          crumb: "Главная",
        },
      },
      {
        path: "/clients",
        element: <Clients />,
        handle: {
          crumb: "Список клиентов",
        },
      },
      {
        path: "/history",
        element: <History />,
        handle: {
          crumb: "История заказов",
        },
      },
      {
        path: "/add",
        element: <AddOrder />,
        handle: {
          crumb: "Создание предзаказа",
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
