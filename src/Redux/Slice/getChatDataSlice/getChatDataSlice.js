import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/chatAxios'

export const getChatData = createAsyncThunk(
  'chat/getChat',
  async (chatId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/get-chats/${chatId}`); 
      console.log('response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const getChatSlice = createSlice({
  name: 'getChat',
  initialState: {
    getChatArray:[],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChatData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getChatData.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.getChatArray = action.payload;
      console.log('chat data', state.getChatArray)
    });
    builder.addCase(getChatData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getChatSlice.reducer;
export const getChatSliceActions = getChatSlice.actions;
