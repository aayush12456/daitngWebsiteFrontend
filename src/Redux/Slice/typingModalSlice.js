import { createSlice } from "@reduxjs/toolkit";

const typingModalSlice = createSlice({
  name: "typingModalToggle",
  initialState: {
    typingModalToggle: false,
  },
  reducers: {
    typingModal(state){
        state.typingModalToggle= !state.typingModalToggle
      
    },
  },
});

export const typingModalActions = typingModalSlice.actions
export default typingModalSlice.reducer