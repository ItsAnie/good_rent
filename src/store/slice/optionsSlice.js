import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../../firebase";

export const fetchOptions = createAsyncThunk("options/fetchOptions", async () => {
    try {
        const typeSnap = await get(ref(database, "/type"));
        const categorySnap = await get(ref(database, "/category"));
        const serviceSnap = await get(ref(database, "/service"));

        return {
            type: typeSnap.exists() ? typeSnap.val() : [],
            category: categorySnap.exists() ? categorySnap.val() : [],
            service: serviceSnap.exists() ? serviceSnap.val() : [],
        };
    } catch (error) {
        console.error("Firebase fetch error:", error);
        throw error;
    }
});

const optionsSlice = createSlice({
    name: "options",
    initialState: {
        type: [],
        category: [],
        service: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOptions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOptions.fulfilled, (state, action) => {
                state.loading = false;
                state.type = action.payload.type;
                state.category = action.payload.category;
                state.service = action.payload.service;
            })
            .addCase(fetchOptions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default optionsSlice.reducer;