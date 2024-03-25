import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalToggle",
  initialState: {
    modalToggle: false,
  },
  reducers: {
    visibleToggle(state){
        state.visibleToggle = !state.visibleToggle;
      
    },
  },
});

export const modalActions = modalSlice.actions
export default modalSlice.reducer