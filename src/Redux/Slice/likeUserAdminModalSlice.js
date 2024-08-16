import { createSlice } from "@reduxjs/toolkit";

const likeUserAdminModalSlice = createSlice({
  name: "likeUserAdminModalToggle",
  initialState: {
    likeUserAdminModalToggle: false,
  },
  reducers: {
    visiblelikeUserAdminToggle(state){
        state.likeUserAdminModalToggle = !state.likeUserAdminModalToggle
      
    },
  },
});

export const likeUserAdminModalActions = likeUserAdminModalSlice.actions
export default likeUserAdminModalSlice.reducer