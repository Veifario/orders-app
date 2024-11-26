import { useState } from "react";

import ImageInput from "@/components/ui/Input/ImageInput";
import CounterInput from "@/components/ui/Input/CounterInput";
import TextInput from "@/components/ui/Input/TextInput";
import PriceInput from "@/components/ui/Input/PriceInput";
import ClientCard from "@/components/shared/ClientCard/ClientCard";
import Select from "@/components/ui/Select/Select";
import Button from "@/components/ui/Button/Button";

const AddOrder = () => {
  const [formData, setFormData] = useState({
    amount: 1,
    imageUrl: "",
    receiptUrl: "",
    arrivalPrice: "0",
    soldPrice: "0",
    client: {
      label: "",
      value: "",
    },
  });

  const handleCreate = () => {};

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
        <Select
          label="Mijoz"
          placeholder="Mijozni tanlang"
          isSearchable
          value={formData.client}
          onChange={(client) =>
            setFormData((prevState) => ({ ...prevState, client }))
          }
          options={[
            { label: "hey0", value: "0" },
            { label: "hey1", value: "1" },
            { label: "hey2", value: "2" },
            { label: "hey3", value: "3" },
            { label: "hey4", value: "4" },
            { label: "hey5", value: "5" },
            { label: "hey6", value: "6" },
            { label: "hey7", value: "7" },
            { label: "hey8", value: "8" },
            { label: "hey9", value: "9" },
            { label: "hey10", value: "10" },
            { label: "hey11", value: "11" },
            { label: "hey12", value: "12" },
            { label: "hey13", value: "13" },
            { label: "hey14", value: "14" },
            { label: "hey15", value: "15" },
            { label: "hey16", value: "16" },
            { label: "hey17", value: "17" },
            { label: "hey18", value: "18" },
            { label: "hey19", value: "19" },
          ]}
        />

        <ClientCard />

        <Button onClick={handleCreate}>Yaratish</Button>
      </div>
    </div>
  );
};

export default AddOrder;
