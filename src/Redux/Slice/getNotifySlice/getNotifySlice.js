import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getNotifyUserAsync = createAsyncThunk(
  'User/getNotifyUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getNotifyUser/${userId}`); 
      // console.log('get notify response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getNotifyUserSlice = createSlice({
  name: 'getNotifyUser',
  initialState: {
    getNotifyUser:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotifyUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNotifyUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getNotifyUser = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getNotifyUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getNotifyUserSlice.reducer;
export const getNotifyUserSliceActions = getNotifyUserSlice.actions;
