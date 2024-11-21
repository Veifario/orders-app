import { Navigate, Outlet } from "react-router-dom";

import { isSignedIn } from "@/helpers/auth.helper";
import MainLayout from "@/layout/MainLayout/MainLayout";

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
