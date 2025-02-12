import { createSlice } from "@reduxjs/toolkit";

const appModalSlice = createSlice({
  name: "appModalToggle",
  initialState: {
    appModalToggle: false,
  },
  reducers: {
    appVisibleToggle(state){
        state.appVisibleToggle = !state.appVisibleToggle;
      
    },
  },
});

export const appModalActions = appModalSlice.actions
export default appModalSlice.reducer