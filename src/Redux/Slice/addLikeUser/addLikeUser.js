import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addLikeUserAsync = createAsyncThunk(
  'likeUser/addLikeUserAsync',
  async (crossObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addLikeUser/${crossObj.id}`, crossObj, {
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

const addLikeUserSlice = createSlice({
  name: 'addLikeUserData',
  initialState: {
    addLikeUserData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addLikeUserAsync.fulfilled, (state, action) => {
      state.addLikeUserData = action.payload; // Update responseData in the state after successful login
      console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addLikeUserAsync.rejected, (state, action) => {
      state.addLikeUserData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addLikeUserSlice.reducer;
export const addLikeUserSliceAction = addLikeUserSlice.actions;