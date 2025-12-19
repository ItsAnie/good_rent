import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../../firebase";

export const fetchDefaultRecomendation = createAsyncThunk(
  "recomendation/fetchDefaultRecomendation",
  async () => {
    const snapshot = await get(ref(database, "allProducts"));
    const allProductsObj = snapshot.val() || {};
    const allProducts = Object.entries(allProductsObj).map(([id, product]) => ({
      id,    
      ...product
    }));

    return allProducts;
  }
);

const recomendationSlice = createSlice({
  name: "recomendation",
  initialState: {
    data: [],            
    loading: false,
    error: null,
    selectedCard: null
  },
  reducers: {
    selectCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    clearSelectedCard: (state) => {
      state.selectedCard = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDefaultRecomendation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDefaultRecomendation.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchDefaultRecomendation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectCard, clearSelectedCard } = recomendationSlice.actions;
export default recomendationSlice.reducer;
