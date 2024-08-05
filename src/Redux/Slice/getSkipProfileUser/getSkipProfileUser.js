import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getSkipProfileUserAsync = createAsyncThunk(
  'User/getSkipProfileUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/skipProfileUser/${userId}`); 
      // console.log('response of get skip user',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getSkipProfileUserSlice = createSlice({
  name: 'getSkipProfileUser',
  initialState: {
    getSkipProfileUserObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSkipProfileUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSkipProfileUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getSkipProfileUserObj = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getSkipProfileUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getSkipProfileUserSlice.reducer;
export const getSkipProfileUserSliceActions = getSkipProfileUserSlice.actions;
