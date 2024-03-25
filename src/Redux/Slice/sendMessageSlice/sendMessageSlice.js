import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/messageAxios'
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");
export const sendMessageAsync = createAsyncThunk(
  'message/sendMessageAsync',
  async (sendMessageObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/send`, sendMessageObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      console.log('message data is',Responedata)
      socket.emit("new message", Responedata.message);
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const sendMessageSlice = createSlice({
  name: 'sendMessagerData',
  initialState: {
    sendMessageData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( sendMessageAsync.fulfilled, (state, action) => {
      state.sendMessageData = action.payload; // Update responseData in the state after successful login
      console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( sendMessageAsync.rejected, (state, action) => {
      state.sendMessageData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default  sendMessageSlice.reducer;
export const  sendMessageSliceAction =  sendMessageSlice.actions;