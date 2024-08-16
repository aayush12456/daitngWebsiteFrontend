import { createSlice } from "@reduxjs/toolkit";

const selfOnlineLikeUserAdminModalSlice = createSlice({
  name: "selfOnlineLikeUserAdminModalToggle",
  initialState: {
    selfOnlineLikeUserAdminModalToggle : false,
  },
  reducers: {
    selfOnlineLikeAdminToggle(state){
        state.selfOnlineLikeUserAdminModalToggle  = !state.selfOnlineLikeUserAdminModalToggle
      
    },
  },
});

export const selfOnlineLikeUserAdminModalActions = selfOnlineLikeUserAdminModalSlice.actions
export default selfOnlineLikeUserAdminModalSlice.reducer