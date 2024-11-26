import { Outlet } from "react-router-dom";

import MainLayout from "@/layout/MainLayout/MainLayout";

const ProtectedRoute = () => {
  // isSignedIn()?
  // : (
  //   <Navigate to="/login" />
  // );
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default ProtectedRoute;
