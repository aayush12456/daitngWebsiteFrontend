import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
// import socketIOClient from 'socket.io-client';
// const socket = socketIOClient('http://localhost:4000');
export const getLikeCounterUserAsync = createAsyncThunk(
  'counter/getLikeCounterUserAsync',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getLikeCountUser/${userId}`); 
      // console.log('get like response count',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getLikeCounterUserSlice = createSlice({
  name: 'getLikeCounterUser',
  initialState: {
    getLikeCounterUser:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLikeCounterUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getLikeCounterUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getLikeCounterUser = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getLikeCounterUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getLikeCounterUserSlice.reducer;
export const getLikeCounterUserSliceActions = getLikeCounterUserSlice.actions;
