import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, database } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { ref, set } from "firebase/database";

export const registerUser = createAsyncThunk("auth/registerUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await set(ref(database, "users/" + user.uid), { uid: user.uid, email: user.email, createdAt: Date.now() });
    return { uid: user.uid, email: user.email };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return { uid: user.uid, email: user.email };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const sendPasswordReset = createAsyncThunk("auth/sendPasswordReset", async ({ email }, { rejectWithValue }) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: { 
    user: null, 
    loading: false, 
    error: null 
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => { 
        state.loading = true; 
        state.error = null; })
      .addCase(registerUser.fulfilled, (state, action) => { 
        state.loading = false; 
        state.user = action.payload; 
      })
      .addCase(registerUser.rejected, (state, action) => { 
        state.loading = false; 
        state.error = action.payload; 
      })

      .addCase(loginUser.pending, (state) => { 
        state.loading = true; 
        state.error = null; 
      })
      .addCase(loginUser.fulfilled, (state, action) => { 
        state.loading = false; 
        state.user = action.payload; 
      })
      .addCase(loginUser.rejected, (state, action) => { 
        state.loading = false; 
        state.error = action.payload; 
      })

      .addCase(sendPasswordReset.pending, (state) => { 
        state.loading = true; 
        state.error = null; 
      })
      .addCase(sendPasswordReset.fulfilled, (state) => { 
        state.loading = false; 
      })
      .addCase(sendPasswordReset.rejected, (state, action) => { 
        state.loading = false; 
        state.error = action.payload; 
      });
  }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;