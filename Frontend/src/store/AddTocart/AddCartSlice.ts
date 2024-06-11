import { PayloadAction, createSlice, createSelector } from "@reduxjs/toolkit";
import { TProduct } from "../../types";
import { RootState } from "../index";

interface ICart {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
}

const initialState: ICart = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

export const getCarttotalQuantity = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalquantity = Object.values(items).reduce(
      (accumaltor, currentvalue) => accumaltor + currentvalue,
      0
    );
    return totalquantity;
  }
);

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
