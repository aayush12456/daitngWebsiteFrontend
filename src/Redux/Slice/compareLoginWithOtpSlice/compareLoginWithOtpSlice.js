import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const compareLoginWithOtpAsync = createAsyncThunk(
  "userRegister/compareLoginWithOtpAsync",
  async (compareloginWithOtpCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/verifyOtp", compareloginWithOtpCredentials, {
        headers: { "Content-Type": "application/json" },
      });

      const Responedata = response.data;
      // console.log('compare response otp is',Responedata)
      const token = response.data.token;
      sessionStorage.setItem("loginToken", token);
          const email=response.data.loginData.email
      sessionStorage.setItem('email',email)
      const userId=response.data.userId
      sessionStorage.setItem('userId',userId)
    // console.log('response login',response.data)
    const personalData={

      firstName:response.data.completeData.firstName,
      DOB:response.data.completeData.DOB,
      aboutUser:response.data.completeData.aboutUser,
      city:response.data.completeData.city,
      drinking:response.data.completeData.drinking,
      eating:response.data.completeData.eating,
      education:response.data.completeData.education,
      phone:response.data.completeData.phone,
      gender:response.data.completeData.gender,
      profession:response.data.completeData.profession,
      smoking:response.data.completeData.smoking,
      images:response.data.completeData.images,
      interest:response.data.completeData.interest,
      looking:response.data.completeData.looking,
      relationship:response.data.completeData.relationship,
      zodiac:response.data.completeData.zodiac,
      language:response.data.completeData.language,
      videoUrl:response.data.completeData.videoUrl
    }
    sessionStorage.setItem('loginObject',JSON.stringify(personalData))
    const loginImage=response.data.completeData.images[0]
    sessionStorage.setItem('loginImage',loginImage)
      return Responedata;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const compareloginWithOtpSlice = createSlice({
  name: "compareloginWithOtp",
  initialState: {
    compareloginWithOtpData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(compareLoginWithOtpAsync.fulfilled, (state, action) => {
      state.compareloginWithOtpData = action.payload; // Update responseData in the state after successful login
      // console.log('compare login with otp ',state.compareloginWithOtpData)
    });
    // Additional extra reducers if needed
    builder.addCase(compareLoginWithOtpAsync.rejected, (state, action) => {
      state. compareloginWithOtpData = action.payload; // Update responseData even for rejected login attempt
      console.error(' compare Login with otp attempt failed:', action.payload)
    });
  },
});

export default compareloginWithOtpSlice.reducer;
export const compareloginWithOtpSliceAction = compareloginWithOtpSlice.actions;
