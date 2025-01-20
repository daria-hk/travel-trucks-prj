import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import { filterReducer } from "./filtersSlice";
import { favoritesReducer } from "./favSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
    favorites: favoritesReducer,
  },
});
