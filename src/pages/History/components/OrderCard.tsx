import { MoveDown, MoveUp, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Badge from "@/components/shared/Badge/Badge";

import { StatusNameType } from "@/types/global.types";
import { OrderType } from "@/types/orders.types";

interface IOrderCardProps {
  status: StatusNameType;
  order: OrderType;
}

const OrderCard = ({ status, order }: IOrderCardProps) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`${order.id}`);
  };

  return (
    <div className="w-full rounded-xl bg-white p-3">
      <div className="flex items-center justify-between">
        <p className="text-[17px] font-bold">{order.name}</p>

        <button onClick={handleEdit}>
          <Pencil className="text-desert" size={16} />
        </button>
      </div>

      <div className="flex gap-3">
        <p className="text-[13px] font-medium text-[#818181]">
          {order.user.birthday.split("-").reverse().join(".")}
        </p>
        <p className="text-[13px] font-medium text-[#818181]">
          {order.user.full_name}
        </p>
      </div>

      <div className="mt-1 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <MoveDown size={14} className="text-error" />
            <p className="text-[15px] font-medium text-error">
              {order.price_arrival}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <MoveUp size={14} className="text-success" />
            <p className="text-[15px] font-medium text-success">
              {order.price_sell}
            </p>
          </div>
        </div>

        <Badge type={status} />
      </div>
    </div>
  );
};

export default OrderCard;
