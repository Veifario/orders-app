import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserType } from "@/types/user.types";
import { userThunk } from "../thunks/user.thunk";

type InitialStateType = {
  data: UserType | null;
};

const initialState: InitialStateType = {
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<UserType>) => {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      userThunk.getUserInfo.fulfilled,
      (state, { payload }: PayloadAction<UserType>) => {
        state.data = payload;
      },
    );
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
