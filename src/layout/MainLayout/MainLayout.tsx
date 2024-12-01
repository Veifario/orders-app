import { ReactNode, Suspense } from "react";
import { createPortal } from "react-dom";

import SpinnerFullPage from "@/components/shared/SpinnerFullPage/SpinnerFullPage";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";

interface IMainLayout {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <main className="h-screen min-h-screen w-full bg-background">
      <Suspense fallback={<SpinnerFullPage />}>
        <div className="container h-screen overflow-y-auto bg-background pb-[100px] pt-[70px]">
          {children}
        </div>
      </Suspense>

      {createPortal(<NavBar />, document.body)}
      {createPortal(<Header />, document.body)}
    </main>
  );
};

export default MainLayout;
