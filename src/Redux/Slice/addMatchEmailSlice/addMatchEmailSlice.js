import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addMatchEmailAsync = createAsyncThunk(
  'User/addMatchEmailSenderAsync',
  async (crossObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/matchSendEmail/${crossObj.id}`, crossObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      // console.log('add match email data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addMatchEmailSlice = createSlice({
  name: 'addMatchEmailEmailData',
  initialState: {
    addMatchEmailData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addMatchEmailAsync.fulfilled, (state, action) => {
      state. addMatchEmailData = action.payload; // Update responseData in the state after successful login
      // console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase( addMatchEmailAsync.rejected, (state, action) => {
      state. addMatchEmailData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addMatchEmailSlice.reducer;
export const addMatchEmailSliceAction =addMatchEmailSlice.actions;