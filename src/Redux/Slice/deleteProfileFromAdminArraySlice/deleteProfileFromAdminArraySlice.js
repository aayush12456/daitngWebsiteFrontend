import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const deleteProfileFromAdminArrayAsync = createAsyncThunk(
  'User/deleteProfileFromAdminArrayAsync',
  async ({ id, deleteUserId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/deleteProfileFromAdminArray/${id}`, { 
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

const deleteProfileFromAdminArraySlice = createSlice({
  name: 'deleteProfileFromAdminArraySlice',
  initialState: {
    deleteProfileFromAdminArrayData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( deleteProfileFromAdminArrayAsync.fulfilled, (state, action) => {
      state.deleteProfileFromAdminArrayData= action.payload; // Update responseData in the state after successful login
      // console.log(state.addSkipData)
    });
    // Additional extra reducers if needed
    builder.addCase( deleteProfileFromAdminArrayAsync.rejected, (state, action) => {
      state.deleteProfileFromAdminArrayData= action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default deleteProfileFromAdminArraySlice.reducer;
export const deleteProfileFromAdminArraySliceAction = deleteProfileFromAdminArraySlice.actions;