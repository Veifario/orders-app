import { digitsRegex } from "@/constants/regex";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

interface IDoubleInputProps {
  valueOne: number;
  valueTwo: number;

  labelOne?: string;
  labelTwo?: string;

  onChangeOne: (value: number) => void;
  onChangeTwo: (value: number) => void;
}

const DoubleInput = ({
  labelOne,
  labelTwo,
  valueOne,
  valueTwo,
  onChangeOne,
  onChangeTwo,
}: IDoubleInputProps) => {
  const handleChangeInputOne = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeOne(Math.min(900, +event.target.value.replace(digitsRegex, "")));
  };
  const handleChangeInputTwo = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeTwo(Math.min(900, +event.target.value.replace(digitsRegex, "")));
  };

  return (
    <div>
      {labelOne && labelTwo && (
        <label className="mb-3 grid w-full grid-cols-2 text-xs font-medium text-gray">
          <span>{labelOne}</span>
          <span>{labelTwo}</span>
        </label>
      )}

      <div className="relative grid w-full grid-cols-2 rounded-xl bg-white px-4 py-[14px]">
        <input
          pattern="[0-9]*"
          inputMode="numeric"
          className={twMerge(
            "m-auto w-full border-none bg-transparent px-2 text-sm outline-none",
            "placeholder:font-light",
          )}
          value={valueOne}
          onChange={handleChangeInputOne}
        />

        <input
          pattern="[0-9]*"
          inputMode="numeric"
          className={twMerge(
            "m-auto w-full border-none bg-transparent px-2 text-sm outline-none",
            "placeholder:font-light",
          )}
          value={valueTwo}
          onChange={handleChangeInputTwo}
        />

        <div className="absolute left-1/2 top-1/2 h-[30px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-[#D5C38854]" />
      </div>
    </div>
  );
};

export default DoubleInput;
