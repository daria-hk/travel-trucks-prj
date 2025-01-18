import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, getCamperId } from "./campersOps";

const initialState = {
  items: [], // Liste aller Camper
  camperDetail: null, // Details eines einzelnen Campers
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetState: (state) => {
      state.items = [];
      state.camperDetail = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(getCamperId.pending, handlePending)
      .addCase(getCamperId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.camperDetail = action.payload; // Speichert Einzel-Camper-Daten
      })
      .addCase(getCamperId.rejected, handleRejected);
  },
});

export const { resetState } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
export const selectCampers = (state) => state.campers.items; // Liste aller Camper
export const selectCamperDetail = (state) => state.campers.camperDetail; // Einzelner Camper
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
