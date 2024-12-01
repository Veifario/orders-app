import { Dispatch, SetStateAction, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import Modal from "@/components/shared/Modal/Modal";
import Button from "@/components/ui/Button/Button";
import Checkbox from "@/components/ui/Input/Checkbox";

import { ordersThunk } from "@/store/thunks/orders.thunk";

interface IFilterModalProps {
  isOpen: boolean;
  checkedStatus: number | null;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsFilterActive: Dispatch<SetStateAction<boolean>>;
  setCheckedStatus: Dispatch<SetStateAction<number | null>>;
}

const FilterModal = ({
  isOpen,
  checkedStatus,
  setIsOpen,
  setIsFilterActive,
  setCheckedStatus,
}: IFilterModalProps) => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { data: statsList, isLoading } = useAppSelector(
    (state) => state.orders.stats,
  );

  useEffect(() => {
    if (location.state?.filterStatusId) {
      setCheckedStatus(location.state.filterStatusId);
      setIsFilterActive(location.state.filterStatusId);
    }

    const promise = dispatch(ordersThunk.getStats());
    return () => {
      promise.abort();
    };
  }, []);

  const handleCheck = (statusId: number) => {
    setCheckedStatus((prevState) => (prevState !== statusId ? statusId : null));
  };
  const handleSaveFilters = () => {
    setIsFilterActive(checkedStatus !== null);
    dispatch(ordersThunk.filter({ status_id: checkedStatus || undefined }));
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div
        className={twMerge(
          "absolute bottom-0 left-0 h-min w-full rounded-t-3xl bg-white px-4 py-8",
        )}
      >
        <h3 className="text-[28px] font-bold">Status</h3>

        <div className="mt-10 divide-y divide-[#EEEEEE]">
          {isLoading ? (
            <div className="space-y-[2px]">
              {Array.from({ length: 5 }).map((__, index) => (
                <div
                  key={index}
                  className="h-[55px] w-full animate-pulse rounded-xl bg-lightGray"
                />
              ))}
            </div>
          ) : (
            statsList.map((stat) => (
              <div
                className="flex items-center justify-between py-4"
                onClick={() => handleCheck(stat.id)}
              >
                <p className="font-medium">{stat.name}</p>
                <Checkbox checked={checkedStatus === stat.id} readOnly />
              </div>
            ))
          )}
        </div>

        <Button className="mt-10" onClick={handleSaveFilters}>
          Qo'llash
        </Button>
      </div>
    </Modal>
  );
};

export default FilterModal;
