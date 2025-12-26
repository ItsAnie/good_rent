import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../../firebase";

export const fetchTransport = createAsyncThunk(
    "transport/fetchTransport",
    async () => {
        const transportRef = ref(database, "transport");
        const snapshot = await get(transportRef);
        return snapshot.val();
    }
);

const transportSlice = createSlice({
    name: "transport",
    initialState: {
        brand: [],
        color: [],
        drive: [],
        steeringWheel: [],
        transmission: [],
        typeTransport: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTransport.pending, state => {
                state.loading = "loading";
            })
            .addCase(fetchTransport.fulfilled, (state, action) => {
                const data = action.payload;
                if(data) {
                    state.brand = data.brand || [];
                    state.color = data.color || [];
                    state.drive = data.drive || [];
                    state.steeringWheel = data.steeringWheel || [];
                    state.transmission = data.transmission || [];
                    state.typeTransport = data.typeTransport || [];
                }
                state.loading = "succeeded";
            })
            .addCase(fetchTransport.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.error.message;
            });
    },
});

export default transportSlice.reducer;