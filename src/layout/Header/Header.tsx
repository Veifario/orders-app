import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useMatches, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const matches = useMatches();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [headerText, setHeaderText] = useState("");

  useEffect(() => {
    matches.forEach((e) => {
      setHeaderText((e.handle as { crumb: string })?.crumb);
    });
  }, [matches]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={twMerge(
        "fixed top-0 z-50 flex h-14 w-full items-center justify-center rounded-b-2xl bg-white px-4",
        pathname === "/" && "justify-start",
      )}
    >
      {pathname === "/" ? (
        <p className="font-semibold">Иван Иванов</p>
      ) : (
        <>
          <button className="absolute left-3" onClick={handleBack}>
            <ChevronLeft size={24} />
          </button>
          <h2 className="justify-self-center font-semibold">{headerText}</h2>
        </>
      )}
    </div>
  );
};

export default Header;
