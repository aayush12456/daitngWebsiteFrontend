import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
export const deleteProfileFromAdminAppArrayAsync = createAsyncThunk(
  'User/deleteProfileFromAdminAppArrayAsync',
  async ({ id, deleteUserId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`https://apnapandatingbackend.onrender.com/user/deleteProfileFromAdminArray/${id}`, { 
        params: { deleteUserId }
      });
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      // console.log('add visitor like user data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const deleteProfileFromAdminAppArraySlice = createSlice({
  name: 'deleteProfileFromAdminAppArraySlice',
  initialState: {
    deleteProfileFromAdminAppArrayData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( deleteProfileFromAdminAppArrayAsync.fulfilled, (state, action) => {
      state.deleteProfileFromAdminAppArrayData= action.payload; // Update responseData in the state after successful login
      // console.log(state.addSkipData)
    });
    // Additional extra reducers if needed
    builder.addCase( deleteProfileFromAdminAppArrayAsync.rejected, (state, action) => {
      state.deleteProfileFromAdminAppArrayData= action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default deleteProfileFromAdminAppArraySlice.reducer;
export const deleteProfileFromAdminAppArraySliceAction = deleteProfileFromAdminAppArraySlice.actions;