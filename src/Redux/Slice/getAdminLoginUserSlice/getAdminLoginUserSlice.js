import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getAdminLoginUserAsync = createAsyncThunk(
  'loginUser/getAdminLoginUserAsync',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getloginIdUser/${userId}`); 
      console.log('response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getAdminLoginUserSlice = createSlice({
  name: 'getAdminLoginUser',
  initialState: {
    getAdminLoginUserObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAdminLoginUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAdminLoginUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getAdminLoginUserObj= action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getAdminLoginUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default  getAdminLoginUserSlice.reducer;
export const  getAdminLoginUserSliceActions = getAdminLoginUserSlice.actions;
