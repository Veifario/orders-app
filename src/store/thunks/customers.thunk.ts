import { AxiosResponse } from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { toastErrorHandler } from "@/utils/toastErrorHandler";
import { mainInstance } from "@/services/config";
import {
  CustomerCreateRequestBody,
  CustomerType,
} from "@/types/customers.types";

class CustomersThunk {
  private type = "customers-thunk";

  getAll = createAsyncThunk(`${this.type}/getAll`, async (__, thunkApi) => {
    try {
      const response: AxiosResponse<CustomerType[]> = await mainInstance.get(
        `/users/list`,
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
    async (payload: CustomerCreateRequestBody, thunkApi) => {
      try {
        await mainInstance.post(`/users-info`, payload);
      } catch (error: any) {
        toastErrorHandler(error);
        return thunkApi.rejectWithValue(error);
      }
    },
  );
}

export const customersThunk = Object.freeze(new CustomersThunk());
