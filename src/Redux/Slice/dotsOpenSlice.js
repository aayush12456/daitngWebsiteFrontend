import { createSlice } from "@reduxjs/toolkit";

const dotsOpenSlice = createSlice({
  name: "dotsOpenToggle",
  initialState: {
    dotsOpenToggle: false,
  },
  reducers: {
    dotsVisibleToggle(state){
        state.dotsOpenToggle = !state.dotsOpenToggle;
      
    },
  },
});

export const dotsOpenSliceActions = dotsOpenSlice.actions
export default dotsOpenSlice.reducer