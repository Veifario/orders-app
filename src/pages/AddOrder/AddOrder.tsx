import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import ImageInput from "@/components/ui/Input/ImageInput";
import CounterInput from "@/components/ui/Input/CounterInput";
import TextInput from "@/components/ui/Input/TextInput";
import PriceInput from "@/components/ui/Input/PriceInput";
import Select from "@/components/ui/Select/Select";
import Button from "@/components/ui/Button/Button";
import CustomerCard from "@/components/shared/CustomerCard/CustomerCard";

import { customersThunk } from "@/store/thunks/customers.thunk";
import { ordersThunk } from "@/store/thunks/orders.thunk";

import { CustomerType } from "@/types/customers.types";

const defaultFormData = {
  amount: 0,
  name: "",
  imageUrl: "",
  receiptUrl: "",
  arrivalPrice: 0,
  soldPrice: 0,
  customer: {
    label: "",
    value: "",
  },
  country: {
    label: "",
    value: "",
  },
  paymentMethod: {
    label: "",
    value: "",
  },
};

const AddOrder = () => {
  const dispatch = useAppDispatch();

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  const { data: customersList, isLoading } = useAppSelector(
    (state) => state.customers.customersList,
  );
  const { countries, paymentMethods } = useAppSelector((state) => state.orders);

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

  useEffect(() => {
    const customersPromise = dispatch(customersThunk.getAll());
    const countriesPromise = dispatch(ordersThunk.getCountries());
    const paymentPromise = dispatch(ordersThunk.getPaymentMethods());
    return () => {
      customersPromise.abort();
      countriesPromise.abort();
      paymentPromise.abort();
    };
  }, [dispatch]);

  const handleCreate = () => {
    setIsSubmitLoading(true);
    dispatch(
      ordersThunk.create({
        name: formData.name,
        status_id: 1,
        user_id: +formData.customer.value,
        count: formData.amount,
        country_id: +formData.country.value,
        media: [+formData.imageUrl, +formData.receiptUrl],
        payment_id: +formData.paymentMethod.value,
        price_arrival: formData.arrivalPrice,
        price_sell: formData.soldPrice,
        total: formData.soldPrice * formData.amount,
      }),
    )
      .unwrap()
      .then(() => {
        toast.success(`Buyurtma ${formData.name}, yaratilgan`);
        setFormData(defaultFormData);
      })
      .finally(() => {
        setIsSubmitLoading(false);
      });
  };

  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-3">
      <div className="col-span-2 space-y-3">
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
          label="To'lov turi"
          placeholder="To'lov turini tanlang"
          value={formData.paymentMethod}
          onChange={(paymentMethod) =>
            setFormData((prevState) => ({ ...prevState, paymentMethod }))
          }
          options={paymentMethodsOptions}
        />
      </div>

      <ImageInput
        label="Mahsulotni rasimi"
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
        value={formData.receiptUrl}
        onChange={(id) =>
          setFormData((prevState) => ({
            ...prevState,
            receiptUrl: String(id),
          }))
        }
      />

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

      <div className="col-span-2 space-y-[14px]">
        <Select
          label="Mijoz"
          placeholder="Mijozni tanlang"
          isSearchable
          value={formData.customer}
          onChange={(customer) =>
            setFormData((prevState) => ({ ...prevState, customer }))
          }
          disabled={isLoading}
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

        <Button loading={isSubmitLoading} onClick={handleCreate}>
          Yaratish
        </Button>
      </div>
    </div>
  );
};

export default AddOrder;
