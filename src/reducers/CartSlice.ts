import { createSlice } from "@reduxjs/toolkit";
import type { CartProductType } from "../types/types";

type CartType = {
  cart: CartProductType[];
};

const initialState: CartType = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product, count } = action.payload;
      const addedProduct = { ...product, count };
      if (!state.cart.some((item) => item.id === product.id)) {
        state.cart = [...state.cart, addedProduct];
      } else {
        const updatedCart = state.cart.map((item) => {
          if (item.id === product.id) {
            addedProduct.count += item.count;
            return addedProduct;
          } else {
            return item;
          }
        });
        state.cart = updatedCart;
      }
    },
    changeCount(state, action) {
      const { product, increase } = action.payload;
      const updatedCart = state.cart
        .map((item) => {
          if (item.id === product.id) {
            const newCount = increase
              ? item.count + 1
              : Math.max(0, item.count - 1);
            return { ...item, count: newCount };
          }
          return item;
        })
        .filter((item) => item.count > 0);
      state.cart = updatedCart;
    },
  },
});

export const { addToCart, changeCount } = CartSlice.actions;

export default CartSlice.reducer;
