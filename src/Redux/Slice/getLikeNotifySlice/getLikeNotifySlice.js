import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getLikeNotifyUserAsync = createAsyncThunk(
  'User/getLikeNotifyUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getLikeNotifyUser/${userId}`); 
      console.log('get like notify response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getLikeNotifySlice = createSlice({
  name: 'getLikeNotifyUser',
  initialState: {
    getLikeNotifyUser:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLikeNotifyUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getLikeNotifyUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getLikeNotifyUser = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getLikeNotifyUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getLikeNotifySlice.reducer;
export const getLikeNotifySliceActions = getLikeNotifySlice.actions;
