import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { setPending, setError } from "../../app/setReducer";
import { blogService } from "./blogService";

const initialState = {
  blogs: [],
  newBlog: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//the way how to clear state after render
// export const resetState = createAction("Reset_all");

export const getBlogs = createAsyncThunk("blog/get-blogs", async (thunkAPI) => {
  try {
    return await blogService.getBlogs();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const createBlog = createAsyncThunk(
  "blog/create-blog",
  async (blogData, thunkAPI) => {
    try {
      return await blogService.createBlog(blogData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, setPending)
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, setError)
      .addCase(createBlog.pending, setPending)
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.newBlog = action.payload;
      })
      .addCase(createBlog.rejected, setError);
    //the way how to clear state after render
    // .addCase(resetState, () => initialState);
  },
});

export default blogSlice.reducer;
