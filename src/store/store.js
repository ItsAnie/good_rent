import { configureStore } from "@reduxjs/toolkit";
import recomendationReducer from "./slice/recomendationSlice"; 
import optionsReducer from "./slice/optionsSlice";
import authReducer from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    recomendation: recomendationReducer,
    options: optionsReducer,
    auth: authReducer,
  },
});

