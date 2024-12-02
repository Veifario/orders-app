import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BirthdayType } from "@/types/birthday.types";
import { birthdaysThunk } from "../thunks/birthdays.thunks";

type InitialStateType = {
  list: {
    data: BirthdayType[];
    isLoading: boolean;
  };
};

const initialState: InitialStateType = {
  list: {
    data: [],
    isLoading: false,
  },
};

const birthdaysSlice = createSlice({
  name: "birthdays",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(birthdaysThunk.getAll.pending, (state) => {
        state.list.isLoading = true;
      })
      .addCase(birthdaysThunk.getAll.rejected, (state) => {
        state.list.isLoading = false;
      })
      .addCase(
        birthdaysThunk.getAll.fulfilled,
        (state, { payload }: PayloadAction<BirthdayType[]>) => {
          state.list.data = payload;
          state.list.isLoading = false;
        },
      );
  },
});

export default birthdaysSlice.reducer;
