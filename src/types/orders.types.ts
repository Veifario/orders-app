import { StatusType } from "./global.types";

export type OrderStatType = {
  id: number;
  name: string;
  orders_count: number;
};

export type OrderType = {
  id: number;
  user_id: number;
  status_id: number;
  count: number;
  price_arrival: string;
  price_sell: string;
  total: string;
  name: string;
  country_id: number;
  payment_id: number;
  created_at: string;
  updated_at: string;
  status: StatusType;
  user: {
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
  };
};

export type OrderCreateRequestBodyType = {
  user_id: number;
  status_id: number;
  count: number;
  price_arrival: number;
  price_sell: number;
  total: number;
  name: string;
  country_id: number;
  payment_id: number;
  media: number[];
};

export type CountryType = {
  id: number;
  name: string;
};

export type PaymentMethodType = {
  id: number;
  name: string;
};
