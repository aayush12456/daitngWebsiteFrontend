import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const addChatDetailsAsync = createAsyncThunk(
  'chatDetailUser/addChatDetailsAsync',
  async (chatDetailObj, { rejectWithValue }) => {
    try {
      // const response = await axios.post(`http://localhost:4000/chat/addChatId`, chatDetailObj, {
      //   headers: { 'Content-Type': 'application/json', }
      // });
      const response = await axios.post(`https://apnapandaitingwebsitebackend.up.railway.app/chat/addChatId`, chatDetailObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      // console.log('addCross data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addChatDetailSlice = createSlice({
  name: 'addChatDetailsData',
  initialState: {
    addChatDetailsData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addChatDetailsAsync.fulfilled, (state, action) => {
      state.addChatDetailsData = action.payload; // Update responseData in the state after successful login
      // console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase(addChatDetailsAsync.rejected, (state, action) => {
      state.addChatDetailsData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addChatDetailSlice.reducer;
export const addChatDetailSliceAction = addChatDetailSlice.actions;