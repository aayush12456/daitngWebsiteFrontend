import { createSlice } from "@reduxjs/toolkit";

const onlineLikeUserAdminModalSlice = createSlice({
  name: "onlineLikeUserAdminModalToggle",
  initialState: {
    onlineLikeUserAdminModalToggle: false,
  },
  reducers: {
    visibleOnlineLikeUserAdminToggle(state){
        state.onlineLikeUserAdminModalToggle = !state.onlineLikeUserAdminModalToggle
      
    },
  },
});

export const onlineLikeUserAdminModalActions = onlineLikeUserAdminModalSlice.actions
export default onlineLikeUserAdminModalSlice.reducer