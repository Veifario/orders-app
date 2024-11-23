import { Minus, Plus } from "lucide-react";
import { InputHTMLAttributes, useRef } from "react";

interface ICounterProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter = ({ label, value, onChange, ...props }: ICounterProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIncrease = () => {
    onChange(value + 1);
  };
  const handleDecrease = () => {
    onChange(Math.max(0, value - 1));
  };

  return (
    <div>
      {label && (
        <label className="mb-3 block text-xs font-medium text-gray">
          {label}
        </label>
      )}

      <div className="flex items-center justify-between rounded-xl bg-white p-[17px]">
        <Minus size={16} className="text-desert" onClick={handleDecrease} />

        <p className="text-sm text-black">{value}</p>

        <Plus size={16} className="text-desert" onClick={handleIncrease} />
      </div>

      <input
        readOnly
        ref={inputRef}
        type="number"
        className="hidden"
        value={value}
        {...props}
      />
    </div>
  );
};

export default Counter;
