import { lazy } from "react";

export const Login = lazy(() => import("@/pages/Login/Login"));

export const Home = lazy(() => import("@/pages/Home/Home"));

export const History = lazy(() => import("@/pages/History/History"));
export const AddOrder = lazy(() => import("@/pages/AddOrder/AddOrder"));
export const EditOrder = lazy(() => import("@/pages/EditOrder/EditOrder"));

export const Customers = lazy(() => import("@/pages/Customers/Customers"));
export const EditCustomer = lazy(
  () => import("@/pages/EditCustomer/EditCustomer"),
);
export const AddCustomer = lazy(
  () => import("@/pages/AddCustomer/AddCustomer"),
);

export const Birthdays = lazy(() => import("@/pages/Birthdays/Birthdays"));
