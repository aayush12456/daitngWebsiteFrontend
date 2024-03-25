
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const getChatAsyncData = createAsyncThunk(
  'chat/getChat',
  async (chatId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getChatUser/${chatId}`); 
      console.log('response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getChatHandlerSlice = createSlice({
  name: 'getChatAsync',
  initialState: {
    getChatAsyncArray:[],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChatAsyncData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getChatAsyncData.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getChatAsyncArray = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getChatAsyncData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getChatHandlerSlice.reducer;
export const getChatHandlerSliceActions = getChatHandlerSlice.actions;
