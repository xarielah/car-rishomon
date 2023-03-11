import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/data.slice";
import searchSlice from "./slices/search.slice";

export const store = configureStore({
  reducer: {
    carData: dataSlice,
    searchData: searchSlice,
  },
  devTools: import.meta.env.PROD ? false : true,
});

export type RootState = ReturnType<typeof store.getState>;
