import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getMatchUserAsync = createAsyncThunk(
  'User/ getMatchUserAsync',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getMatchUser/${userId}`); 
      console.log('response of getmatch  user',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const  getMatchUserSlice = createSlice({
  name: 'getMatchUser',
  initialState: {
    getMatchUserArray:[],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( getMatchUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase( getMatchUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state. getMatchUserArray = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase( getMatchUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default  getMatchUserSlice.reducer;
export const  getMatchUserSliceActions = getMatchUserSlice.actions;
