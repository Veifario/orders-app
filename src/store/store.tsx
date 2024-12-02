import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CustomersSlice from "./slices/customers.slice";
import OrdersSlice from "./slices/orders.slice";
import UserSlice from "./slices/user.slice";
import BirthdaysSlice from "./slices/birthdays.slice";

const rootReducer = combineReducers({
  customers: CustomersSlice,
  orders: OrdersSlice,
  birthdays: BirthdaysSlice,
  user: UserSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: false,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
