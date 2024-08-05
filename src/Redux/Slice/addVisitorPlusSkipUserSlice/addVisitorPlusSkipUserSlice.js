import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addVisitorPlusSkipUserAsync = createAsyncThunk(
  'User/addddVisitorPlusSkipUserAsync',
  async (addVisitorSkipUser, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addVisitorPlusSkipUser/${addVisitorSkipUser.id}`, addVisitorSkipUser, {
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

const addVisitorPlusSkipUserSlice = createSlice({
  name: 'addVisitorPlusSkipUserSlice',
  initialState: {
    addSkipData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( addVisitorPlusSkipUserAsync.fulfilled, (state, action) => {
      state.addSkipData = action.payload; // Update responseData in the state after successful login
      // console.log(state.addSkipData)
    });
    // Additional extra reducers if needed
    builder.addCase( addVisitorPlusSkipUserAsync.rejected, (state, action) => {
      state.addLikeData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addVisitorPlusSkipUserSlice.reducer;
export const addVisitorPlusSkipUserSliceAction = addVisitorPlusSkipUserSlice.actions;