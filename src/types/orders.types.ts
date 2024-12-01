import { StatusNameType, StatusType } from "./global.types";

export type OrderStatType = {
  id: 1;
  name: string;
  key: StatusNameType;
  created_at: null;
  updated_at: null;
  orders_count: 1;
};

export type OrderType = {
  id: number;
  user_id: number;
  creator_id: number;
  status_id: number;
  count: number;
  price_arrival: string;
  price_sell: string;
  total: string;
  total_1: string | null;
  total_2: string | null;
  name: string;
  country_id: number;
  payment_id: number;
  payment_id_2: number;
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
  total_1: number;
  total_2: number;
  name: string;
  country_id: number;
  payment_id: number;
  payment_id_2: number;
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
