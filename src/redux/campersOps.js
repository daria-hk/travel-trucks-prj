import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const url = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`;
      const response = await axios.get(url);
      return response.data.items;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCamperId = createAsyncThunk(
  "campers/camperId",
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${camperId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
