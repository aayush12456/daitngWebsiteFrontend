import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addLikeNotifyAsync = createAsyncThunk(
  'Visitor/addNotifyAsync',
  async (notifyLikeObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addLikeNotifyUser/${notifyLikeObj.id}`, notifyLikeObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      // console.log('add like notify data is',Responedata)
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addLikeNotifySlice = createSlice({
  name: 'addLikeNotifyData',
  initialState: {
    addLikeNotifyData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addLikeNotifyAsync.fulfilled, (state, action) => {
      state.addLikeNotifyData = action.payload; // Update responseData in the state after successful login
      // console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addLikeNotifyAsync.rejected, (state, action) => {
      state.addLikeNotifyData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addLikeNotifySlice.reducer;
export const addLikeNotifySliceAction = addLikeNotifySlice.actions;