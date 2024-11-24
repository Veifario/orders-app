import { Minus, Plus } from "lucide-react";
import { ChangeEvent, InputHTMLAttributes, useRef } from "react";

interface ICounterInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  value: number;
  onChange: (value: number) => void;
}

const CounterInput = ({
  label,
  value,
  onChange,
  ...props
}: ICounterInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIncrease = () => {
    if (inputRef.current) onChange(Math.min(100, +inputRef.current.value + 1));
  };
  const handleDecrease = () => {
    if (inputRef.current) onChange(Math.max(0, +inputRef.current.value - 1));
  };
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(Math.min(100, +event.target.value));
  };

  return (
    <div>
      {label && (
        <label className="mb-3 block text-xs font-medium text-gray">
          {label}
        </label>
      )}

      <div className="flex items-center justify-between rounded-xl bg-white p-4">
        <Minus size={16} className="text-desert" onClick={handleDecrease} />

        <input
          ref={inputRef}
          type="number"
          className="text-sm text-black outline-none"
          style={{ width: String(value).length * 9 - 0.5 + "px" }}
          value={value}
          onChange={handleChangeInput}
          {...props}
        />

        <Plus size={16} className="text-desert" onClick={handleIncrease} />
      </div>
    </div>
  );
};

export default CounterInput;
