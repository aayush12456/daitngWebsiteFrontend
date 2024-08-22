import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import axios from '../../axios/axios'
// Async thunk for fetching matched user data with authorization
// export const getBollywoodSongsFromSpotifyAsync = createAsyncThunk(
//   'User/getBollywoodSongsFromSpotifyAsync',
//   async ({token }, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`https://api.spotify.com/v1/search?q=bollywood&type=track&market=IN&limit=50`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       const tracks=response.data.tracks
//       return tracks
//     } catch (error) {
//       return rejectWithValue(error.response ? error.response.data : error.message);
//     }
//   }
// );

export const getBollywoodSongsFromSpotifyAsync = createAsyncThunk(
  'Song/getBollywoodSong',
  async (userId, { rejectWithValue }) => {

    try {
      const response = await axios.get(`/getUploadSong/${userId}`); 
      // console.log('response',response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const getBollywoodSongsFromSpotifySlice = createSlice({
  name: 'getBollywoodSongsFromSpotify',
  initialState: {
    getBollywoodSongUserObj: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBollywoodSongsFromSpotifyAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getBollywoodSongsFromSpotifyAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.getBollywoodSongUserObj= action.payload;
    });
    builder.addCase(getBollywoodSongsFromSpotifyAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getBollywoodSongsFromSpotifySlice.reducer;
export const getBollywoodSongsFromSpotifySliceActions= getBollywoodSongsFromSpotifySlice.actions;
