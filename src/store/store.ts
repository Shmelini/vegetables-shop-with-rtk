import { configureStore, combineReducers } from "@reduxjs/toolkit";
import products from "../reducers/ProductsSlice";
import cart from "../reducers/CartSlice";

const rootReducer = combineReducers({ products, cart });
export const store = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
