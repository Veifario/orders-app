import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import Button from "@/components/ui/Button/Button";
import SpinnerFullPage from "@/components/shared/SpinnerFullPage/SpinnerFullPage";
import Form from "./Form";

import { customersThunk } from "@/store/thunks/customers.thunk";
import { ordersThunk } from "@/store/thunks/orders.thunk";

import { EditOrderFormType } from "./editOrder.types";

const defaultFormData: EditOrderFormType = {
  name: "",
  imageUrl: "",
  receiptUrl: "",
  amount: 0,
  arrivalPrice: 0,
  soldPrice: 0,
  total1: 0,
  total2: 0,
  customer: {
    label: "",
    value: "",
  },
  country: {
    label: "",
    value: "",
  },
  paymentMethod1: {
    label: "",
    value: "",
  },
  paymentMethod2: {
    label: "",
    value: "",
  },
  status: {
    label: "",
    value: 6,
  },
};

const EditOrder = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { orderId } = useParams();

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [initialFormData, setInitialFormData] =
    useState<EditOrderFormType>(defaultFormData);
  const [formData, setFormData] = useState<EditOrderFormType>(defaultFormData);

  const { data: customersList } = useAppSelector(
    (state) => state.customers.customersList,
  );
  const {
    countries,
    paymentMethods,
    certainOrder: { data: orderData, isLoading: isOrderLoading },
  } = useAppSelector((state) => state.orders);

  useEffect(() => {
    const customersPromise = dispatch(customersThunk.getAll());
    const countriesPromise = dispatch(ordersThunk.getCountries());
    const paymentPromise = dispatch(ordersThunk.getPaymentMethods());
    const orderPromise = dispatch(ordersThunk.getOne(orderId || ""));
    const statPromise = dispatch(ordersThunk.getStats());

    return () => {
      customersPromise.abort();
      countriesPromise.abort();
      paymentPromise.abort();
      orderPromise.abort();
      statPromise.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    if (orderData) {
      const formData: EditOrderFormType = {
        amount: orderData.count,
        name: orderData.name,
        imageUrl: "",
        receiptUrl: "",
        arrivalPrice: +orderData.price_arrival,
        soldPrice: +orderData.price_sell,
        customer: {
          label:
            customersList.find((el) => el.id === orderData.user_id)
              ?.full_name || "",
          value: String(orderData.user_id),
        },
        country: {
          label:
            countries.find((el) => el.id === orderData.country_id)?.name || "",
          value: String(orderData.country_id),
        },
        paymentMethod1: {
          label:
            paymentMethods.find((el) => el.id === orderData.payment_id)?.name ||
            "",
          value: String(orderData.payment_id),
        },
        paymentMethod2: {
          label:
            paymentMethods.find((el) => el.id === orderData.payment_id_2)
              ?.name || "",
          value: String(orderData.payment_id_2),
        },
        total1: orderData.total_1 ? +orderData.total_1 : 0,
        total2: orderData.total_2 ? +orderData.total_2 : 0,
        status: {
          label: orderData.status.name,
          value: orderData.status_id,
        },
      };
      setFormData(formData);
      setInitialFormData(formData);
    }
  }, [orderData]);

  const handleEdit = () => {
    setIsSubmitLoading(true);
    dispatch(
      ordersThunk.edit({
        orderId: orderId || "",
        data: {
          name: formData.name,
          status_id: formData.status.value,
          user_id: +formData.customer.value,
          count: formData.amount,
          country_id: +formData.country.value,
          media: [+formData.imageUrl, +formData.receiptUrl],
          payment_id: +formData.paymentMethod1.value,
          payment_id_2: +formData.paymentMethod2.value,
          price_arrival: formData.arrivalPrice,
          price_sell: formData.soldPrice,
          total: formData.soldPrice * formData.amount,
          total_1: +formData.total1,
          total_2: +formData.total2,
        },
      }),
    )
      .unwrap()
      .then(() => {
        toast.success(`Buyurtma ${formData.name}, tahrir qilingan`);
        navigate("/history");
      })
      .finally(() => {
        setIsSubmitLoading(false);
      });
  };

  const isDisabled =
    formData.name === "" ||
    formData.imageUrl === "" ||
    formData.receiptUrl === "" ||
    formData.arrivalPrice === 0 ||
    formData.soldPrice === 0 ||
    formData.amount === 0 ||
    formData.customer.value === "" ||
    formData.country.value === "";

  const isDirty = JSON.stringify(initialFormData) === JSON.stringify(formData);

  if (isOrderLoading) return <SpinnerFullPage wrapperClassName="h-full" />;
  return (
    <div>
      <Form formData={formData} setFormData={setFormData} />

      <Button
        className="mt-[14px] w-full"
        loading={isSubmitLoading}
        disabled={isDirty || isDisabled}
        onClick={handleEdit}
      >
        Tahrirlash
      </Button>
    </div>
  );
};

export default EditOrder;
