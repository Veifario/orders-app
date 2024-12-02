import { upload } from "@/services/upload";
import { X } from "lucide-react";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";

interface IImageInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value: string;

  label?: string;
  previewUrl?: string;

  onChange: (id: number) => void;
}

const ImageInput = ({
  value,
  label,
  onChange,
  previewUrl,
  ...props
}: IImageInputProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    value || null,
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value === "") setSelectedImage(null);
  }, [value]);
  useEffect(() => {
    if (previewUrl)
      setSelectedImage("https://azza.elmurod.tech/storage/" + previewUrl);
  }, [previewUrl]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    upload(file).then(({ data }) => {
      onChange(data.media_id);
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file[0]);
    }
  };
  const handleRemoveImage = () => {
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
        accept=".jpg, .jpeg, .png"
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
              onClick={handleRemoveImage}
            >
              <X size={16} className="text-gray" />
            </button>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-center text-sm font-medium text-[#A3A3A3]">
              Suratlarni yuklang
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageInput;
