import { twMerge } from "tailwind-merge";

interface ITextInputProps {
  label?: string;
}

const TextInput = ({ label, ...props }: ITextInputProps) => {
  return (
    <div>
      {label && (
        <label className="text-xs font-medium text-gray">{label}</label>
      )}

      <input
        type="text"
        className={twMerge(
          "w-full rounded-xl border-none px-4 py-[19px] text-sm outline-none",
          "placeholder:font-light",
          label && "mt-3",
        )}
        {...props}
      />
    </div>
  );
};

export default TextInput;
