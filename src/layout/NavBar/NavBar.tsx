import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { navItems } from "./navBar.config";
import { cloneElement } from "react";

const NavBar = () => {
  return (
    <div className="fixed bottom-0 grid h-[72px] w-full grid-cols-4 bg-white px-5 py-2">
      {navItems.map((item) => (
        <NavLink key={item.path} to={item.path}>
          {({ isActive }) => (
            <div
              className={twMerge(
                "m-auto flex h-full w-[56px] flex-col items-center justify-center gap-[6px] rounded-md duration-200",
                isActive && "bg-primary",
              )}
            >
              {cloneElement(item.icon, {
                className: twMerge("text-lightGray", isActive && "text-white"),
              })}
              <span
                className={twMerge(
                  "text-[10px] font-medium text-lightGray",
                  isActive && "text-white",
                )}
              >
                {item.title}
              </span>
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
