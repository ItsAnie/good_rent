import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: {   
    selectedType: null,
    selectedCategory: null,
    selectedSub: null,
    subOpen: false,
  },
  reducers: {
    setSelectedType(state, action) {
      state.selectedType = action.payload;
    },
    setSelectedCategory: (state, action) => {
         state.selectedCategory = action.payload 
    },  
    setSelectedSub(state, action) { 
      state.selectedSub = action.payload; 
    }, 
  },
});

export const { setSelectedType, setSelectedCategory, setSelectedSub } = dropdownSlice.actions;
export default dropdownSlice.reducer;
