import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const updatePasswordOtpAsync = createAsyncThunk(
  "userRegister/updatePasswordOtpAsync",
  async (updatePasswordOtpCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/loginWithOtp", updatePasswordOtpCredentials, {
        headers: { "Content-Type": "application/json" },
      });

      const Responedata = response.data;
      // console.log('update password otp data',Responedata)
      
      return Responedata;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const updatePasswordOtpSlice = createSlice({
  name: "updatePasswordOtp",
  initialState: {
    updatePasswordOtpData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updatePasswordOtpAsync.fulfilled, (state, action) => {
      state.  updatePasswordOtpData = action.payload; // Update responseData in the state after successful login
    });
    // Additional extra reducers if needed
    builder.addCase(updatePasswordOtpAsync.rejected, (state, action) => {
      state.   updatePasswordOtpData = action.payload; // Update responseData even for rejected login attempt
      console.error('  update password otp attempt failed:', action.payload)
    });
  },
});

export default updatePasswordOtpSlice.reducer;
export const updatePasswordOtpSliceAction = updatePasswordOtpSlice.actions;
