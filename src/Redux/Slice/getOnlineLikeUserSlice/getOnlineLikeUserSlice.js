import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getOnlineLikeUserData = createAsyncThunk(
  'getOnline/getOnlineLikeUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getOnlineUser/${userId}`); 
      console.log('response of get online user',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getOnlineLikeUserSlice = createSlice({
  name: 'getOnlineLikeUser',
  initialState: {
    getOnlineLikeUserObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOnlineLikeUserData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getOnlineLikeUserData.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state. getOnlineLikeUserObj= action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getOnlineLikeUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getOnlineLikeUserSlice.reducer;
export const getOnlineLikeUserSliceActions = getOnlineLikeUserSlice.actions;
