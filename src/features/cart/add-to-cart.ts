import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemInCart {
  value: number;
}

const initialState: ItemInCart = {
  value: 0,
};

export const addToCart = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = addToCart.actions;
export default addToCart.reducer;
