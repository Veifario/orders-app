import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Checkbox = ({ className, ...props }: ICheckboxProps) => {
  return (
    <label className="relative flex cursor-pointer items-center">
      <input
        type="checkbox"
        className={twMerge(
          "relative h-6 w-6 cursor-pointer appearance-none rounded-full bg-[#F5F5F5] checked:bg-primary",
          className,
        )}
        {...props}
      />
      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8046 4.19526C14.0649 4.45561 14.0649 4.87772 13.8046 5.13807L7.13791 11.8047C6.87756 12.0651 6.45545 12.0651 6.1951 11.8047L2.86177 8.4714C2.60142 8.21106 2.60142 7.78894 2.86177 7.5286C3.12212 7.26825 3.54423 7.26825 3.80457 7.5286L6.6665 10.3905L12.8618 4.19526C13.1221 3.93491 13.5442 3.93491 13.8046 4.19526Z"
            fill="white"
          />
        </svg>
      </span>
    </label>
  );
};

export default Checkbox;
