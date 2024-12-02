import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { mainInstance } from "@/services/config";
import { toastErrorHandler } from "@/utils/toastErrorHandler";

import { BirthdayType } from "@/types/birthday.types";

class BirthdaysThunk {
  private type = "birthdays-thunk";

  getAll = createAsyncThunk(`${this.type}/getAll`, async (__, thunkApi) => {
    try {
      const response: AxiosResponse<BirthdayType[]> = await mainInstance.get(
        `/users/today-birthday`,
        { signal: thunkApi.signal },
      );
      return response.data;
    } catch (error: any) {
      toastErrorHandler(error);
      return thunkApi.rejectWithValue(error);
    }
  });
}

export const birthdaysThunk = Object.freeze(new BirthdaysThunk());
