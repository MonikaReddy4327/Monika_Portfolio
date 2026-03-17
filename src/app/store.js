import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "../feature/portfolioSlice";

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer
  }
});

export default store;