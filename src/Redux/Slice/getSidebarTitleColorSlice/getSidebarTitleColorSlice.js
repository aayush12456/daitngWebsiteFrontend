import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const  getSidebarTitleColorAsync = createAsyncThunk(
  'getSidebar/ addSidebarTitleColorAsync',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getSidebarAvailability/${userId}`,); 
      console.log('response of get sidebar user',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getSidebarTitleColorSlice = createSlice({
  name: 'getSidebarTitleColor',
  initialState: {
    getSidebarTitleColorObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSidebarTitleColorAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSidebarTitleColorAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.  getSidebarTitleColorObj= action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getSidebarTitleColorAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getSidebarTitleColorSlice.reducer;
export const getSidebarTitleColorSliceActions = getSidebarTitleColorSlice.actions;
