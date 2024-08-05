import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
import socketIOClient from 'socket.io-client';
const socket = socketIOClient('http://localhost:4000');
export const getCounterUserAsync = createAsyncThunk(
  'counter/getCounterUserAsync',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getCountUser/${userId}`); 
      // console.log('response count',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getCounterUserSlice = createSlice({
  name: 'getCounterUser',
  initialState: {
    getCounterUser:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCounterUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCounterUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getCounterUser = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getCounterUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getCounterUserSlice.reducer;
export const getCounterUserSliceActions = getCounterUserSlice.actions;
