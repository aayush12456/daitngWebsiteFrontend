import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getAllFieldRegisterUserAsync = createAsyncThunk(
  'localUser/getAllFieldRegisterUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/allFieldRegisterUser/${userId}`); 
      // console.log('response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getAllFieldRegisterUserSlice = createSlice({
  name: 'getAllFieldRegisterUser',
  initialState: {
    getAllFieldRegisterUserArray:[],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( getAllFieldRegisterUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase( getAllFieldRegisterUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getAllFieldRegisterUserArray= action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase( getAllFieldRegisterUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default  getAllFieldRegisterUserSlice.reducer;
export const  getAllFieldRegisterUserSliceActions =  getAllFieldRegisterUserSlice.actions;