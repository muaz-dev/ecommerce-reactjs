import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  category: string;
  name: string;
  price: number | string;
  packages: Package[];
  features: string[];
  colors: Color[];
  sizes: Size[];
  image: string;
  reviews: Review;
  description: string;
  specs: string[];
  details: string;
}

interface Package {
  name: string;
  inStock: boolean;
  price: number;
}

interface Color {
  name: string;
  class: string;
  selectedClass: string;
}

interface Size {
  name: string;
  inStock: boolean;
  price: number;
}

interface Review {
  href: string;
  average: number;
  totalCount: number;
}

interface CartItem {
  product: Product;
  color: Color | null;
  size: Size | null;
  package: Package | string;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const itemToPurchased = createSlice({
  name: "purchasedItems",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<any[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addItems } = itemToPurchased.actions;
export default itemToPurchased.reducer;
