import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { customersThunk } from "../thunks/customers.thunk";
import { CustomerType } from "@/types/customers.types";

type InitialStateType = {
  customersList: {
    data: CustomerType[];
    isLoading: boolean;
  };
  certainCustomer: {
    data: CustomerType | null;
    isLoading: boolean;
  };
};

const initialState: InitialStateType = {
  customersList: {
    data: [],
    isLoading: false,
  },
  certainCustomer: {
    data: null,
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

    builder
      .addCase(customersThunk.filter.pending, (state) => {
        state.customersList.isLoading = true;
      })
      .addCase(customersThunk.filter.rejected, (state) => {
        state.customersList.isLoading = false;
      })
      .addCase(
        customersThunk.filter.fulfilled,
        (state, { payload }: PayloadAction<CustomerType[]>) => {
          state.customersList.data = payload;
          state.customersList.isLoading = false;
        },
      );

    builder
      .addCase(customersThunk.getOne.pending, (state) => {
        state.certainCustomer.isLoading = true;
      })
      .addCase(customersThunk.getOne.rejected, (state) => {
        state.certainCustomer.isLoading = false;
      })
      .addCase(
        customersThunk.getOne.fulfilled,
        (state, { payload }: PayloadAction<CustomerType>) => {
          state.certainCustomer.data = payload;
          state.certainCustomer.isLoading = false;
        },
      );
  },
});

export default customersSlice.reducer;
