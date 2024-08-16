import { createSlice } from "@reduxjs/toolkit";

const hideRemainAdminModalSlice = createSlice({
  name: "hideRemainAdminModalToggle",
  initialState: {
    hideRemainAdminModalToggle: false,
  },
  reducers: {
    visiblehideRemainAdminToggle(state){
        state.hideRemainAdminModalToggle = !state.hideRemainAdminModalToggle;
      
    },
  },
});

export const hideRemainAdminModalActions = hideRemainAdminModalSlice.actions
export default hideRemainAdminModalSlice.reducer