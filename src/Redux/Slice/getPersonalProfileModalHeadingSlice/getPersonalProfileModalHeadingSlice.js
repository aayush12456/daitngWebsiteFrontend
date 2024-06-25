import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getPersonalProfileModalHeadingAsync = createAsyncThunk(
  'User/getPersonalProfileModalHeadingAsync',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getPersonalProfileModalHeading/${userId}`); 
      console.log('response get personal profile heading',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getPersonalProfileModalHeadingSlice = createSlice({
  name: 'getPersonalProfileModalHeadingData',
  initialState: {
    getPersonalProfileModalHeadingData:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPersonalProfileModalHeadingAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getPersonalProfileModalHeadingAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getPersonalProfileModalHeadingData = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getPersonalProfileModalHeadingAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getPersonalProfileModalHeadingSlice.reducer;
export const getPersonalProfileModalHeadingSliceActions = getPersonalProfileModalHeadingSlice.actions;
