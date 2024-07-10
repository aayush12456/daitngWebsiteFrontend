import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const deactivateAccountAsync = createAsyncThunk(
  'User/deactivateAccountAsync',
  async (crossObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/deactivateUser/${crossObj.id}`, crossObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      console.log('deactivate account  data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const deactivateAccountSlice = createSlice({
  name: 'deactivateAccountSliceData',
  initialState: {
 deactivateAccountDataObj: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( deactivateAccountAsync.fulfilled, (state, action) => {
      state. deactivateAccountDataObj = action.payload; // Update responseData in the state after successful login
      console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase(  deactivateAccountAsync.rejected, (state, action) => {
      state.deactivateAccountDataObj = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default  deactivateAccountSlice.reducer;
export const  deactivateAccountSliceAction = deactivateAccountSlice.actions;