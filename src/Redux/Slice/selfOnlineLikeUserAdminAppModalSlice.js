import { createSlice } from "@reduxjs/toolkit";

const selfOnlineLikeUserAdminAppModalSlice = createSlice({
  name: "selfOnlineLikeUserAdminAppModalToggle",
  initialState: {
    selfOnlineLikeUserAdminAppModalToggle : false,
  },
  reducers: {
    selfOnlineLikeAdminAppToggle(state){
        state.selfOnlineLikeUserAdminAppModalToggle  = !state.selfOnlineLikeUserAdminAppModalToggle
      
    },
  },
});

export const selfOnlineLikeUserAdminAppModalActions = selfOnlineLikeUserAdminAppModalSlice.actions
export default selfOnlineLikeUserAdminAppModalSlice.reducer