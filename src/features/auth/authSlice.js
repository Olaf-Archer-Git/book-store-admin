import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { base_url } from "../../utils/base_url";
import { authService } from "./authService";

const userDefaultState = {
  _id: null,
  firstName: null,
  lastName: null,
  email: null,
  mobile: null,
  token: null,
};

const initialState = {
  user: userDefaultState,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/user-admin",
  async (user, thunkAPI) => {
    try {
      const response = await authService.login(user);
      return console.log(response);
      // const response = await base_url.fetchById(user);
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extrareducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "auth slice success";
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      });
  },
});

export default authSlice.reducer;
