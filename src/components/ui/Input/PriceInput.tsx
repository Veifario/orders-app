import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IPriceInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const PriceInput = ({ label, ...props }: IPriceInputProps) => {
  return (
    <div>
      {label && (
        <label className="mb-3 block text-xs font-medium text-gray">
          {label}
        </label>
      )}

      <div className={twMerge("relative")}>
        <input
          type="number"
          className={twMerge(
            "w-full rounded-xl border-none p-4 py-[14px] text-sm font-medium outline-none",
            "placeholder:font-light",
            "disabled:bg-[#EDE5CA]",
          )}
          {...props}
        />

        <span
          className={twMerge(
            "absolute right-4 top-1/2 flex h-[50%] -translate-y-1/2 items-center border-l-2 border-[#B0B0B0A6] bg-white pl-3 text-sm text-desert",
            props.disabled && "bg-[#EDE5CA] text-black",
          )}
        >
          $
        </span>
      </div>
    </div>
  );
};

export default PriceInput;
