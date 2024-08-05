import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
import io from 'socket.io-client';
const socket = io('http://localhost:4000');
export const addOnlineLikeUserAsync = createAsyncThunk(
  'onlineUser/addOnlineUserAsync',
  async (onlineUserObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addOnlineUser/${onlineUserObj.id}`, onlineUserObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      // console.log('visitor data is',Responedata)
      socket.emit('visitorAdded', Responedata);
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addOnlineLikeUserSlice = createSlice({
  name: 'addOnlineLikeUserData',
  initialState: {
    addOnlineLikeUserData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addOnlineLikeUserAsync.fulfilled, (state, action) => {
      state. addOnlineLikeUserData = action.payload; // Update responseData in the state after successful login
      // console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addOnlineLikeUserAsync.rejected, (state, action) => {
      state. addOnlineLikeUserData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addOnlineLikeUserSlice.reducer;
export const addOnlineLikeUserSliceAction = addOnlineLikeUserSlice.actions;