import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getUserData = createAsyncThunk(
  'user/getUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/allUsers/${userId}`); 
      // console.log('response of all user',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

const getUserSlice = createSlice({
  name: 'getUser',
  initialState: {
    getUserArray:[],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getUserArray = action.payload;
      // console.log('toy data is', state.getUserArray)
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getUserSlice.reducer;
export const getUserSiceActions = getUserSlice.actions;
