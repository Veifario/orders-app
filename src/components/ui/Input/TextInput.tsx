import { cloneElement, InputHTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  icon?: ReactElement;
}

const TextInput = ({ label, className, icon, ...props }: ITextInputProps) => {
  const renderIcon = () => {
    if (!icon) return null;
    return cloneElement(icon, {
      className: "absolute left-4 top-1/2 -translate-y-1/2 text-desert",
      size: 18,
    });
  };

  return (
    <div>
      {label && (
        <label className="mb-3 block text-xs font-medium text-gray">
          {label}
        </label>
      )}

      <div className="relative">
        {renderIcon()}

        <input
          type="text"
          className={twMerge(
            "w-full rounded-xl border-none px-4 py-[14px] text-sm outline-none bg-white min-h-[48px]",
            "placeholder:font-light",
            icon && "pl-[45px]",
            className,
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default TextInput;
