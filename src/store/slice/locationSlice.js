import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../../firebase";

export const fetchLocation = createAsyncThunk("location/fetchLocation", async () => {
    const dbRef = ref(database, "/");
    const snapshot = await get(dbRef);

    if (snapshot.exists()){
        const data = snapshot.val();

        return {
            location: data.location || [],
        };
    }else{
        return {location: []};
    }
});

const locationSlice = createSlice({
    name: "location",
    initialState: {
        location: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLocation.fulfilled, (state, action) => {
                state.loading = false;
                state.location = action.payload.location;
            })
            .addCase(fetchLocation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default locationSlice.reducer;