import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    darkMode: true,
    filter: "All",
    search: ""
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { toggleTheme, setFilter, setSearch } = portfolioSlice.actions;
export default portfolioSlice.reducer;