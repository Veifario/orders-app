import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CalendarDays, ChevronDown, Phone } from "lucide-react";

import { CustomerType } from "@/types/customers.types";
import { divideToDischarges } from "@/utils/formatters";

interface ICustomerCardProps {
  customer: CustomerType;
}

const CustomerCard = ({ customer }: ICustomerCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={twMerge(
        "max-h-[76px] overflow-hidden rounded-xl bg-white p-3 px-4 duration-200",
        isOpen && "max-h-[214px]",
      )}
    >
      <div
        className="flex items-center justify-between"
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        <div>
          <div className="flex items-center gap-[30px]">
            <p className="font-bold">{customer.full_name}</p>
            {!!customer.total_amount && (
              <p className="text-sm text-[#A5A5A5]">
                {divideToDischarges(customer.total_amount)}
              </p>
            )}
          </div>

          <div className="mt-2 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <CalendarDays size={15} className="text-desert" />
              <p className="text-[13px] font-medium text-[#4F4F4F]">
                {customer.birthday.split("-").reverse().join(".")}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Phone size={15} className="text-desert" />
              <p className="text-[13px] font-medium text-[#4F4F4F]">
                {customer.phone}
              </p>
            </div>
          </div>
        </div>

        <ChevronDown
          size={25}
          className={twMerge(
            "text-desert duration-150",
            isOpen && "rotate-180",
          )}
        />
      </div>

      <div className="mt-[14px] border-t border-[#EFEFEF] pt-[13px]">
        <p className="text-[15px] font-semibold">Ma'lumotlar:</p>

        <div className="mt-3 grid grid-cols-2 gap-x-[25px]">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray">Ustki kiyim</p>
            <p className="tex-[13px] font-medium">
              {customer.upper_clothes_size || <span>&mdash;</span>}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray">Shim</p>
            <p className="tex-[13px] font-medium">
              {customer.lower_clothes_size || <span>&mdash;</span>}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray">Oyoq kiyim</p>
            <p className="tex-[13px] font-medium">
              {customer.shoe_size || <span>&mdash;</span>}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray">Ogirlik</p>
            <p className="tex-[13px] font-medium">
              {customer.weight || <span>&mdash;</span>}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray">Bo'y</p>
            <p className="tex-[13px] font-medium">
              {customer.height || <span>&mdash;</span>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
