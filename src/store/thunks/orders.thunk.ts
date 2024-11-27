import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { mainInstance } from "@/services/config";
import { toastErrorHandler } from "@/utils/toastErrorHandler";

import {
  CountryType,
  OrderCreateRequestBodyType,
  OrderStatType,
  OrderType,
  PaymentMethodType,
} from "@/types/orders.types";

class OrdersThunk {
  private type = "orders-thunk";

  getStats = createAsyncThunk(`${this.type}/getStats`, async (__, thunkApi) => {
    try {
      const response: AxiosResponse<OrderStatType[]> = await mainInstance.get(
        `/orders/status-count`,
        { signal: thunkApi.signal },
      );
      return response.data;
    } catch (error: any) {
      toastErrorHandler(error);
      return thunkApi.rejectWithValue(error);
    }
  });

  getAll = createAsyncThunk(`${this.type}/getAll`, async (__, thunkApi) => {
    try {
      const response: AxiosResponse<OrderType[]> = await mainInstance.get(
        `/orders/list`,
        { signal: thunkApi.signal },
      );
      return response.data;
    } catch (error: any) {
      toastErrorHandler(error);
      return thunkApi.rejectWithValue(error);
    }
  });

  create = createAsyncThunk(
    `${this.type}/create`,
    async (payload: OrderCreateRequestBodyType, thunkApi) => {
      try {
        await mainInstance.post(`/orders`, payload);
      } catch (error: any) {
        toastErrorHandler(error);
        return thunkApi.rejectWithValue(error);
      }
    },
  );

  getCountries = createAsyncThunk(
    `${this.type}/getCountries`,
    async (__, thunkApi) => {
      try {
        const response: AxiosResponse<CountryType[]> = await mainInstance.get(
          `/country/list`,
          { signal: thunkApi.signal },
        );
        return response.data;
      } catch (error: any) {
        toastErrorHandler(error);
        return thunkApi.rejectWithValue(error);
      }
    },
  );

  getPaymentMethods = createAsyncThunk(
    `${this.type}/getPaymentMethods`,
    async (__, thunkApi) => {
      try {
        const response: AxiosResponse<PaymentMethodType[]> =
          await mainInstance.get(`/payment-type/list`, {
            signal: thunkApi.signal,
          });
        return response.data;
      } catch (error: any) {
        toastErrorHandler(error);
        return thunkApi.rejectWithValue(error);
      }
    },
  );
}

export const ordersThunk = Object.freeze(new OrdersThunk());
