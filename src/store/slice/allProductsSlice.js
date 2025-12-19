import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../../firebase"; 

export const fetchAllProducts = createAsyncThunk(
  "allProducts/fetchAllProducts",
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

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState: {
    data: [],
    loading: false,
    error: null,
    selectedCard: null, 
  },
  reducers: {
    setSelectedCard: (state, action) => {
      const productWithId = { ...action.payload, id: action.payload.id || action.payload.key };
      state.selectedCard = productWithId; 
    },
    clearSelectedCard: (state) => {
      state.selectedCard = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCard, clearSelectedCard } = allProductsSlice.actions;
export default allProductsSlice.reducer;
