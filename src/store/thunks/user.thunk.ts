import { AxiosResponse } from "axios";

import { mainInstance } from "@/services/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { toastErrorHandler } from "@/utils/toastErrorHandler";
import { UserType } from "@/types/user.types";

class UserThunk {
  private type = "user-thunk";

  getUserInfo = createAsyncThunk(
    `${this.type}/getUserInfo`,
    async (__, thunkApi) => {
      try {
        const response: AxiosResponse<UserType> = await mainInstance.get(
          `/profile`,
          { signal: thunkApi.signal },
        );
        return response.data;
      } catch (error: any) {
        toastErrorHandler(error);
        return thunkApi.rejectWithValue(error);
      }
    },
  );
}

export const userThunk = Object.freeze(new UserThunk());
