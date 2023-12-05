import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./features/cart/add-to-cart";
import updateCartReducer from "./features/cart/update-cart";

export const store = configureStore({
  reducer: {
    addToCartReducer,
    updateCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
