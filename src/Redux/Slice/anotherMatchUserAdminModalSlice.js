import { createSlice } from "@reduxjs/toolkit";

const anotherMatchUserAdminModalSlice = createSlice({
  name: "visitorAdminModalToggle",
  initialState: {
   anotherMatchUserAdminModalToggle: false,
  },
  reducers: {
    anotherMatchUserAdminToggle(state){
        state.anotherMatchUserAdminModalToggle = !state.anotherMatchUserAdminModalToggle
      
    },
  },
});

export const anotherMatchUserAdminModalActions =  anotherMatchUserAdminModalSlice.actions
export default  anotherMatchUserAdminModalSlice.reducer