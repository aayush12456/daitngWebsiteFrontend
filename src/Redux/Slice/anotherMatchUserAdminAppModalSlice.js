import { createSlice } from "@reduxjs/toolkit";

const anotherMatchUserAdminAppModalSlice = createSlice({
  name: "visitorAdminModalToggle",
  initialState: {
   anotherMatchUserAdminAppModalToggle: false,
  },
  reducers: {
    anotherMatchUserAdminAppToggle(state){
        state.anotherMatchUserAdminAppModalToggle = !state.anotherMatchUserAdminAppModalToggle
      
    },
  },
});

export const anotherMatchUserAdminAppModalActions =  anotherMatchUserAdminAppModalSlice.actions
export default  anotherMatchUserAdminAppModalSlice.reducer