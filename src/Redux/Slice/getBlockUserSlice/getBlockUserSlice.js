import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getBlockUserAsync = createAsyncThunk(
  'blockUser/getBlockUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getBlockIdUser/${userId}`); 
      // console.log('response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getBlockUserSlice = createSlice({
  name: 'getBlockUser',
  initialState: {
    getBlockUserObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlockUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getBlockUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getBlockUserObj= action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getBlockUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getBlockUserSlice.reducer;
export const getBlockUserSliceActions = getBlockUserSlice.actions;
