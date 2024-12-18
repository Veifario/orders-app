import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ordersThunk } from "../thunks/orders.thunk";

import {
  CountryType,
  OrderStatType,
  OrderType,
  PaymentMethodType,
} from "@/types/orders.types";

type InitialStateType = {
  stats: {
    data: OrderStatType[];
    isLoading: boolean;
  };
  historyList: {
    data: OrderType[];
    isLoading: boolean;
  };
  certainOrder: {
    isLoading: boolean;
    data: null | OrderType;
  };
  countries: CountryType[];
  paymentMethods: PaymentMethodType[];
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
  certainOrder: {
    isLoading: false,
    data: null,
  },
  countries: [],
  paymentMethods: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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

    builder
      .addCase(ordersThunk.filter.pending, (state) => {
        state.historyList.isLoading = true;
      })
      .addCase(ordersThunk.filter.rejected, (state) => {
        state.historyList.isLoading = false;
      })
      .addCase(
        ordersThunk.filter.fulfilled,
        (state, { payload }: PayloadAction<OrderType[]>) => {
          state.historyList.data = payload;
          state.historyList.isLoading = false;
        },
      );

    builder
      .addCase(ordersThunk.getOne.pending, (state) => {
        state.certainOrder.isLoading = true;
      })
      .addCase(ordersThunk.getOne.rejected, (state) => {
        state.certainOrder.isLoading = false;
      })
      .addCase(
        ordersThunk.getOne.fulfilled,
        (state, { payload }: PayloadAction<OrderType>) => {
          state.certainOrder.data = payload;
          state.certainOrder.isLoading = false;
        },
      );

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

    builder.addCase(
      ordersThunk.getCountries.fulfilled,
      (state, { payload }: PayloadAction<CountryType[]>) => {
        state.countries = payload;
      },
    );

    builder.addCase(
      ordersThunk.getPaymentMethods.fulfilled,
      (state, { payload }: PayloadAction<PaymentMethodType[]>) => {
        state.paymentMethods = payload;
      },
    );
  },
});

export default ordersSlice.reducer;
