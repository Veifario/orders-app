import { ReactElement, useEffect, useState } from "react";
import { Link, useLocation, useMatches, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Bell, ChevronLeft } from "lucide-react";
import { useAppSelector } from "@/hooks/redux";

const Header = () => {
  const matches = useMatches();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [headerText, setHeaderText] = useState("");
  const [extraNavigation, setExtraNavigation] = useState<ReactElement | null>(
    null,
  );

  const { data } = useAppSelector((state) => state.user);

  useEffect(() => {
    matches.forEach((e) => {
      setHeaderText((e.handle as { crumb: string })?.crumb);
      setExtraNavigation(
        (e.handle as { extraNavigation: ReactElement })?.extraNavigation,
      );
    });
  }, [matches]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={twMerge(
        "fixed top-0 z-50 flex h-14 w-full items-center justify-center rounded-b-2xl bg-white px-4",
        pathname === "/" && "items-center justify-between",
      )}
    >
      {pathname === "/" ? (
        <>
          <p className="font-semibold">{data && data.name}</p>
          <Link to="/birthdays">
            <Bell className="text-black" size={24} />
          </Link>
        </>
      ) : (
        <>
          <button className="absolute left-3" onClick={handleBack}>
            <ChevronLeft size={24} />
          </button>
          <h2 className="font-semibold">{headerText}</h2>
          <div className="absolute right-3">{extraNavigation}</div>
        </>
      )}
    </div>
  );
};

export default Header;
