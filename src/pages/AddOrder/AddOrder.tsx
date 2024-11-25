import { useState } from "react";

import ImageInput from "@/components/ui/Input/ImageInput";
import CounterInput from "@/components/ui/Input/CounterInput";
import TextInput from "@/components/ui/Input/TextInput";
import PriceInput from "@/components/ui/Input/PriceInput";
import ClientCard from "@/components/shared/ClientCard/ClientCard";

const AddOrder = () => {
  const [formData, setFormData] = useState({
    amount: 1,
    imageUrl: "",
    receiptUrl: "",
    arrivalPrice: "0",
    soldPrice: "0",
  });

  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-3">
      <div className="col-span-2">
        <TextInput label="Название товара" placeholder="Название товара" />
      </div>

      <ImageInput label="Фотография" />

      <ImageInput label="Чек оплаты" />

      <PriceInput
        label="Цена прихода"
        value={formData.arrivalPrice}
        onChange={(event) =>
          setFormData((prevState) => ({
            ...prevState,
            arrivalPrice: event.target.value,
          }))
        }
      />

      <PriceInput
        label="Цена продажная"
        value={formData.soldPrice}
        onChange={(event) =>
          setFormData((prevState) => ({
            ...prevState,
            soldPrice: event.target.value,
          }))
        }
      />

      <CounterInput
        label="Количество"
        value={formData.amount}
        onChange={(amount) =>
          setFormData((prevState) => ({
            ...prevState,
            amount: amount,
          }))
        }
      />

      <PriceInput
        label="Итого"
        value={+formData.soldPrice * formData.amount}
        disabled
      />

      <div className="col-span-2 space-y-[14px]">
        <ClientCard />
        <ClientCard />
      </div>
    </div>
  );
};

export default AddOrder;
