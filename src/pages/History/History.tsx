import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Search, TextSearch } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "@/hooks/redux";

import TextInput from "@/components/ui/Input/TextInput";
import FilterModal from "./components/FilterModal";
import OrdersList from "./components/OrdersList";

import { useDebounce } from "@/hooks/useDebounce";

import { ordersThunk } from "@/store/thunks/orders.thunk";

const History = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [checkedStatus, setCheckedStatus] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");

  const searchValue = useDebounce(inputValue);

  useEffect(() => {
    if (location.state?.filterStatusId) {
      const promise = dispatch(
        ordersThunk.filter({ status_id: location.state?.filterStatusId }),
      );

      return () => {
        promise.abort();
      };
    } else {
      const promise = dispatch(ordersThunk.getAll());

      return () => {
        promise.abort();
      };
    }
  }, [dispatch]);

  useEffect(() => {
    const promise = dispatch(
      ordersThunk.filter({
        status_id: checkedStatus || location.state?.filterStatusId || undefined,
        search: searchValue,
      }),
    );

    return () => {
      promise.abort();
    };
  }, [searchValue]);

  useEffect(() => {
    setInputValue("");
  }, [checkedStatus]);

  return (
    <>
      <div className="space-y-2">
        <div className="flex w-full gap-2">
          <div className="w-full">
            <TextInput
              icon={<Search />}
              placeholder="Search..."
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
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
        checkedStatus={checkedStatus}
        setIsOpen={setIsFilterModalOpen}
        setIsFilterActive={setIsFilterActive}
        setCheckedStatus={setCheckedStatus}
      />
    </>
  );
};

export default History;
