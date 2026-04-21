import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./productThunks";

const productSlice = createSlice({
  name: "products",

  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        const { id, data } = action.payload;

        const index = state.items.findIndex(
          (item) => item.id === id
        );

        if (index !== -1) {
          state.items[index] = {
            ...state.items[index],
            ...data,
          };
        }
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        );
      });
  },
});

export default productSlice.reducer;