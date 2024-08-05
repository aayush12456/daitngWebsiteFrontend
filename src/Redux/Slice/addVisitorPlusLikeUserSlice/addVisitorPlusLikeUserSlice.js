import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addVisitorPlusLikeUserAsync = createAsyncThunk(
  'User/addddVisitorPlusLikeUserAsync',
  async (addVisitorLikeUser, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addVisitorLikeUser/${addVisitorLikeUser.id}`, addVisitorLikeUser, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      // console.log('add visitor like user data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addVisitorPlusLikeUserSlice = createSlice({
  name: 'addVisitorPlusLikeUserSlice',
  initialState: {
    addLikeData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addVisitorPlusLikeUserAsync.fulfilled, (state, action) => {
      state.addLikeData = action.payload; // Update responseData in the state after successful login
      // console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addVisitorPlusLikeUserAsync.rejected, (state, action) => {
      state.addLikeData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addVisitorPlusLikeUserSlice.reducer;
export const addVisitorPlusLikeUserSliceAction = addVisitorPlusLikeUserSlice.actions;