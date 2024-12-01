import { createBrowserRouter, Link } from "react-router-dom";
import { Plus } from "lucide-react";

import ProtectedRoute from "./ProtectedRoute";
import {
  AddCustomer,
  AddOrder,
  Birthdays,
  Customers,
  EditCustomer,
  EditOrder,
  History,
  Home,
  Login,
} from "./dynamicRoutes";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
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
          {
            path: ":customerId",
            element: <EditCustomer />,
            handle: {
              crumb: "Mijozni tahrirlash",
            },
          },
        ],
      },
      {
        path: "/history",
        children: [
          {
            index: true,
            element: <History />,
            handle: {
              crumb: "Buyurtmalar tarixi",
            },
          },
          {
            path: ":orderId",
            element: <EditOrder />,
            handle: {
              crumb: "Buyurtmani tahrirlash",
            },
          },
        ],
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
]);
