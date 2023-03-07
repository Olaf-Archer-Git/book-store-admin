import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setPending, setError } from "../../app/setReducer";
import { uploadService } from "./uploadService";

const initialState = {
  images: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const uploadImages = createAsyncThunk(
  "image/get-images",
  async (thunkAPI) => {
    try {
      return await uploadService.uploadImages();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const uploadImgSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadImages.pending, setPending)
      .addCase(uploadImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = action.payload;
      })
      .addCase(uploadImages.rejected, setError);
  },
});

export default uploadImgSlice.reducer;
