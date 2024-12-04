import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { StatusNameType } from "@/types/global.types";

interface IBadgeProps {
  type: StatusNameType;
  children: ReactNode;
}

const Badge = ({ type, children }: IBadgeProps) => {
  return (
    <div
      className={twMerge(
        "rounded-lg px-[19px] py-[6px] text-[13px] font-medium",
        {
          //Thanks for UI/UX, we have hardcode
          success: "bg-[#18AE4A12] text-success",
          waiting: "bg-[#F2BF1A14] text-primary",
          buyed: "bg-[#F112121A] text-error",
          not_buyed: "bg-[#12C4F11A] text-[#126BF1]",
          defect: "bg-[#79717A1A] text-[#6B706C]",
        }[type],
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
