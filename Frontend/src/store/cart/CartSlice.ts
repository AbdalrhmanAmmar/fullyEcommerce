import { createSelector, createSlice } from "@reduxjs/toolkit";
import { TProduct, Tloadings } from "../../types";
import { RootState } from "..";
import { getCartQuantit } from "./Selectors/index";
import actgetproductsbyItem from "./thunk/actgetproductsbyItem";

interface Icart {
  items: { [key: number]: number };
  prodcutsFullInfo: TProduct[];
  loading: Tloadings;
  error: null | string;
}

const initialState: Icart = {
  items: {},
  prodcutsFullInfo: [],
  loading: "loading",
  error: null,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },

    changeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },
  },

  extraReducers(builder) {
    builder.addCase(actgetproductsbyItem.pending, (state) => {
      (state.loading = "pending"), (state.error = null);
    });
    builder.addCase(actgetproductsbyItem.fulfilled, (state, action) => {
      (state.loading = "idle"), (state.error = null);
      state.prodcutsFullInfo = action.payload;
    });
    builder.addCase(actgetproductsbyItem.rejected, (state, action) => {
      state.loading = "rejected";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { getCartQuantit, actgetproductsbyItem };
export const { addToCart, changeQuantity } = CartSlice.actions;
export default CartSlice.reducer;
