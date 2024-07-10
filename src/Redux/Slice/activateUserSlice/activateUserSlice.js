
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const activateUserAsync = createAsyncThunk(
  'counter/deleteSkipProfileUserAsync',
  async ({ id, deleteUserId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/getActivateUser/${id}`, { 
        params: { deleteUserId }
      });
      console.log('activate profile response ',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const activateUserSlice = createSlice({
  name: 'activateUser',
  initialState: {
    activateUserObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(activateUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(activateUserAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state. activateUserObj = action.payload;
    });
    builder.addCase(activateUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default activateUserSlice.reducer;
export const activateUserSliceActions = activateUserSlice.actions;
