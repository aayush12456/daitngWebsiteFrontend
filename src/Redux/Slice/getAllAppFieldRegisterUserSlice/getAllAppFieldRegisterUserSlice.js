import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getAllAppFieldRegisterUserAsync = createAsyncThunk(
  'localUser/getAllAppFieldRegisterUser',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`https://apnapandatingbackend.onrender.com/user/allFieldRegisterUser/${userId}`); 
      // console.log('response in apps field',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getAllAppFieldRegisterUserSlice = createSlice({
  name: 'getAllAppFieldRegisterUser',
  initialState: {
    getAllAppFieldRegisterUserObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( getAllAppFieldRegisterUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase( getAllAppFieldRegisterUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getAllAppFieldRegisterUserObj= action.payload;
    });
    builder.addCase( getAllAppFieldRegisterUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default  getAllAppFieldRegisterUserSlice.reducer;
export const  getAllAppFieldRegisterUserSliceActions =  getAllAppFieldRegisterUserSlice.actions;
