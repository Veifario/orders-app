import { SelectOptionType } from "@/types/global.types";

interface IOptionsContainerProps {
  options: SelectOptionType[];
  setOption: (option: SelectOptionType) => void;
}

const OptionsContainer = ({ options, setOption }: IOptionsContainerProps) => {
  return (
    <ul className="absolute z-[1000] max-h-28 w-full divide-y divide-[#EFEFEF] overflow-y-auto rounded-xl border border-[#EFEFEF] bg-white">
      {!!options.length ? (
        options.map((option) => (
          <li
            key={option.value}
            className="cursor-pointer p-4 py-2 text-sm"
            onClick={() => setOption(option)}
          >
            {option.label}
          </li>
        ))
      ) : (
        <li className="p-4 py-3 text-center text-sm text-gray">Topilmadi</li>
      )}
    </ul>
  );
};

export default OptionsContainer;
