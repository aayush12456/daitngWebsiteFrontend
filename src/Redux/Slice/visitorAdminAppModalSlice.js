import { createSlice } from "@reduxjs/toolkit";

const visitorAdminAppModalSlice = createSlice({
  name: "visitorAdminAppModalToggle",
  initialState: {
    visitorAdminAppModalToggle: false,
  },
  reducers: {
    visibleAdminAppToggle(state){
        state.visitorAdminAppModalToggle = !state.visitorAdminAppModalToggle;
      
    },
  },
});

export const visitorAdminAppModalActions = visitorAdminAppModalSlice.actions
export default visitorAdminAppModalSlice.reducer