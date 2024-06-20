import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../..";
import { TProduct } from "../../../types";
type Tresponse = TProduct[];

const actgetproductsbyItem = createAsyncThunk(
  "cart/actgetproductsbyItem",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { Cart } = getState() as RootState;

    const itemsId = Object.keys(Cart.items);

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }
    try {
      const concatenatedItems = itemsId.map((el) => `id=${el}`).join("&");

      const response = await axios.get<Tresponse>(
        `/products?${concatenatedItems}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An expected error occurred");
      }
    }
  }
);

export default actgetproductsbyItem;
