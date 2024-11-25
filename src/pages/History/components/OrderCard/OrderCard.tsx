import { MoveDown, MoveUp, Pencil } from "lucide-react";

import Badge from "@/components/shared/Badge/Badge";
import { StatusType } from "@/types/global.types";

interface IOrderCardProps {
  status: StatusType;
}

const OrderCard = ({ status }: IOrderCardProps) => {
  const handleEdit = () => {};

  return (
    <div className="w-full rounded-xl bg-white p-3">
      <div className="flex items-center justify-between">
        <p className="text-[17px] font-bold">Nike Air max 95 x1</p>

        <button onClick={handleEdit}>
          <Pencil className="text-desert" size={16} />
        </button>
      </div>

      <div className="flex gap-3">
        <p className="text-[13px] font-medium text-[#818181]">09.04.2024</p>
        <p className="text-[13px] font-medium text-[#818181]">Иван Иванов</p>
      </div>

      <div className="mt-1 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <MoveDown size={14} className="text-error" />
            <p className="text-[15px] font-medium text-error">500$</p>
          </div>

          <div className="flex items-center gap-1">
            <MoveUp size={14} className="text-success" />
            <p className="text-[15px] font-medium text-success">500$</p>
          </div>
        </div>

        <Badge type={status} />
      </div>
    </div>
  );
};

export default OrderCard;
