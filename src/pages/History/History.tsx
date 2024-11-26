import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Search, TextSearch } from "lucide-react";
import { useAppDispatch } from "@/hooks/redux";

import TextInput from "@/components/ui/Input/TextInput";
import FilterModal from "./components/FilterModal";
import OrdersList from "./components/OrdersList";

import { ordersThunk } from "@/store/thunks/orders.thunk";

const History = () => {
  const dispatch = useAppDispatch();

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);

  useEffect(() => {
    const promise = dispatch(ordersThunk.getAll());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <>
      <div className="space-y-2">
        <div className="flex w-full gap-2">
          <div className="w-full">
            <TextInput icon={<Search />} placeholder="Search..." />
          </div>

          <button
            className={twMerge(
              "relative flex h-12 min-w-12 items-center justify-center rounded-xl bg-white outline-none",
              isFilterModalOpen && "bg-primary text-white",
            )}
            onClick={() => setIsFilterModalOpen(true)}
          >
            <TextSearch size={27} />
            {isFilterActive && (
              <div className="absolute -right-[2px] -top-[2px] size-2 rounded-full bg-error" />
            )}
          </button>
        </div>

        <OrdersList />
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        setIsOpen={setIsFilterModalOpen}
        setIsFilterActive={setIsFilterActive}
      />
    </>
  );
};

export default History;
