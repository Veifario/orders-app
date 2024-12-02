import { Dispatch, SetStateAction, useMemo } from "react";
import { useAppSelector } from "@/hooks/redux";

import CustomerCard from "@/components/shared/CustomerCard/CustomerCard";
import CounterInput from "@/components/ui/Input/CounterInput";
import ImageInput from "@/components/ui/Input/ImageInput";
import PriceInput from "@/components/ui/Input/PriceInput";
import TextInput from "@/components/ui/Input/TextInput";
import Select from "@/components/ui/Select/Select";

import { digitsRegex } from "@/constants/regex";

import { EditOrderFormType } from "./editOrder.types";
import { CustomerType } from "@/types/customers.types";
import { OrderType } from "@/types/orders.types";

interface IFormProps {
  orderData: OrderType | null;
  formData: EditOrderFormType;
  setFormData: Dispatch<SetStateAction<EditOrderFormType>>;
}

const Form = ({ orderData, formData, setFormData }: IFormProps) => {
  const { data: customersList, isLoading: isCustomersLoading } = useAppSelector(
    (state) => state.customers.customersList,
  );
  const {
    countries,
    paymentMethods,
    stats: { data: statsList, isLoading: isStatsLoading },
  } = useAppSelector((state) => state.orders);

  const statusesOptions = useMemo(
    () => statsList.map((e) => ({ label: e.name, value: e.id })),
    [statsList],
  );
  const customersOptions = useMemo(
    () => customersList.map((e) => ({ label: e.full_name, value: e.id })),
    [customersList],
  );
  const countriesOptions = useMemo(
    () => countries.map((e) => ({ label: e.name, value: e.id })),
    [countries],
  );
  const paymentMethodsOptions = useMemo(
    () => paymentMethods.map((e) => ({ label: e.name, value: e.id })),
    [paymentMethods],
  );

  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-3">
      <div className="col-span-2 space-y-3">
        <Select
          label="Davlat"
          placeholder="Davlatni tanlang"
          value={formData.country}
          onChange={(country) =>
            setFormData((prevState) => ({ ...prevState, country }))
          }
          options={countriesOptions}
        />

        <Select
          label="Mijoz"
          placeholder="Mijozni tanlang"
          isSearchable
          value={formData.customer}
          onChange={(customer) =>
            setFormData((prevState) => ({ ...prevState, customer }))
          }
          disabled={isCustomersLoading}
          options={customersOptions}
        />

        {customersList.find(
          (customer) => customer.id === +formData.customer.value,
        ) && (
          <CustomerCard
            customer={
              customersList.find(
                (customer) => customer.id === +formData.customer.value,
              ) as CustomerType
            }
          />
        )}

        <TextInput
          label="Mahsulot nomi"
          placeholder="Mahsulot nomi"
          value={formData.name}
          onChange={(event) =>
            setFormData((prevState) => ({
              ...prevState,
              name: event.target.value,
            }))
          }
        />
      </div>

      <Select
        label="Naqd pul"
        placeholder="To'lov"
        value={formData.paymentMethod1}
        onChange={(paymentMethod) =>
          setFormData((prevState) => ({
            ...prevState,
            paymentMethod1: paymentMethod,
          }))
        }
        options={paymentMethodsOptions.slice(0, 2)}
      />

      <Select
        label="Online"
        placeholder="To'lov"
        value={formData.paymentMethod2}
        onChange={(paymentMethod) =>
          setFormData((prevState) => ({
            ...prevState,
            paymentMethod2: paymentMethod,
          }))
        }
        options={paymentMethodsOptions.slice(2, 4)}
      />

      <TextInput
        label="Olingan pul"
        placeholder="Olingan pul"
        pattern="[0-9]*"
        inputMode="numeric"
        value={formData.total1}
        onChange={(event) =>
          setFormData((prevState) => ({
            ...prevState,
            total1: +event.target.value.replace(digitsRegex, ""),
          }))
        }
      />

      <TextInput
        label="Olingan pul"
        placeholder="Olingan pul"
        pattern="[0-9]*"
        inputMode="numeric"
        value={formData.total2}
        onChange={(event) =>
          setFormData((prevState) => ({
            ...prevState,
            total2: +event.target.value.replace(digitsRegex, ""),
          }))
        }
      />

      <div className="col-span-2">
        <Select
          label="Status"
          placeholder="Statusni tanlang"
          className="border-2 border-[#EDE5CA]"
          value={formData.status}
          onChange={(status) =>
            setFormData((prevState) => ({
              ...prevState,
              status: status,
            }))
          }
          options={statusesOptions}
          disabled={isStatsLoading}
        />
      </div>

      <PriceInput
        label="Kelish narxi"
        value={formData.arrivalPrice}
        onChange={(arrivalPrice) =>
          setFormData((prevState) => ({
            ...prevState,
            arrivalPrice,
          }))
        }
      />

      <PriceInput
        label="Sotiladigan narxi"
        value={formData.soldPrice}
        onChange={(soldPrice) =>
          setFormData((prevState) => ({
            ...prevState,
            soldPrice,
          }))
        }
      />

      <CounterInput
        label="Tovar miqdori"
        value={formData.amount}
        onChange={(amount) =>
          setFormData((prevState) => ({
            ...prevState,
            amount: amount,
          }))
        }
      />

      <PriceInput
        label="Yakuniy summa"
        value={formData.soldPrice * formData.amount}
        disabled
      />

      <ImageInput
        label="Mahsulotni rasimi"
        previewUrl={orderData?.media[0]?.path}
        value={formData.imageUrl}
        onChange={(id) =>
          setFormData((prevState) => ({
            ...prevState,
            imageUrl: String(id),
          }))
        }
      />

      <ImageInput
        label="To'lov cheki"
        previewUrl={orderData?.media[1]?.path}
        value={formData.receiptUrl}
        onChange={(id) =>
          setFormData((prevState) => ({
            ...prevState,
            receiptUrl: String(id),
          }))
        }
      />
    </div>
  );
};

export default Form;
