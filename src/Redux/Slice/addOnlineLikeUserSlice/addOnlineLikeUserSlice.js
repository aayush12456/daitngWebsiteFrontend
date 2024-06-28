import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addOnlineLikeUserAsync = createAsyncThunk(
  'User/addOnlineLikeUserAsync',
  async (addOnlineLikeUser, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addOnlineLikeUser/${addOnlineLikeUser.id}`, addOnlineLikeUser, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      console.log('add online like user data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addOnlineLikeUserSlice = createSlice({
  name: 'addOnlineLikeUserSlice',
  initialState: {
    addOnlineLikeData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addOnlineLikeUserAsync.fulfilled, (state, action) => {
      state.addOnlineLikeData = action.payload; // Update responseData in the state after successful login
      console.log(state.addOnlineLikeData)
    });
    // Additional extra reducers if needed
    builder.addCase(addOnlineLikeUserAsync.rejected, (state, action) => {
      state.addOnlineLikeData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addOnlineLikeUserSlice.reducer;
export const addOnlineLikeUserSliceAction = addOnlineLikeUserSlice.actions;