import { configureStore } from "@reduxjs/toolkit";
import recomendationReducer from "./slice/recomendationSlice"; 
import allProductsReducer from "./slice/allProductsSlice"; 
import optionsReducer from "./slice/optionsSlice";
import authReducer from "./slice/authSlice";
import profileReducer from "./slice/profileSlice";
import dropdownReducer from "./slice/dropdownSlice";
import usersReducer from "./slice/usersSlice";
import reviewReducer from "./slice/reviewSlice";
import realEstateReducer from "./slice/realEstateSlice";

export const store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
    recomendation: recomendationReducer,
    options: optionsReducer,
    auth: authReducer,
    profile: profileReducer,
    dropdown: dropdownReducer,
    users: usersReducer,
    review: reviewReducer,
    realEstate: realEstateReducer,
  },
});

