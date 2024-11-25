import { useState } from "react";
import { Search, TextSearch } from "lucide-react";

import TextInput from "@/components/ui/Input/TextInput";
import OrderCard from "./components/OrderCard/OrderCard";
import FilterModal from "./components/FilterModal/FilterModal";
import { twMerge } from "tailwind-merge";

const History = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);

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

        <div className="space-y-2">
          {Array.from({ length: 20 }).map((__, index) => (
            <OrderCard
              key={index}
              status={
                index % 2
                  ? "canceled"
                  : index % 3
                    ? "waiting"
                    : index % 4
                      ? "return"
                      : index % 5
                        ? "defect"
                        : "success"
              }
            />
          ))}
        </div>
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
