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
  "image/upload-images",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < data.length; i++) {
        formData.append("images", data[i]);
      }

      return await uploadService.uploadImages(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteImages = createAsyncThunk(
  "image/delete-images",
  async (id, thunkAPI) => {
    try {
      return await uploadService.deleteImages(id);
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
      .addCase(uploadImages.rejected, setError)

      .addCase(deleteImages.pending, setPending)
      .addCase(deleteImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = [];
      })
      .addCase(deleteImages.rejected, setError);
  },
});

export default uploadImgSlice.reducer;
