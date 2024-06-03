import { createSlice } from "@reduxjs/toolkit";
import { TProduct, Tloadings } from "../../types";
import GetProducts from "./thunk/Getproducts";

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

const productsSclices = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetProducts.fulfilled, (state, action) => {
      state.loading = "idle";
      state.records = action.payload;
    });
    builder.addCase(GetProducts.rejected, (state, action) => {
      state.loading = "loading";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export default productsSclices;
