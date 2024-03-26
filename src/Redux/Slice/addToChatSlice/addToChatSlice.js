import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/chatAxios'
export const addToChatAsync = createAsyncThunk(
  'Chat/addToChatAsync',
  async (addTochatObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/create/${addTochatObj.id}`, addTochatObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      console.log('visitor data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addToChatSlice = createSlice({
  name: 'addToChatrData',
  initialState: {
    addToChatData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addToChatAsync.fulfilled, (state, action) => {
      state.addToChatData = action.payload; // Update responseData in the state after successful login
      console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addToChatAsync.rejected, (state, action) => {
      state.addToChatData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default  addToChatSlice.reducer;
export const  addToChatSliceAction =  addToChatSlice.actions;