import { createSlice } from "@reduxjs/toolkit";

const selfDeactivateAdminModalSlice = createSlice({
  name: "selfDeactivateAdminModalToggle",
  initialState: {
    selfDeactivateAdminModalToggle: false,
  },
  reducers: {
    visibleselfDeactivateAdminToggle(state){
        state.selfDeactivateAdminModalToggle = !state.selfDeactivateAdminModalToggle
    },
  },
});

export const selfDeactivateAdminModalActions = selfDeactivateAdminModalSlice.actions
export default selfDeactivateAdminModalSlice.reducer