import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  equipment: [],
  vehicleType: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocationFilter: (state, action) => {
      state.location = action.payload;
    },
    setEquipmentFilter: (state, action) => {
      const equipment = action.payload;
      if (state.equipment.includes(equipment)) {
        state.equipment = state.equipment.filter((item) => item !== equipment);
      } else {
        state.equipment.push(equipment);
      }
      console.log(" Equipment :", equipment);
    },
    setVehicleTypeFilter: (state, action) => {
      state.form = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setLocationFilter,
  setEquipmentFilter,
  setVehicleTypeFilter,
  resetFilters,
} = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;

export const selectLocationFilter = (state) => state.filters.location;
export const selectEquipmentFilter = (state) => state.filters.equipment;
export const selectVehicleTypeFilter = (state) => state.filters.form;
