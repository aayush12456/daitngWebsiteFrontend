import { createSlice } from "@reduxjs/toolkit";

const loginWithOtpModalSlice = createSlice({
  name: "otp modalToggle",
  initialState: {
    otpModalToggle: false,
  },
  reducers: {
    OtpModalToggle(state){
        state.otpModalToggle = !state.otpModalToggle;
      
    },
  },
});

export const loginWithOtpModalSliceActions= loginWithOtpModalSlice.actions
export default loginWithOtpModalSlice.reducer