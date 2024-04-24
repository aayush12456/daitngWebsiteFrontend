import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addLikeCounterUserAsync = createAsyncThunk(
  'User/addLikeCountUserAsync',
  async (visitorObjId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addLikeCountUser/${visitorObjId.id}`, visitorObjId, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      console.log('add like response  Count data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addLikeCounterUserSlice = createSlice({
  name: 'addLikeCounterUserData',
  initialState: {
    addLikeCounterUserData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addLikeCounterUserAsync.fulfilled, (state, action) => {
      state.addLikeCounterUserData = action.payload; // Update responseData in the state after successful login
      console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addLikeCounterUserAsync.rejected, (state, action) => {
      state.addLikeCounterUserData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addLikeCounterUserSlice.reducer;
export const addLikeCounterUserSliceAction = addLikeCounterUserSlice.actions;