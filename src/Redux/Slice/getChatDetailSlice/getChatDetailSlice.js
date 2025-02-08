import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getChatDetailAsync = createAsyncThunk(
    'chatDetail/getChatDetail',
    async (userIdObj, { rejectWithValue }) => {
      try {
        // const response = await axios.get('http://localhost:4000/chat/getChatId', {
        //   params: userIdObj // Pass the object as query parameters
        // });
        const response = await axios.get('https://daitingwebsitebackend.onrender.com/chat/getChatId', {
          params: userIdObj // Pass the object as query parameters
        });
        // console.log('response get chat id', response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const getChatDetailSlice = createSlice({
  name: 'getChatDetail',
  initialState: {
    getChatDetailObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChatDetailAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getChatDetailAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getChatDetailObj = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(getChatDetailAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getChatDetailSlice.reducer;
export const getChatDetailSliceAction = getChatDetailSlice.actions;
