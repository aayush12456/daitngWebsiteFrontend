import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getVisitorPlusLikeUserAsync = createAsyncThunk(
  'User/ getVisitorPlusLikeUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getVisitorPlusLikeUser/${userId}`); 
      console.log('response of getVisitor like user',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const  getVisitorPlusLikeUserSlice = createSlice({
  name: 'getLikeUser',
  initialState: {
    getVisitorPlusLikeUserArray:[],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( getVisitorPlusLikeUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase( getVisitorPlusLikeUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state. getVisitorPlusLikeUserArray = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase( getVisitorPlusLikeUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default  getVisitorPlusLikeUserSlice.reducer;
export const  getVisitorPlusLikeUserActions = getVisitorPlusLikeUserSlice.actions;
