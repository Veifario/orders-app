import { useAppSelector } from "@/hooks/redux";
import OrderCard from "./OrderCard";

const OrdersList = () => {
  const { data, isLoading } = useAppSelector(
    (state) => state.orders.historyList,
  );

  return (
    <div className="space-y-2">
      {isLoading
        ? Array.from({ length: 10 }).map((__, index) => (
            <div
              key={index}
              className="h-[104.5px] w-full animate-pulse rounded-xl bg-lightGray"
            />
          ))
        : data.map((__, index) => <OrderCard key={index} status="canceled" />)}
    </div>
  );
};

export default OrdersList;
