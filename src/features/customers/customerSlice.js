import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setError, setPending } from "../../app/setReducer";
import { customerService } from "./customerService";

const initialState = {
  customers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getUsers = createAsyncThunk(
  "customer/get-customers",
  async (thunkAPI) => {
    try {
      return await customerService.getUsers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, setPending)
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.customers = action.payload;
      })
      .addCase(getUsers.rejected, setError);
  },
});

export default customerSlice.reducer;
