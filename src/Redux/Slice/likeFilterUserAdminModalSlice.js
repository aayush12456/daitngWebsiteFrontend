import { createSlice } from "@reduxjs/toolkit";

const likeFilterUserAdminModalSlice = createSlice({
  name: "likeFilterUserAdminModalToggle",
  initialState: {
    likeFilterUserAdminModalToggle: false,
  },
  reducers: {
    likeFilterUserAdminToggle(state){
        state.likeFilterUserAdminModalToggle = !state.likeFilterUserAdminModalToggle
      
    },
  },
});

export const likeFIlterUserAdminModalActions = likeFilterUserAdminModalSlice.actions
export default likeFilterUserAdminModalSlice.reducer