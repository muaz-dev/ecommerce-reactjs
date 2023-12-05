import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemInCart {
  value: boolean;
}

const initialState: ItemInCart = {
  value: true,
};

export const updateCart = createSlice({
  name: "updateCart",
  initialState,
  reducers: {
    update: (state) => {
      state.value = !state.value;
    },
  },
});

export const { update } = updateCart.actions;
export default updateCart.reducer;
