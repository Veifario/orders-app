import { Navigate, Outlet } from "react-router-dom";

import MainLayout from "@/layout/MainLayout/MainLayout";

import { isSignedIn } from "@/helpers/auth.helper";

const ProtectedRoute = () => {
  return isSignedIn() ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
