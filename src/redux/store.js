import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import { filterReducer } from "./filtersSlice";
import { campersReducer } from "./campersSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
