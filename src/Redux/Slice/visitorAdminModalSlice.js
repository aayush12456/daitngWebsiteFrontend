import { createSlice } from "@reduxjs/toolkit";

const visitorAdminModalSlice = createSlice({
  name: "visitorAdminModalToggle",
  initialState: {
    visitorAdminModalToggle: false,
  },
  reducers: {
    visibleAdminToggle(state){
        state.visitorAdminModalToggle = !state.visitorAdminModalToggle;
      
    },
  },
});

export const visitorAdminModalActions = visitorAdminModalSlice.actions
export default visitorAdminModalSlice.reducer