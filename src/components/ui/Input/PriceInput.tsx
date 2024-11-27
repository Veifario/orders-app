import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { digitsRegex } from "@/constants/regex";

interface IPriceInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;

  onChange?: (value: number) => void;
}

const PriceInput = ({ label, onChange, ...props }: IPriceInputProps) => {
  return (
    <div>
      {label && (
        <label className="mb-3 block text-xs font-medium text-gray">
          {label}
        </label>
      )}

      <div className={twMerge("relative")}>
        <input
          pattern="[0-9]*"
          inputMode="numeric"
          className={twMerge(
            "w-full rounded-xl border-none p-4 py-[14px] text-sm font-medium outline-none",
            "placeholder:font-light",
            "disabled:bg-[#EDE5CA]",
          )}
          onChange={(event) =>
            onChange && onChange(+event.target.value.replace(digitsRegex, ""))
          }
          {...props}
        />

        <span
          className={twMerge(
            "absolute right-4 top-1/2 flex h-[50%] -translate-y-1/2 items-center border-l-2 border-[#B0B0B0A6] bg-transparent pl-3 text-sm text-desert",
            props.disabled && "text-black",
          )}
        >
          $
        </span>
      </div>
    </div>
  );
};

export default PriceInput;
