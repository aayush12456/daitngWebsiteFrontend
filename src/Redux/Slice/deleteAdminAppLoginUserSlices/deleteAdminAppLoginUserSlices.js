import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteAdminAppLoginUserAsync = createAsyncThunk(
  "deleteUser/deleteAdminAppLoginUserAsync",
  async (loginId, { rejectWithValue }) => {
    try {
      if (!loginId) return rejectWithValue("Login ID is required");

      const response = await axios.post(
        "https://apnapandatingbackend.onrender.com/user/deleteLoginIdUser",
        { loginId }
      );

    //   console.log("Delete admin login response:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const deleteAdminAppLoginUserSlice = createSlice({
  name: "deleteAdminAppLoginUserSlice", // FIXED name
  initialState: {
    deleteAdminAppLoginUserObj: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteAdminAppLoginUserAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteAdminAppLoginUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteAdminAppLoginUserObj = action.payload;
      })
      .addCase(deleteAdminAppLoginUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default deleteAdminAppLoginUserSlice.reducer;
export const deleteAdminAppLoginUserSliceActions =
  deleteAdminAppLoginUserSlice.actions;
