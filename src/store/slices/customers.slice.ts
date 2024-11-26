import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { customersThunk } from "../thunks/customers.thunk";
import { CustomerType } from "@/types/customers.types";

type InitialStateType = {
  customersList: {
    data: CustomerType[];
    isLoading: boolean;
  };
};

const initialState: InitialStateType = {
  customersList: {
    data: [],
    isLoading: false,
  },
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(customersThunk.getAll.pending, (state) => {
        state.customersList.isLoading = true;
      })
      .addCase(customersThunk.getAll.rejected, (state) => {
        state.customersList.isLoading = false;
      })
      .addCase(
        customersThunk.getAll.fulfilled,
        (state, { payload }: PayloadAction<CustomerType[]>) => {
          state.customersList.data = payload;
          state.customersList.isLoading = false;
        },
      );
  },
});

export default customersSlice.reducer;
