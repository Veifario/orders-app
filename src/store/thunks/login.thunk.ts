import { createAsyncThunk } from "@reduxjs/toolkit";

import { mainInstance } from "@/services/config";
import { toastErrorHandler } from "@/utils/toastErrorHandler";
import { LoginResponseType } from "@/types/login.types";

class LoginThunk {
  private type = "login-thunk";

  login = createAsyncThunk(
    `${this.type}/login`,
    async (payload: { phone: string; password: string }, thunkApi) => {
      try {
        const response: { data: LoginResponseType } = await mainInstance.post(
          `/login`,
          payload,
        );
        return response.data;
      } catch (error: any) {
        toastErrorHandler(error);
        return thunkApi.rejectWithValue(error);
      }
    },
  );
}

export const loginThunk = Object.freeze(new LoginThunk());
