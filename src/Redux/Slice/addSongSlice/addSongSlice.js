import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addSongAsync = createAsyncThunk(
  'User/addSongAsync',
  async (songObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addSpotifySong/${songObj.id}`, songObj, {
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

const addSongSlice = createSlice({
  name: 'addSongData',
  initialState: {
    addSongDataObj: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addSongAsync.fulfilled, (state, action) => {
      state.addSongDataObj = action.payload; // Update responseData in the state after successful login
      // console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase(addSongAsync.rejected, (state, action) => {
      state.addSongDataObj = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addSongSlice.reducer;
export const addSongSliceAction = addSongSlice.actions;