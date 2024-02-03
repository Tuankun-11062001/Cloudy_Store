import CategoryAPI from "@/restAPI/category";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// thunks

export const getCategoriesAsync = createAsyncThunk(
  "category/getCategories",
  async () => {
    const response = await CategoryAPI.getCategories();
    return response;
  }
);

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategoriesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default CategorySlice.reducer;
