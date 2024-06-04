import { createSlice } from "@reduxjs/toolkit";
import { TCategory, Tloadings } from "../../types";
import actGetProducts from "./thunk/Getproducts";

interface IProductsState {
  records: TCategory[];
  loading: Tloadings;
  error: string | null;
}

const initialState: IProductsState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
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

export { actGetProducts };
export default categoriesSlice.reducer;
