import { StatusNameType } from "@/types/global.types";
import { CircleCheck, CircleX, Clock, Package, PackageX } from "lucide-react";
import { ReactElement } from "react";

export const homeStatisticBlocks: {
  icon: ReactElement;
  iconBackgroundColor: string;
  key: StatusNameType;
}[] = [
  {
    icon: <Package color="#F2BF1A" size={25} />,
    iconBackgroundColor: "#F2BF1A1A",
    key: "buyed",
  },
  {
    icon: <CircleCheck color="#18AE4A" size={25} />,
    iconBackgroundColor: "#33D1681A",
    key: "success",
  },
  {
    icon: <CircleX color="#F11212" size={25} />,
    iconBackgroundColor: "#D815151A",
    key: "not_buyed",
  },
  {
    icon: <Clock color="#4D5FEB" size={25} />,
    iconBackgroundColor: "#4660F51A",
    key: "waiting",
  },
  {
    icon: <PackageX color="#8E8E8E" size={25} />,
    iconBackgroundColor: "#3C3C3C1A",
    key: "defect",
  },
];
