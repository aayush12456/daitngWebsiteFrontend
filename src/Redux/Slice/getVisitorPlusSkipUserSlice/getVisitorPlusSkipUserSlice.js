import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getVisitorPlusSkipUserAsync = createAsyncThunk(
  'User/ getVisitorPlusSkipUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getVisitorPlusSkipUser/${userId}`); 
      console.log('response of getVisitor like user',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const  getVisitorPlusSkipUserSlice = createSlice({
  name: 'getLikeUser',
  initialState: {
    getVisitorPlusSkipUserArray:[],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( getVisitorPlusSkipUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase( getVisitorPlusSkipUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state. getVisitorPlusSkipUserArray = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase( getVisitorPlusSkipUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default  getVisitorPlusSkipUserSlice.reducer;
export const  getVisitorPlusSkipUserActions = getVisitorPlusSkipUserSlice.actions;
