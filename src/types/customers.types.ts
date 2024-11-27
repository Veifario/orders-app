import { OrderType } from "./orders.types";

export type CustomerType = {
  id: number;
  full_name: string;
  phone: string;
  birthday: string;
  upper_clothes_size: string;
  lower_clothes_size: string;
  weight: number;
  shoe_size: string;
  height: number;
  created_at: string;
  updated_at: string;
  orders: Omit<OrderType, "user">[];
  total_amount: number;
};

export type CustomerCreateRequestBody = {
  phone: string;
  full_name: string;
  birthday: string;
  upper_clothing_size: string;
  lower_clothing_size: string;
  shoe_size: string;
  weight: number;
  height: number;
};
