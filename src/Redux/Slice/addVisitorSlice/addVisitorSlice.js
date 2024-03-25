import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addVisitorAsync = createAsyncThunk(
  'Visitor/addVisitorAsync',
  async (visitorObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addVisitorUser/${visitorObj.id}`, visitorObj, {
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

const addVisitorSlice = createSlice({
  name: 'addVisitorData',
  initialState: {
    addVisitorData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addVisitorAsync.fulfilled, (state, action) => {
      state.addVisitorData = action.payload; // Update responseData in the state after successful login
      console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addVisitorAsync.rejected, (state, action) => {
      state.addVisitorData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addVisitorSlice.reducer;
export const addVisitorSliceAction = addVisitorSlice.actions;