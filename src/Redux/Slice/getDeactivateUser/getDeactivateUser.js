import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const getDeactivateUserAsync = createAsyncThunk(
  'counter/getDeactivateUserAsync',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getDeactivateUser/${userId}`); 
      // console.log('response get deactivate',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getDeactivateUserSlice = createSlice({
  name: 'getDeactivateUser',
  initialState: {
    getDeactivateUser:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( getDeactivateUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase( getDeactivateUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getDeactivateUser = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase( getDeactivateUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getDeactivateUserSlice.reducer;
export const getDeactivateUserSliceActions = getDeactivateUserSlice.actions;
