import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const deleteCounterUserAsync = createAsyncThunk(
  'counter/deleteCounterUserAsync',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.delete(`/deleteCountUser/${userId}`); 
      // console.log('delete response count',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const deleteCounterUserSlice = createSlice({
  name: 'deleteCounterUser',
  initialState: {
    deleteCounterUser:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteCounterUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteCounterUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.deleteCounterUser = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(deleteCounterUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default deleteCounterUserSlice.reducer;
export const deleteCounterUserSliceActions = deleteCounterUserSlice.actions;
