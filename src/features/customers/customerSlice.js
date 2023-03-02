import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerService from "./customerService";

const initialState = {
  customers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getUser = createAsyncThunk(
  "customer/get-customers",
  async (thunkAPI) => {
    try {
      await customerService.getUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const customerSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      });
  },
});

export default customerSlice.reducer;
