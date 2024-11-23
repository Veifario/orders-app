import Counter from "@/components/ui/Input/Counter";
import { useEffect, useState } from "react";

const AddOrder = () => {
  const [formData, setFormData] = useState({
    amount: 0,
  });

  useEffect(() => {
    console.log(formData.amount);
  }, [formData.amount]);

  return (
    <div>
      <Counter
        label="Количество"
        value={formData.amount}
        onChange={(amount) =>
          setFormData((prevState) => ({
            ...prevState,
            amount: amount,
          }))
        }
      />
    </div>
  );
};

export default AddOrder;
