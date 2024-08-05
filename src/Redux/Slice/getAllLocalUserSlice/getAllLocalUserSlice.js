import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getAllLocalUserAsync = createAsyncThunk(
  'localUser/getAllLocalUser',
  async ( { rejectWithValue }) => {

    try {
      const response = await axios.get(`/allLocalUser`); 
      // console.log('response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getAllLocalUserSlice = createSlice({
  name: 'getMatches',
  initialState: {
    getLocalUserArray:[],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllLocalUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllLocalUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getLocalUserArray = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getAllLocalUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getAllLocalUserSlice.reducer;
export const getAllLocalUserSliceActions = getAllLocalUserSlice.actions;
