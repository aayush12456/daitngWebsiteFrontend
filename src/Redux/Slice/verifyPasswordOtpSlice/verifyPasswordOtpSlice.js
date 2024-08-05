import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const verifyPasswordOtpAsync = createAsyncThunk(
  "userRegister/verifyPasswordOtpAsync",
  async (verifyPasswordOtpCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/verifyOtp", verifyPasswordOtpCredentials, {
        headers: { "Content-Type": "application/json" },
      });

      const Responedata = response.data;
      
    
      return Responedata;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const  verifyPasswordOtpSlice = createSlice({
  name: " verifyPasswordOtp",
  initialState: {
    verifyPasswordOtpData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( verifyPasswordOtpAsync.fulfilled, (state, action) => {
      state.verifyPasswordOtpData = action.payload; // Update responseData in the state after successful login
      // console.log('verify password with otp ',state.verifyPasswordOtpData)
    });
    // Additional extra reducers if needed
    builder.addCase( verifyPasswordOtpAsync.rejected, (state, action) => {
      state.verifyPasswordOtpData = action.payload; // Update responseData even for rejected login attempt
      console.error(' verify otp attempt failed:', action.payload)
    });
  },
});

export default verifyPasswordOtpSlice.reducer;
export const verifyPasswordOtpSliceAction = verifyPasswordOtpSlice.actions;
