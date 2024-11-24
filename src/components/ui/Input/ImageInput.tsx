import { X } from "lucide-react";
import { InputHTMLAttributes, useRef, useState } from "react";

interface IImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const ImageInput = ({ label, ...props }: IImageInputProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {label && (
        <label className="mb-3 block text-xs font-medium text-gray">
          {label}
        </label>
      )}

      <input
        ref={inputRef}
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
        {...props}
      />

      <div
        className="relative h-[111px] rounded-xl bg-white p-[3px]"
        onClick={() => inputRef.current?.click()}
      >
        {selectedImage ? (
          <div className="h-full" onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Preview"
              className="h-full w-full rounded-xl object-cover"
            />

            <button
              className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-white"
              onClick={removeImage}
            >
              <X size={16} className="text-gray" />
            </button>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-center text-sm font-medium text-[#A3A3A3]">
              Загрузите фото
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageInput;
