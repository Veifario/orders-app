import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { OrderStatType, OrderType } from "@/types/orders.types";
import { ordersThunk } from "../thunks/orders.thunk";

type InitialStateType = {
  stats: {
    data: OrderStatType[];
    isLoading: boolean;
  };
  historyList: {
    data: OrderType[];
    isLoading: boolean;
  };
};

const initialState: InitialStateType = {
  stats: {
    data: [],
    isLoading: false,
  },
  historyList: {
    data: [],
    isLoading: false,
  },
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ordersThunk.getStats.pending, (state) => {
        state.stats.isLoading = true;
      })
      .addCase(ordersThunk.getStats.rejected, (state) => {
        state.stats.isLoading = false;
      })
      .addCase(
        ordersThunk.getStats.fulfilled,
        (state, { payload }: PayloadAction<OrderStatType[]>) => {
          state.stats.data = payload;
          state.stats.isLoading = false;
        },
      );

    builder
      .addCase(ordersThunk.getAll.pending, (state) => {
        state.historyList.isLoading = true;
      })
      .addCase(ordersThunk.getAll.rejected, (state) => {
        state.historyList.isLoading = false;
      })
      .addCase(
        ordersThunk.getAll.fulfilled,
        (state, { payload }: PayloadAction<OrderType[]>) => {
          state.historyList.data = payload;
          state.historyList.isLoading = false;
        },
      );
  },
});

export default ordersSlice.reducer;
