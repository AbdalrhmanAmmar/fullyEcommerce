import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "../../../types";
import axios from "axios";

type Response = TProduct[];

const GetProducts = createAsyncThunk<Response, void, { rejectValue: string }>(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get<Response>(
        "http://localhost:5000/products"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

export default GetProducts;
