import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json",
      );

      if (!response.ok) throw new Error("Server Error");
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
    }
  },
);
