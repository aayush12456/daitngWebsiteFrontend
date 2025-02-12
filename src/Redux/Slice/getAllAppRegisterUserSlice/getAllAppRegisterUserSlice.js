import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getAllAppRegisterUserAsync = createAsyncThunk(
  'localUser/getAllAppRegisterUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`https://apnapandatingbackend.onrender.com/user/allRegisterUser/${userId}`); 
      // console.log('response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getAllAppRegisterUserSlice = createSlice({
  name: 'getAllAppRegisterUser',
  initialState: {
    getAllAppRegisterUserArray:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( getAllAppRegisterUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase( getAllAppRegisterUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getAllAppRegisterUserArray= action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase( getAllAppRegisterUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default  getAllAppRegisterUserSlice.reducer;
export const  getAllAppRegisterUserSliceActions =  getAllAppRegisterUserSlice.actions;
