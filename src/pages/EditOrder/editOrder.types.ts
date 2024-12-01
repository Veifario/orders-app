import { SelectOptionType } from "@/types/global.types";

export type EditOrderFormType = {
  amount: number;
  name: string;
  imageUrl: string;
  receiptUrl: string;
  arrivalPrice: number;
  soldPrice: number;
  customer: SelectOptionType<string>;
  country: SelectOptionType<string>;
  paymentMethod1: SelectOptionType<string>;
  paymentMethod2: SelectOptionType<string>;
  total1: number;
  total2: number;
  status: SelectOptionType<number>;
};
