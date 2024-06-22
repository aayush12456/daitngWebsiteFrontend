import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addSidebarTitleColorAsync = createAsyncThunk(
  'User/addSidebarTitleColorAsync',
  async (crossObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/sidebarAvailability/${crossObj.id}`, crossObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      console.log('add sidebar color data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addSidebarTitleColorSlice = createSlice({
  name: 'addSidebarTitleColorData',
  initialState: {
    addSidebarTitleColorData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addSidebarTitleColorAsync.fulfilled, (state, action) => {
      state.addSidebarTitleColorData = action.payload; // Update responseData in the state after successful login
      console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addSidebarTitleColorAsync.rejected, (state, action) => {
      state.addSidebarTitleColorData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addSidebarTitleColorSlice.reducer;
export const addSidebarTitleColorSliceAction =addSidebarTitleColorSlice.actions;