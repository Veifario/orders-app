import { ChangeEvent, InputHTMLAttributes, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

import OptionsContainer from "./OptionsContainer";

import { useOnClickOutside } from "@/hooks/useOnClickOutside";

import { SelectOptionType } from "@/types/global.types";

interface ISelectProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value: SelectOptionType<any>;
  options: SelectOptionType<any>[];

  className?: string;
  label?: string;
  isSearchable?: boolean;

  onChange: (option: SelectOptionType<any>) => void;
}

const Select = ({
  label,
  value,
  options,
  isSearchable = false,
  className,
  onChange,
  ...props
}: ISelectProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const inputContainerRef = useRef<HTMLDivElement>(null);

  const [filteredOptions, setFilteredOptions] =
    useState<SelectOptionType<any>[]>(options);

  useOnClickOutside(inputContainerRef, () => {
    setIsDropdownVisible(false);
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isSearchable) return;
    onChange({ ...value, label: event.target.value });
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(event.target.value.toLowerCase()),
      ),
    );
  };
  const handleDropdown = () => {
    setIsDropdownVisible((prevState) => {
      if (!filteredOptions.length) {
        setFilteredOptions(options);
      }
      return !prevState;
    });
  };

  return (
    <>
      <div className="w-full">
        {label && (
          <label className="mb-3 block text-xs font-medium text-gray">
            {label}
          </label>
        )}

        <div
          className="relative"
          ref={inputContainerRef}
          onClick={handleDropdown}
        >
          <input
            type="text"
            className={twMerge(
              "w-full rounded-xl bg-white px-4 py-[14px] text-sm outline-none",
              className,
            )}
            value={value.label}
            onChange={(event) => handleChangeInput(event)}
            readOnly={!isSearchable}
            {...props}
          />

          <ChevronDown
            size={25}
            className={twMerge(
              "absolute right-4 top-1/2 -translate-y-1/2 text-lightGray",
              isDropdownVisible && "rotate-180",
            )}
          />

          {isDropdownVisible && (
            <OptionsContainer
              options={filteredOptions}
              setOption={(option) => onChange(option)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Select;
