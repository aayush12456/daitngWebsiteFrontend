import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addNotifyAsync = createAsyncThunk(
  'Visitor/addNotifyAsync',
  async (notifyObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addNotifyUser/${notifyObj.id}`, notifyObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      // console.log('visitor data is',Responedata)
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addNotifySlice = createSlice({
  name: 'addNotifyData',
  initialState: {
    addNotifyData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addNotifyAsync.fulfilled, (state, action) => {
      state.addNotifyData = action.payload; // Update responseData in the state after successful login
      // console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addNotifyAsync.rejected, (state, action) => {
      state.addNotifyData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addNotifySlice.reducer;
export const addNotifySliceAction = addNotifySlice.actions;