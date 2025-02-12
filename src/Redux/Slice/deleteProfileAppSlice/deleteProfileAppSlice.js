import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteProfileAppAsync = createAsyncThunk(
  "User/deleteProfileAppAsync",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://apnapandatingbackend.onrender.com/user/deleteProfileUser/${id}`
      );
      
      if (response.status !== 200) {
        throw new Error("Failed to delete user profile.");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

const deleteProfileAppSlice = createSlice({
  name: "deleteProfileAppSlice",
  initialState: {
    deleteProfileApp: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteProfileAppAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProfileAppAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deleteProfileApp = action.payload;
      })
      .addCase(deleteProfileAppAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default deleteProfileAppSlice.reducer;
export const deleteProfileAppSliceAction = deleteProfileAppSlice.actions;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios'id
// export const deleteProfileAppAsync = createAsyncThunk(
//   'delete/addMatchUserAsync',
//   async (deleteObj, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`https://apnapandatingbackend.onrender.com/user/deleteProfileUser/${deleteObj.id}`, deleteObj, {
//         headers: { 'Content-Type': 'application/json', }
//       });
   
//       if (!response.status === 200) {
//         throw new Error('Failed to add movie data to mongodb database.');
//       }
     
//       const Responedata = response.data;
//       // console.log('match user data is',Responedata)
//       return Responedata;
      
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const deleteProfileAppSlice = createSlice({
//   name: 'deleteProfileAppSlice',
//   initialState: {
//     deleteProfileApp: {}, // Initialize responseData in the state


//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(deleteProfileAppAsync.fulfilled, (state, action) => {
//       state.deleteProfileApp = action.payload; // Update responseData in the state after successful login
//       // console.log(state.responseData)
//     });
//     // Additional extra reducers if needed
//     builder.addCase(deleteProfileAppAsync.rejected, (state, action) => {
//       state.deleteProfileApp = action.payload; // Update responseData even for rejected login attempt
//     });
//   },
// });

// export default deleteProfileAppSlice.reducer;
// export const deleteProfileAppSliceAction = deleteProfileAppSlice.actions;