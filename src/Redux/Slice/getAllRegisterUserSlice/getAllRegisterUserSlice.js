import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getAllRegisterUserAsync = createAsyncThunk(
  'localUser/getAllRegisterUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/allRegisterUser/${userId}`); 
      // console.log('response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getAllRegisterUserSlice = createSlice({
  name: 'getAllRegisterUser',
  initialState: {
    getAllRegisterUserArray:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( getAllRegisterUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase( getAllRegisterUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getAllRegisterUserArray= action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase( getAllRegisterUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default  getAllRegisterUserSlice.reducer;
export const  getAllRegisterUserSliceActions =  getAllRegisterUserSlice.actions;