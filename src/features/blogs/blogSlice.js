import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setPending, setError } from "../../app/setReducer";
import { blogService } from "./blogService";

const initialState = {
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getBlogs = createAsyncThunk("blog/get-blogs", async (thunkAPI) => {
  try {
    return await blogService.getBlogs();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const createBlog = createAsyncThunk(
  "blog/create-blog",
  async (thunkAPI) => {
    try {
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
      .addCase(getBlogs.rejected, setError);
  },
});

export default blogSlice.reducer;
