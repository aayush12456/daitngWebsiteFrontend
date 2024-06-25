import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addPersonalProfileModalHeadingAsync = createAsyncThunk(
  'User/addPersonalProfileModalHeadingAsync',
  async (crossObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addPersonalProfileModalHeading/${crossObj.id}`, crossObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add move data to mongodb database.');
      }
     
      const Responedata = response.data;
      console.log('add personal profile modal heading data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addPersonalProfileModalHeadingSlice = createSlice({
  name: 'addPersonalProfileModalHeadingData',
  initialState: {
    addPersonalProfileModalHeadingData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPersonalProfileModalHeadingAsync.fulfilled, (state, action) => {
      state.addPersonalProfileModalHeadingData = action.payload; // Update responseData in the state after successful login
      console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addPersonalProfileModalHeadingAsync.rejected, (state, action) => {
      state.addPersonalProfileModalHeadingData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addPersonalProfileModalHeadingSlice.reducer;
export const addPersonalProfileModalHeadingSliceAction =addPersonalProfileModalHeadingSlice.actions;