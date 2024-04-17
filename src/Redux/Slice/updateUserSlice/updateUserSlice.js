import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios/axios'

// Async thunk to update a Todo item
export const updateUserAsync = createAsyncThunk(
  'user/updateuserAsync',
  async (updateUserObj, { rejectWithValue }) => {
    console.log('obj is',updateUserObj)
    try {
      const response = await axios.post(`/updateUser/${updateUserObj.id}`, updateUserObj);
      console.log('update user is',response.data.updateData)
      const updateUser=response.data.updateData
      sessionStorage.setItem('updateUser',JSON.stringify(updateUser))
      return response.data; // Assuming the response contains updated data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Redux slice for managing Todo datafggfhg
const updateUserSlice = createSlice({
  name: 'userTodo',
  initialState: {
    updateuserData: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateUserAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.updateUserData = action.payload;
    });
    builder.addCase(updateUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default updateUserSlice.reducer;
export const updateUserSliceActions = updateUserSlice.actions;