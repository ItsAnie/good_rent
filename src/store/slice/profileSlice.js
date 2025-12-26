import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get, update } from "firebase/database";
import { getAuth, updateProfile as updateAuthProfile } from "firebase/auth";
import { database } from "../../firebase";

export const fetchUserProfile = createAsyncThunk(
    "profile/fetchUserProfile",
    async (uid, { rejectWithValue }) => {
        try {
            const snapshot = await get(ref(database, "users/" + uid));
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                return rejectWithValue("User not found");
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateUserProfile = createAsyncThunk(
    "profile/updateUserProfile",
    async ({ uid, profileData }, { rejectWithValue }) => {
        try {
            await update(ref(database, "users/" + uid), profileData);

            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
                await updateAuthProfile(user, {
                    displayName: profileData.name,
                    photoURL: profileData.image
                });
            }

            return profileData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        data: {
            name: "",
            phone: "",
            location: "",
            image: "",
            socialLinks: {
                instagram: "",
                facebook: "",
                telegram: "",
                whatsapp: ""
            },
            cards: [],
            selectedCard: ""
        },
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                 state.loading = false;
                 state.data = {
                    ...state.data,
                    ...action.payload,
                    socialLinks: {
                        ...state.data.socialLinks,
                        ...action.payload.socialLinks
                    }
                };
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default profileSlice.reducer;
