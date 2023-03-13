import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { setPending, setError } from "../../app/setReducer";
import { discountService } from "./discountService";

const initialState = {
  discounts: [],
  newDiscount: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const resetState = createAction("Reset_all");

export const getAllDiscounts = createAsyncThunk(
  "discount/get-discounts",
  async (thunkAPI) => {
    try {
      return await discountService.getDiscounts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createDiscount = createAsyncThunk(
  "discount/create-discounts",
  async (discountData, thunkAPI) => {
    try {
      return await discountService.createDiscount(discountData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteDiscount = createAsyncThunk(
  "discount/delete-discount",
  async (discountData, thunkAPI) => {
    try {
      return await discountService.deleteDiscount(discountData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const discountSlice = createSlice({
  name: "discounts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllDiscounts.pending, setPending)
      .addCase(getAllDiscounts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.discounts = action.payload;
      })
      .addCase(getAllDiscounts.rejected, setError)

      .addCase(createDiscount.pending, setPending)
      .addCase(createDiscount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.newDiscount = action.payload;
      })
      .addCase(createDiscount.rejected, setError)

      .addCase(deleteDiscount.pending, setPending)
      .addCase(deleteDiscount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedDiscount = action.payload;
      })
      .addCase(deleteDiscount.rejected, setError)

      .addCase(resetState, () => initialState);
  },
});

export default discountSlice.reducer;
