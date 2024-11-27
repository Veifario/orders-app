import { Dispatch, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";

import Modal from "@/components/shared/Modal/Modal";
import Button from "@/components/ui/Button/Button";
import Checkbox from "@/components/ui/Input/Checkbox";

import { StatusNameType } from "@/types/global.types";

interface IFilterModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsFilterActive: Dispatch<SetStateAction<boolean>>;
}

const FilterModal = ({
  isOpen,
  setIsOpen,
  setIsFilterActive,
}: IFilterModalProps) => {
  const [checkedStatus, setCheckedStatus] = useState<StatusNameType | null>(null);

  const handleCheck = (status: StatusNameType) => {
    setCheckedStatus((prevState) => (prevState !== status ? status : null));
  };
  const handleSaveFilters = () => {
    setIsFilterActive(checkedStatus !== null);
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

        <div className="mt-10 space-y-4 divide-y divide-[#EEEEEE]">
          <div
            className="flex items-center justify-between"
            onClick={() => handleCheck("success")}
          >
            <p className="font-medium">Yakunlangan</p>
            <Checkbox checked={checkedStatus === "success"} readOnly />
          </div>

          <div
            className="flex items-center justify-between pt-4"
            onClick={() => handleCheck("waiting")}
          >
            <p className="font-medium">Kutilmoqda</p>
            <Checkbox checked={checkedStatus === "waiting"} readOnly />
          </div>

          <div
            className="flex items-center justify-between pt-4"
            onClick={() => handleCheck("canceled")}
          >
            <p className="font-medium">Bekor qilingan</p>
            <Checkbox checked={checkedStatus === "canceled"} readOnly />
          </div>

          <div
            className="flex items-center justify-between pt-4"
            onClick={() => handleCheck("return")}
          >
            <p className="font-medium">Qaytarilgan</p>
            <Checkbox checked={checkedStatus === "return"} readOnly />
          </div>

          <div
            className="flex items-center justify-between py-4"
            onClick={() => handleCheck("defect")}
          >
            <p className="font-medium">Brak</p>
            <Checkbox checked={checkedStatus === "defect"} readOnly />
          </div>
        </div>

        <Button className="mt-10" onClick={handleSaveFilters}>
          Qo'llash
        </Button>
      </div>
    </Modal>
  );
};

export default FilterModal;
