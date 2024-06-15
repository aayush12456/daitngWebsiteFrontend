import { createSlice } from "@reduxjs/toolkit";

const headerModalSlice = createSlice({
  name: "modalToggle",
  initialState: {
    headerModalToggle: false,
  },
  reducers: {
    headerVisibleToggle(state){
        state.headerModalToggle = !state.headerModalToggle;
      
    },
  },
});

export const headerModalActions = headerModalSlice.actions
export default headerModalSlice.reducer