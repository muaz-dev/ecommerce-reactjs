import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./features/cart/add-to-cart";

export const store = configureStore({
  reducer: {
    addToCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
