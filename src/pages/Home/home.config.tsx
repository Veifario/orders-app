import {
  CircleCheck,
  CircleX,
  Clock,
  Package,
  PackageX,
  Undo2,
} from "lucide-react";

export const homeStatisticBlocks = [
  {
    icon: <Package color="#F2BF1A" size={25} />,
    iconBackgroundColor: "#F2BF1A1A",
    title: "Всего заказов",
  },
  {
    icon: <CircleCheck color="#18AE4A" size={25} />,
    iconBackgroundColor: "#33D1681A",
    title: "Успешно",
  },
  {
    icon: <CircleX color="#F11212" size={25} />,
    iconBackgroundColor: "#D815151A",
    title: "Отмена",
  },
  {
    icon: <Clock color="#4D5FEB" size={25} />,
    iconBackgroundColor: "#4660F51A",
    title: "Ожидание",
  },
  {
    icon: <Undo2 color="#F2BF1A" size={25} />,
    iconBackgroundColor: "#E6CF391A",
    title: "Возврат",
  },
  {
    icon: <PackageX color="#8E8E8E" size={25} />,
    iconBackgroundColor: "#3C3C3C1A",
    title: "Брак",
  },
];
