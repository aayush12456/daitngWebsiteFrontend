import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const adminRegisterAsync = createAsyncThunk(
  "adminRegister/adminRegisterAsync",
  async (registerCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/admin/register", registerCredentials, {
        headers: { "Content-Type": "application/json" },
      });
      const token = response.data.token;
      sessionStorage.setItem("adminRegisterToken", token);
      const Responedata = response.data;
      // console.log('admin register response',Responedata)
    const userId=response.data.user._id
    sessionStorage.setItem('userId',userId)
    const firstName=response.data.firstName
    sessionStorage.setItem('firstName',firstName)
   
      return Responedata;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adminRegisterSlice = createSlice({
  name: "adminRegister",
  initialState: {
    adminRegisterresponseData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(adminRegisterAsync.fulfilled, (state, action) => {
      state.adminRegisterresponseData = action.payload; // Update responseData in the state after successful login
    });
    // Additional extra reducers if needed
    builder.addCase(adminRegisterAsync.rejected, (state, action) => {
      state.adminRegisterresponseData = action.payload; // Update responseData even for rejected login attempt
      console.error('admin Register attempt failed:', action.payload)
    });
  },
});

export default adminRegisterSlice.reducer;
export const adminRegisterSliceAction = adminRegisterSlice.actions;
