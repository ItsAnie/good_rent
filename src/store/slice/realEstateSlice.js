import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../../firebase";

export const fetchRealEstate = createAsyncThunk(
  "realEstate/fetchRealEstate",
  async () => {
    const realEstateRef = ref(database, "realEstate");
    const snapshot = await get(realEstateRef);
    return snapshot.val();
  }
);

const realEstateSlice = createSlice({
  name: "realEstate",
  initialState: {
    mainFilters: [],
    selectedMainFilter: null,
    selectedPropertyType: "Автомобиль легковой",
    residential: [],
    commercial: [],
    repair: [],
    bathroom: [],
    houseType: [],
    status: "idle", 
    error: null,
  },
  reducers: {
    setSelectedMainFilter: (state, action) => {
      state.selectedMainFilter = action.payload;
    },
    setSelectedPropertyType: (state, action) => {
      state.selectedPropertyType = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRealEstate.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchRealEstate.fulfilled, (state, action) => {
        const data = action.payload;
        if (data) {
          state.mainFilters = data.mainFilters || [];
          state.residential = data.residential || [];
          state.commercial = data.commercial || [];
          state.repair = data.repair || [];
          state.bathroom = data.bathroom || [];
          state.houseType = data.houseType || [];
        }
        state.status = "succeeded";
      })
      .addCase(fetchRealEstate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {setSelectedMainFilter, setSelectedPropertyType} = realEstateSlice.actions;
export default realEstateSlice.reducer;
