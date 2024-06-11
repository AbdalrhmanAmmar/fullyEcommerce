import { createSlice } from "@reduxjs/toolkit";
import { TProduct, Tloadings } from "../../types";
import actGetProducts from "./thunk/Getproducts";

interface IProductsState {
  records: TProduct[];
  loading: Tloadings;
  error: string | null;
}

const initialState: IProductsState = {
  records: [],
  loading: "idle",
  error: null,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.records = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "idle";
      state.records = action.payload;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "loading";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const { productsCleanUp } = ProductsSlice.actions;
console.log(productsCleanUp);
export { actGetProducts };
export default ProductsSlice.reducer;
