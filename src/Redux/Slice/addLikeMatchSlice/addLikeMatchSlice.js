import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addLikeMatchAsync = createAsyncThunk(
  'User/addCrossMatchAsync',
  async (crossObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/likeFilterUser/${crossObj.id}`, crossObj, {
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

const addLikeMatchSlice = createSlice({
  name: 'addLikeMatchData',
  initialState: {
    addLikeData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addLikeMatchAsync.fulfilled, (state, action) => {
      state.addLikeData = action.payload; // Update responseData in the state after successful login
      console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addLikeMatchAsync.rejected, (state, action) => {
      state.addLikeData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addLikeMatchSlice.reducer;
export const addLikeMatchSliceAction = addLikeMatchSlice.actions;