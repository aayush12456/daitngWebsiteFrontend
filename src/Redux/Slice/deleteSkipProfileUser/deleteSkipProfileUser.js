// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from '../../axios/axios'

// export const deleteSkipProfileUserAsync = createAsyncThunk(
//   'deleteSkipUser/deleteSkipProfileUserAsync',
//   async (skipProfileId, { rejectWithValue }) => {

//     try {
//       const response = await axios.delete(`/deleteSkippedProfile/${skipProfileId.id}`); 
//       console.log('delete skip profile response ',response.data)
//       return response.data
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );


// const deleteSkipProfileUserSlice = createSlice({
//   name: 'deleteSkipProfileUser',
//   initialState: {
//     deleteSkipProfileUser:{},
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(deleteSkipProfileUserAsync .pending, (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addCase(deleteSkipProfileUserAsync .fulfilled, (state, action) => {
      
//       state.isLoading = false;
//       state. deleteSkipProfileUser = action.payload;
//       // console.log('matches data', state.getUserArray)
//     });
//     builder.addCase(deleteSkipProfileUserAsync .rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     });
//   },
// });

// export default deleteSkipProfileUserSlice.reducer;
// export const deleteSkipProfileUserSliceActions = deleteSkipProfileUserSlice.actions;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'

export const deleteSkipProfileUserAsync = createAsyncThunk(
  'counter/deleteSkipProfileUserAsync',
  async ({ id, deleteUserId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/deleteSkippedProfile/${id}`, { 
        params: { deleteUserId }
      });
      // console.log('delete skip profile response ',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const deleteSkipProfileUserSlice = createSlice({
  name: 'deleteSkipProfileUser',
  initialState: {
    deleteSkipProfileUser:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteSkipProfileUserAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteSkipProfileUserAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deleteSkipProfileUser = action.payload;
    });
    builder.addCase(deleteSkipProfileUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default deleteSkipProfileUserSlice.reducer;
export const deleteSkipProfileUserSliceActions = deleteSkipProfileUserSlice.actions;
