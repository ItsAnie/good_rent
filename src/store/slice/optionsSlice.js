import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../../firebase";

export const fetchOptions = createAsyncThunk("options/fetchOptions", async () => {
    const dbRef = ref(database, "/");
    const snapshot = await get(dbRef);

    if (snapshot.exists()){
        const data = snapshot.val();

        return {
            options: data.options || [],
            options1: data.options1 || [],
            service: data.service || [],
        };
    } else{
        return {options: [], options1: [], service: []};
    }
});

const optionsSlice = createSlice({
    name: "options",
    initialState: {
        options: [],
        options1: [],
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
                state.options = action.payload.options;
                state.options1 = action.payload.options1;
                state.service = action.payload.service;
            })
            .addCase(fetchOptions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default optionsSlice.reducer;