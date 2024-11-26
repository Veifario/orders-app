import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { mainInstance } from "@/services/config";
import { toastErrorHandler } from "@/utils/toastErrorHandler";

import { OrderStatType, OrderType } from "@/types/orders.types";

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
}

export const ordersThunk = Object.freeze(new OrdersThunk());
