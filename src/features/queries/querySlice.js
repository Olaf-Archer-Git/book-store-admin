import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setPending, setError } from "../../app/setReducer";
import { queryService } from "./queryService";

const initialState = {
  queries: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getQueries = createAsyncThunk(
  "query/get-queries",
  async (thunkAPI) => {
    try {
      return await queryService.getQueries();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const querySlice = createSlice({
  name: "queries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQueries.pending, setPending)
      .addCase(getQueries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.queries = action.payload;
      })
      .addCase(getQueries.rejected, setError);
  },
});

export default querySlice.reducer;
