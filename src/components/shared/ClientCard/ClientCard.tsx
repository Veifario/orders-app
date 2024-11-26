import { CalendarDays, ChevronDown, Phone } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const ClientCard = () => {
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
            <p className="font-bold">Иван Иванов</p>
            <p className="text-sm text-[#A5A5A5]">ID34</p>
          </div>

          <div className="mt-2 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <CalendarDays size={15} className="text-desert" />
              <p className="text-[13px] font-medium text-[#4F4F4F]">
                21.05.2002
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Phone size={15} className="text-desert" />
              <p className="text-[13px] font-medium text-[#4F4F4F]">
                +998 99 999 99 99
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
        <p className="text-[15px] font-semibold">Данные:</p>

        <div className="mt-3 grid grid-cols-2 gap-x-[25px]">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray">Верхняя одежда</p>
            <p className="tex-[13px] font-medium">47</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray">Нижняя одежда</p>
            <p className="tex-[13px] font-medium">20</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray">Обувь</p>
            <p className="tex-[13px] font-medium">40</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray">Вес</p>
            <p className="tex-[13px] font-medium">100</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray">Рост</p>
            <p className="tex-[13px] font-medium">1.7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
