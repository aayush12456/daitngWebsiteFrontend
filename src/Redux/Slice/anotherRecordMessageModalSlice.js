import { createSlice } from "@reduxjs/toolkit";

const anotherRecordMessageModalSlice = createSlice({
  name: "anotherRecordMessageModalToggle",
  initialState: {
    anotherRecordMessageModalToggle: false,
  },
  reducers: {
    anotherRecordMessageModal(state){
        state.anotherRecordMessageModalToggle= !state.anotherRecordMessageModalToggle
      
    },
  },
});

export const anotherRecordMessageModalActions = anotherRecordMessageModalSlice.actions
export default anotherRecordMessageModalSlice.reducer