import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const deleteLikeCounterUserAsync = createAsyncThunk(
  'counter/deleteLikeCounterUserAsync',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.delete(`/deleteLikeCountUser/${userId}`); 
      console.log('delete like response count',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const deleteLikeCounterUserSlice = createSlice({
  name: 'deleteLikeCounterUser',
  initialState: {
    deleteLikeCounterUser:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteLikeCounterUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteLikeCounterUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.deleteLikeCounterUser = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(deleteLikeCounterUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default deleteLikeCounterUserSlice.reducer;
export const deleteLikeCounterUserSliceActions = deleteLikeCounterUserSlice.actions;
