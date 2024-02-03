import PostAPI from "@/restAPI/post";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunk

export const getPostsAsync = createAsyncThunk("posts/getPosts", async () => {
  const response = await PostAPI.getPosts();
  return response;
});

export const getOnePostAsync = createAsyncThunk(
  "posts/getonePost",
  async (id) => {
    const response = await PostAPI.getPostById(id);
    return response;
  }
);

export const plusOneView = createAsyncThunk(
  "posts/plusOneView",
  async (payload) => {
    const response = await PostAPI.plusOneView(payload);
    return response;
  }
);

const PostSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: null,
    viewPost: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPostsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //   get one post
      .addCase(getOnePostAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOnePostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.viewPost = action.payload;
      })
      .addCase(getOnePostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //   plus one view for post
      .addCase(plusOneView.pending, (state) => {
        state.loading = true;
      })
      .addCase(plusOneView.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action", action.payload);
      })
      .addCase(plusOneView.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {} = PostSlice.actions;
export default PostSlice.reducer;
