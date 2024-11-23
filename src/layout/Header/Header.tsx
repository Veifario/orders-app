import { useEffect, useState } from "react";
import { useMatches } from "react-router-dom";

const Header = () => {
  const matches = useMatches();

  const [headerText, setHeaderText] = useState("");

  useEffect(() => {
    matches.forEach((e) => {
      setHeaderText((e.handle as { crumb: string })?.crumb);
    });
  }, [matches]);

  return (
    <div className="fixed top-0 z-50 flex h-14 w-full items-center justify-center rounded-b-2xl bg-white">
      <h2 className="font-semibold">{headerText}</h2>
    </div>
  );
};

export default Header;
