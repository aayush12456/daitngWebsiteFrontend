import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addCounterUserAsync = createAsyncThunk(
  'User/addCountUserAsync',
  async (visitorObjId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addCountUser/${visitorObjId.id}`, visitorObjId, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      // console.log('addCount data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addCounterUserSlice = createSlice({
  name: 'addCounterUserData',
  initialState: {
    addCounterUserData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addCounterUserAsync.fulfilled, (state, action) => {
      state.addCounterUserData = action.payload; // Update responseData in the state after successful login
      // console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addCounterUserAsync.rejected, (state, action) => {
      state.addCounterUserData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addCounterUserSlice.reducer;
export const addCounterUserSliceAction = addCounterUserSlice.actions;