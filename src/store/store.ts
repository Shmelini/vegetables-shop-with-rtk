import { configureStore, combineReducers } from "@reduxjs/toolkit";
import products from "../reducers/ProductsSlice";
import cart from "../reducers/CartSlice";

const rootReducer = combineReducers({ products, cart });
export const store = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
