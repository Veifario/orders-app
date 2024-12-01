import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import Button from "@/components/ui/Button/Button";
import SpinnerFullPage from "@/components/shared/SpinnerFullPage/SpinnerFullPage";
import Form from "./Form";

import { customersThunk } from "@/store/thunks/customers.thunk";

import { EditCustomerFormType } from "./editCustomer.types";

const defaultFormData: EditCustomerFormType = {
  fullName: "",
  dateOfBirth: "",
  phone: "",
  upWear: "",
  downWear: "",
  weight: 0,
  height: 0,
  shoeSize: 0,
};

const EditCustomer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { customerId } = useParams();

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [initialFormData, setInitialFormData] =
    useState<EditCustomerFormType>(defaultFormData);
  const [formData, setFormData] =
    useState<EditCustomerFormType>(defaultFormData);

  const { data: customerData, isLoading: isCustomerLoading } = useAppSelector(
    (state) => state.customers.certainCustomer,
  );

  useEffect(() => {
    const promise = dispatch(customersThunk.getOne(customerId || ""));
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    if (customerData) {
      const formData: EditCustomerFormType = {
        fullName: customerData.full_name,
        dateOfBirth: customerData.birthday,
        phone: customerData.phone,
        upWear: customerData.upper_clothes_size,
        downWear: customerData.lower_clothes_size,
        weight: customerData.weight,
        height: customerData.height,
        shoeSize: +customerData.shoe_size,
      };
      setFormData(formData);
      setInitialFormData(formData);
    }
  }, [customerData]);

  const handleEdit = () => {
    setIsSubmitLoading(true);
    dispatch(
      customersThunk.edit({
        customerId: customerId || "",
        data: {
          full_name: formData.fullName,
          birthday: formData.dateOfBirth,
          height: formData.height,
          lower_clothes_size: formData.downWear,
          phone: formData.phone,
          shoe_size: String(formData.shoeSize),
          upper_clothes_size: formData.upWear,
          weight: formData.weight,
        },
      }),
    )
      .unwrap()
      .then(() => {
        toast.success(`Mijoz ${formData.fullName}, tahrir qilingan`);
        navigate("/customers");
      })
      .finally(() => {
        setIsSubmitLoading(false);
      });
  };

  const isDisabled =
    formData.fullName === "" ||
    formData.dateOfBirth === "" ||
    formData.downWear === "" ||
    formData.upWear === "" ||
    formData.phone === "" ||
    formData.weight === 0 ||
    formData.height === 0 ||
    formData.shoeSize === 0;

  const isDirty = JSON.stringify(initialFormData) === JSON.stringify(formData);

  if (isCustomerLoading) return <SpinnerFullPage wrapperClassName="h-full" />;
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

export default EditCustomer;
