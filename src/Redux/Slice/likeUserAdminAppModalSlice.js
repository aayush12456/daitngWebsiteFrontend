import { createSlice } from "@reduxjs/toolkit";

const likeUserAdminAppModalSlice = createSlice({
  name: "likeUserAdminAppModalToggle",
  initialState: {
    likeUserAdminAppModalToggle: false,
  },
  reducers: {
    visiblelikeUserAdminAppToggle(state){
        state.likeUserAdminAppModalToggle = !state.likeUserAdminAppModalToggle
      
    },
  },
});

export const likeUserAdminAppModalActions = likeUserAdminAppModalSlice.actions
export default likeUserAdminAppModalSlice.reducer