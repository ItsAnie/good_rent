import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../firebase"; 
import { ref, get, push, set } from "firebase/database";

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (productId) => {
    const reviewsRef = ref(database, `reviews/${productId}`);
    const snapshot = await get(reviewsRef);

    if (!snapshot.exists()) return { productId, reviews: [] };

    const data = snapshot.val();
    const reviews = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));

    return { productId, reviews };
  }
);

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async ({ productId, reviewData }) => {
    const newReviewRef = push(ref(database, `reviews/${productId}`));

    const fullReview = {
      ...reviewData,
      createdAt: Date.now(),
    };

    await set(newReviewRef, fullReview);

    return { productId, review: { id: newReviewRef.key, ...fullReview } };
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    data: {},  
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => { state.loading = true; })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.data[action.payload.productId] = action.payload.reviews;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addReview.pending, (state) => { state.loading = true; })
      .addCase(addReview.fulfilled, (state, action) => {
        state.loading = false;
        const { productId, review } = action.payload;
        if (!state.data[productId]) state.data[productId] = [];
        state.data[productId].push(review);
      })
      .addCase(addReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default reviewSlice.reducer;
