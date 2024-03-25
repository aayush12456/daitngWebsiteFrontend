import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getLikeUserAsync = createAsyncThunk(
  'User/getLikeUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getLikeUser/${userId}`); 
      console.log('response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getLikeUserSlice = createSlice({
  name: 'getLikeUser',
  initialState: {
    getLikeUserArray:[],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLikeUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getLikeUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getLikeUserArray = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getLikeUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getLikeUserSlice.reducer;
export const getLikeUserSiceActions = getLikeUserSlice.actions;
