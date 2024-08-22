import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addNoneSongAsync = createAsyncThunk(
  'User/addNoneSongAsync',
  async (addNoneSongObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addNoneSong/${addNoneSongObj.id}`, addNoneSongObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      // console.log('add online like user data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addNoneSongSlice = createSlice({
  name: 'addNoneSongSlice',
  initialState: {
    addNoneSongObj: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNoneSongAsync.fulfilled, (state, action) => {
      state.addNoneSongObj = action.payload; // Update responseData in the state after successful login
      // console.log(state.addOnlineLikeData)
    });
    // Additional extra reducers if needed
    builder.addCase(addNoneSongAsync.rejected, (state, action) => {
      state.addOnlineLikeData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addNoneSongSlice.reducer;
export const addNoneSongSliceAction = addNoneSongSlice.actions;