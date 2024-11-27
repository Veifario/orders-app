import { createBrowserRouter, Link } from "react-router-dom";
import { Plus } from "lucide-react";

import ProtectedRoute from "./ProtectedRoute";

import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import History from "@/pages/History/History";
import AddOrder from "@/pages/AddOrder/AddOrder";
import Customers from "@/pages/Customers/Customers";
import AddCustomer from "@/pages/AddCustomer/AddCustomer";
import Birthdays from "@/pages/Birthdays/Birthdays";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/customers",
        children: [
          {
            index: true,
            element: <Customers />,
            handle: {
              crumb: "Mijozlar ro'yxati",
              extraNavigation: (
                <Link to="/customers/add">
                  <Plus className="text-desert" size={24} />
                </Link>
              ),
            },
          },
          {
            path: "add",
            element: <AddCustomer />,
            handle: {
              crumb: "Mijoz yaratish",
            },
          },
        ],
      },
      {
        path: "/history",
        element: <History />,
        handle: {
          crumb: "Buyurtmalar tarixi",
        },
      },
      {
        path: "/add",
        element: <AddOrder />,
        handle: {
          crumb: "Buyurtma yaratish",
        },
      },
      {
        path: "/birthdays",
        element: <Birthdays />,
        handle: {
          crumb: "Xabarlar",
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
