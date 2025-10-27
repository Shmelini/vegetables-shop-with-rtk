import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./ProductsThunk";
import type { Product } from "../types/types";

type ProductsState = {
  products: Product[];
  isLoading: boolean;
  error: string | null | unknown;
};

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    (builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }));
  },
});

export const {} = ProductsSlice.actions;
export default ProductsSlice.reducer;
