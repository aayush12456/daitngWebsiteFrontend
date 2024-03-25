// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const cityCartData = createAsyncThunk(
//   'city/cityCartData',
//   async (_, { rejectWithValue }) => {

//     try {
//       const response = await axios.get(''); 
//       console.log('response',response.data)
//       return response.data
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const cityCartSlice = createSlice({
//   name: 'cityCart',
//   initialState: {
//     cityList:[],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(cityCartData.pending, (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addCase(cityCartData.fulfilled, (state, action) => {
      
//       state.isLoading = false;
//       state.toyCartList = action.payload;
//       console.log('toy data is', state.toyCartList)
//     });
//     builder.addCase(cityCartData.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     });
//   },
// });

// export default cityCartSlice.reducer;
// export const cityCartSliceActions = cityCartSlice.actions;
