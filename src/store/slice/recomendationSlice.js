import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../../firebase"; 

export const fetchRecomendation = createAsyncThunk(
  "recomendation/fetchRecomendation",
  async () => {
    const snapshot = await get(ref(database, "recomendation"));
    return snapshot.val();
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
      .addCase(fetchRecomendation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecomendation.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchRecomendation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectCard, clearSelectedCard } = recomendationSlice.actions;
export default recomendationSlice.reducer;
