import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const deleteBlockUserAsync = createAsyncThunk(
    'deleteBlockUser/deleteBlockUserAsync',
    async (deleteBlockUser, { rejectWithValue }) => {
      try {
        const response = await axios.post(`/deleteBlockIdUser/${deleteBlockUser.id}`, deleteBlockUser, {
          headers: { 'Content-Type': 'application/json', }
        });
     
        if (!response.status === 200) {
          throw new Error('Failed to add movie data to mongodb database.');
        }
       
        const Responedata = response.data;
        console.log('delete block user obj is',Responedata)
    
        return Responedata;
        
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const deleteBlockUserSlice = createSlice({
  name: 'deleteBlockUserSlice',
  initialState: {
    deleteBlockUserObj: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteBlockUserAsync.fulfilled, (state, action) => {
      state.deleteBlockUserObj= action.payload; // Update responseData in the state after successful login
      // console.log(state.addSkipData)
    });
    // Additional extra reducers if needed
    builder.addCase(deleteBlockUserAsync.rejected, (state, action) => {
      state.deleteBlockUserObj= action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default deleteBlockUserSlice.reducer;
export const deleteBlockUserSliceAction = deleteBlockUserSlice.actions;