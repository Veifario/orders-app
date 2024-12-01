import { Dispatch, SetStateAction } from "react";

import CounterInput from "@/components/ui/Input/CounterInput";
import TextInput from "@/components/ui/Input/TextInput";
import DoubleInput from "@/components/ui/Input/DoubleInput";

import { phoneNumberRegex } from "@/constants/regex";

import { EditCustomerFormType } from "./editCustomer.types";

interface IFormProps {
  formData: EditCustomerFormType;
  setFormData: Dispatch<SetStateAction<EditCustomerFormType>>;
}

const Form = ({ formData, setFormData }: IFormProps) => {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-3">
      <div className="col-span-2">
        <TextInput
          label="Ism Familiya"
          placeholder="Ism Familiya"
          value={formData.fullName}
          onChange={(event) =>
            setFormData((prevState) => ({
              ...prevState,
              fullName: event.target.value,
            }))
          }
        />
      </div>

      <TextInput
        label="Tug'ilgan sanasi"
        placeholder="Tug'ilgan sanasi"
        type="date"
        value={formData.dateOfBirth}
        onChange={(event) =>
          setFormData((prevState) => ({
            ...prevState,
            dateOfBirth: event.target.value,
          }))
        }
      />

      <TextInput
        label="Telefon raqami"
        placeholder="Telefon raqami"
        pattern="[0-9]*"
        inputMode="tel"
        value={formData.phone}
        onChange={(event) =>
          setFormData((prevState) => ({
            ...prevState,
            phone: event.target.value.replace(phoneNumberRegex, ""),
          }))
        }
      />

      <TextInput
        label="Ustki kiyim"
        placeholder="Ustki kiyim"
        value={formData.upWear}
        onChange={(event) =>
          setFormData((prevState) => ({
            ...prevState,
            upWear: event.target.value,
          }))
        }
      />

      <TextInput
        label="Shim"
        placeholder="Shim"
        value={formData.downWear}
        onChange={(event) =>
          setFormData((prevState) => ({
            ...prevState,
            downWear: event.target.value,
          }))
        }
      />

      <DoubleInput
        labelOne="Ogirlik"
        labelTwo="Bo'y"
        valueOne={formData.weight}
        valueTwo={formData.height}
        onChangeOne={(weight) =>
          setFormData((prevState) => ({
            ...prevState,
            weight,
          }))
        }
        onChangeTwo={(height) =>
          setFormData((prevState) => ({
            ...prevState,
            height,
          }))
        }
      />

      <CounterInput
        label="Oyoq kiyim o'lchami"
        value={formData.shoeSize}
        onChange={(shoeSize) =>
          setFormData((prevState) => ({
            ...prevState,
            shoeSize,
          }))
        }
      />
    </div>
  );
};

export default Form;
