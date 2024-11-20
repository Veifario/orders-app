import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button
      className="w-full rounded-xl border-none bg-primary py-[19px] text-sm font-bold text-white outline-none"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
