import { createSlice } from "@reduxjs/toolkit";

const onlineLikeUserAppAdminModalSlice = createSlice({
  name: "onlineLikeUserAppAdminModalToggle",
  initialState: {
    onlineLikeUserAppAdminModalToggle: false,
  },
  reducers: {
    visibleOnlineLikeUserAppAdminToggle(state){
        state.onlineLikeUserAppAdminModalToggle = !state.onlineLikeUserAppAdminModalToggle
      
    },
  },
});

export const onlineLikeUserAppAdminModalActions = onlineLikeUserAppAdminModalSlice.actions
export default onlineLikeUserAppAdminModalSlice.reducer