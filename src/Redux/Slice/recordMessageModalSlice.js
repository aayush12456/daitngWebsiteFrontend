import { createSlice } from "@reduxjs/toolkit";

const recordMessageModalSlice = createSlice({
  name: "recordMessageModalToggle",
  initialState: {
    recordMessageModalToggle: false,
  },
  reducers: {
    recordMessageModal(state){
        state.recordMessageModalToggle= !state.recordMessageModalToggle
      
    },
  },
});

export const recordMessageModalActions = recordMessageModalSlice.actions
export default recordMessageModalSlice.reducer