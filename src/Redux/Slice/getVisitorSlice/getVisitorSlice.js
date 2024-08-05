import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getVisitorData = createAsyncThunk(
  'visitor/getVisitor',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getVisitorUser/${userId}`); 
      // console.log('response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getVisitorSlice = createSlice({
  name: 'getMatches',
  initialState: {
    getVisitorArrayObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVisitorData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getVisitorData.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getVisitorArray = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getVisitorData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getVisitorSlice.reducer;
export const getVisitorSiceActions = getVisitorSlice.actions;
