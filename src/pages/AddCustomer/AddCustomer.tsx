import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "@/hooks/redux";

import CounterInput from "@/components/ui/Input/CounterInput";
import TextInput from "@/components/ui/Input/TextInput";
import Button from "@/components/ui/Button/Button";
import DoubleInput from "@/components/ui/Input/DoubleInput";

import { phoneNumberRegex } from "@/constants/regex";

import { customersThunk } from "@/store/thunks/customers.thunk";
import { toast } from "react-toastify";

const AddCustomer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    phone: "",
    upWear: "",
    downWear: "",
    weight: 0,
    height: 0,
    shoeSize: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = () => {
    setIsLoading(true);
    dispatch(
      customersThunk.create({
        full_name: formData.fullName,
        birthday: formData.dateOfBirth,
        height: formData.height,
        lower_clothing_size: formData.downWear,
        phone: formData.phone,
        shoe_size: String(formData.shoeSize),
        upper_clothing_size: formData.upWear,
        weight: formData.weight,
      }),
    )
      .unwrap()
      .then(() => {
        navigate("/customers");
        toast.success(`Mijoz ${formData.fullName}, yaratilgan`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const disabled =
    formData.shoeSize === 0 ||
    formData.fullName === "" ||
    formData.dateOfBirth === "";

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
        inputMode="numeric"
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

      <div className="col-span-2 mt-4 space-y-[14px]">
        <Button loading={isLoading} disabled={disabled} onClick={handleCreate}>
          Yaratish
        </Button>
      </div>
    </div>
  );
};

export default AddCustomer;
