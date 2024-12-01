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

  filter = createAsyncThunk(
    `${this.type}/filter`,
    async (filters: { birthday?: string; search?: string }, thunkApi) => {
      try {
        const response: AxiosResponse<CustomerType[]> = await mainInstance.post(
          `/users/filter`,
          filters,
        );
        return response.data;
      } catch (error: any) {
        toastErrorHandler(error);
        return thunkApi.rejectWithValue(error);
      }
    },
  );

  getOne = createAsyncThunk(
    `${this.type}/getOne`,
    async (customerId: string, thunkApi) => {
      try {
        const response: AxiosResponse<CustomerType> = await mainInstance.get(
          `/users-info/${customerId}`,
          { signal: thunkApi.signal },
        );
        return response.data;
      } catch (error: any) {
        toastErrorHandler(error);
        return thunkApi.rejectWithValue(error);
      }
    },
  );

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

  edit = createAsyncThunk(
    `${this.type}/edit`,
    async (
      {
        customerId,
        data,
      }: { customerId: string; data: CustomerCreateRequestBody },
      thunkApi,
    ) => {
      try {
        await mainInstance.put(`/users-info/${customerId}`, data);
      } catch (error: any) {
        toastErrorHandler(error);
        return thunkApi.rejectWithValue(error);
      }
    },
  );
}

export const customersThunk = Object.freeze(new CustomersThunk());
