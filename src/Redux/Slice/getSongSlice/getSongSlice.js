import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getSongAsync = createAsyncThunk(
  'user/getSongs',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getSpotifySong/${userId}`); 
      // console.log('response of get song',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

const getSongSlice = createSlice({
  name: 'getSong',
  initialState: {
    getSongObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSongAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSongAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getSongObj = action.payload;
      // console.log('toy data is', state.getUserArray)
    });
    builder.addCase(getSongAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getSongSlice.reducer;
export const getSongliceActions = getSongSlice.actions;
