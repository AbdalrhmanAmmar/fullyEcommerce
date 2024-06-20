import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";

export const getCartQuantit = createSelector(
  (state: RootState) => state.Cart.items,
  (items) => {
    const quantity = Object.values(items).reduce((acc, item) => {
      return acc + item;
    }, 0);
    return quantity;
  }
);
