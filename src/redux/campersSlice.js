import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetState: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
