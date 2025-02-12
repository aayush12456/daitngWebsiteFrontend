import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getAdminAppLoginUserAsync = createAsyncThunk(
  'loginAppUser/getAdminAppLoginUserAsync',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`https://apnapandatingbackend.onrender.com/user/getAllloginIdUser/${userId}`); 
      // console.log('response in admin app login ',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getAdminAppLoginUserSlice = createSlice({
  name: 'getAdminAppLoginUser',
  initialState: {
    getAdminAppLoginUserObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAdminAppLoginUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAdminAppLoginUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getAdminAppLoginUserObj= action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getAdminAppLoginUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default  getAdminAppLoginUserSlice.reducer;
export const  getAdminAppLoginUserSliceActions = getAdminAppLoginUserSlice.actions;
