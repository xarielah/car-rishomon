import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  CookieSearchHistory,
  deleteHistory,
} from "../../lib/cookies/handle-cookies";
import { RootState } from "../store";

export type Search = {
  term: string | null;
  history: CookieSearchHistory[] | null;
  showHistory: boolean;
};

const initialState: Search = {
  term: null,
  history: null,
  showHistory: false,
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<{ term: string }>) {
      state.term = action.payload.term;
    },
    resetSearchTerm(state) {
      state.term = null;
    },
    updateCarSearches(state, action: PayloadAction<CookieSearchHistory[]>) {
      state.history = action.payload;
    },
    resetHistory(state) {
      deleteHistory();
      state.history = null;
    },

    toggleHistory(state) {
      state.showHistory = !state.showHistory;
    },
  },
});

export const {
  setSearchTerm,
  resetSearchTerm,
  updateCarSearches,
  resetHistory,
  toggleHistory,
} = searchSlice.actions;

export const currentSearchData = (state: RootState) => state.searchData;

export default searchSlice.reducer;
