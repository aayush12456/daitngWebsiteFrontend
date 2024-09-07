import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const deleteLoginIdUserAsync = createAsyncThunk(
  'deleteLogin/deleteLoginIdUserAsync',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.delete(`/deleteLoginIdUser/${userId}`); 
      console.log('delete profile response count',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const deleteLoginIdUserSlice = createSlice({
  name: 'deleteLoginIdUser',
  initialState: {
    deleteLoginIdUserObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteLoginIdUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteLoginIdUserAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.deleteLoginIdUserObj = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(deleteLoginIdUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default deleteLoginIdUserSlice.reducer;
export const deleteLoginIdUserSliceActions = deleteLoginIdUserSlice.actions;
