import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const addBlockUserAsync = createAsyncThunk(
  'blockUser/addBlockUserAsync',
  async (blockUserObj, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/addBlockIdUser/${blockUserObj.id}`, blockUserObj, {
        headers: { 'Content-Type': 'application/json', }
      });
   
      if (!response.status === 200) {
        throw new Error('Failed to add movie data to mongodb database.');
      }
     
      const Responedata = response.data;
      console.log('add block User  data is',Responedata)
  
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addBlockUserSlice = createSlice({
  name: 'addBlockUserhData',
  initialState: {
    addBlockUserObj: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBlockUserAsync.fulfilled, (state, action) => {
      state.addBlockUserObj = action.payload; // Update responseData in the state after successful login
      // console.log(state.responseData)
    });
    // Additional extra reducers if needed
    builder.addCase(addBlockUserAsync.rejected, (state, action) => {
      state.addBlockUserObj = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default addBlockUserSlice.reducer;
export const addBlockUserSliceAction = addBlockUserSlice.actions;