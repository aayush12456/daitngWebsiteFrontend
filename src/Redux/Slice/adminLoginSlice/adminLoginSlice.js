import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const adminLoginAsync = createAsyncThunk(
  "adminRegister/adminLoginAsync",
  async (loginCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/admin/login", loginCredentials, {
        headers: { "Content-Type": "application/json" },
      });
      const token = response.data.token;
      sessionStorage.setItem("adminLoginToken", token);
      const Responedata = response.data;
      // console.log('admin login response',Responedata)
      const userId=response.data.userId
      sessionStorage.setItem('userId',userId)
    const firstName=response.data.firstName
    sessionStorage.setItem('firstName',firstName)
   
      return Responedata;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adminLoginSlice = createSlice({
  name: "adminLogin",
  initialState: {
    adminLoginresponseData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(adminLoginAsync.fulfilled, (state, action) => {
      state.adminLoginresponseData = action.payload; // Update responseData in the state after successful login
    });
    // Additional extra reducers if needed
    builder.addCase(adminLoginAsync.rejected, (state, action) => {
      state.adminLoginresponseData = action.payload; // Update responseData even for rejected login attempt
      console.error('admin Login attempt failed:', action.payload)
    });
  },
});

export default adminLoginSlice.reducer;
export const adminLoginSliceAction = adminLoginSlice.actions;
