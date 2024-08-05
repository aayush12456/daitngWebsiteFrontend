import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addChatHandlerAsync = createAsyncThunk(
  'Chat/addChatHandlerAsync',
  async (addTochatObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addToChatUser/${addTochatObj.id}`, addTochatObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      // console.log('visitor data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addChatHandlerSlice = createSlice({
  name: 'addChatAsyncData',
  initialState: {
    addChatAsyncData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addChatHandlerAsync.fulfilled, (state, action) => {
      state.addChatAsyncData = action.payload; // Update responseData in the state after successful login
      // console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addChatHandlerAsync.rejected, (state, action) => {
      state.addChatAsyncData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default  addChatHandlerSlice.reducer;
export const  addChatHandlerSliceAction =  addChatHandlerSlice.actions;