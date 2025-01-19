import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import { filterReducer } from "./filtersSlice";
import { campersReducer } from "./campersSlice";
import { filterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
  },
});
