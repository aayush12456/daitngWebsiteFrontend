import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const comparePhoneNumberAsync = createAsyncThunk(
  'phoneNumber/comparePhoneNumberAsync',
  async ( userObj,{ rejectWithValue }) => {

    try {
      const response = await axios.get(`/compareNumber/${userObj}`); 
      // console.log('compare number',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const comparePhoneNumberSlice = createSlice({
  name: 'comparePhoneNumberSlice',
  initialState: {
    comparePhoneNumberObj:{},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(comparePhoneNumberAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(comparePhoneNumberAsync.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.comparePhoneNumberObj = action.payload;
      // console.log('matches data', state.getUserArray)
    });
    builder.addCase(comparePhoneNumberAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default comparePhoneNumberSlice.reducer;
export const comparePhoneNumberSliceActions = comparePhoneNumberSlice.actions;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from '../../axios/axios'

// export const comparePhoneNumberAsync = createAsyncThunk(
//   'phoneNumber/comparePhoneNumberAsync',
//   async (phoneNumberObj, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`/compareNumber`, phoneNumberObj, {
//         headers: { 'Content-Type': 'application/json', }
//       });
   
//       if (!response.status === 200) {
//         throw new Error('Failed to add movie data to mongodb database.');
//       }
     
//       const Responedata = response.data;
//       console.log('compare number array  is',Responedata)
//       return Responedata;
      
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const comparePhoneNumberSlice = createSlice({
//   name: 'comparePhoneNumberSlice',
//   initialState: {
//     comparePhoneNumberObj:{},// Initialize responseData in the state


//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase( comparePhoneNumberAsync.fulfilled, (state, action) => {
//       state.comparePhoneNumberObj = action.payload; // Update responseData in the state after successful login
//       console.log(state.responseData)
//     });
//     // Additional extra reducers if needed
//     builder.addCase( comparePhoneNumberAsync.rejected, (state, action) => {
//       state.comparePhoneNumberObj = action.payload; // Update responseData even for rejected login attempt
//     });
//   },
// });

// export default comparePhoneNumberSlice.reducer;
// export const comparePhoneNumberSliceAction = comparePhoneNumberSlice.actions;
