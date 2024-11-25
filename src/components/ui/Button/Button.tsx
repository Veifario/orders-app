import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  className?: string;
}

const Button = ({ children, className, ...props }: IButtonProps) => {
  return (
    <button
      className={twMerge(
        "w-full rounded-xl border-none bg-primary py-[14px] text-sm font-bold text-white outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
