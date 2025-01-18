import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const url = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`;
      const res = await axios.get(url);
      console.log(res.data.items);
      return res.data.items;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
