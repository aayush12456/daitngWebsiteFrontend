import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const deleteAdminLoginUserAsync = createAsyncThunk(
  'deleteUser/deleteAdminLoginUserAsync',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.delete(`/deleteLoginIdUser/${userId}`); 
      console.log('delete admin login response ',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const deleteAdminLoginUserSlice = createSlice({
  name: 'deleteAdminLoginUserSlice ',
  initialState: {
    deleteAdminLoginUserObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteAdminLoginUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteAdminLoginUserAsync.fulfilled, (state, action) => {  
      state.isLoading = false;
      state.deleteAdminLoginUserObj = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(deleteAdminLoginUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default deleteAdminLoginUserSlice.reducer;
export const deleteAdminLoginUserSliceActions = deleteAdminLoginUserSlice.actions;
