
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const onlineAddMatchAsync = createAsyncThunk(
  'User/addCrossMatchAsync',
  async (crossObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addLikeMatch//${crossObj.id}`, crossObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      console.log('addCross data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const  onlineMatchDataSlice = createSlice({
  name: ' onlineAddLikeMatchData',
  initialState: {
    onlineAddLikeMatchData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( onlineAddMatchAsync.fulfilled, (state, action) => {
      state.addLikeData = action.payload; // Update responseData in the state after successful login
      console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( onlineAddMatchAsync.rejected, (state, action) => {
      state.addLikeData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default  onlineMatchDataSlice.reducer;
export const onlineMatchDataSliceAction =  onlineMatchDataSlice.actions;