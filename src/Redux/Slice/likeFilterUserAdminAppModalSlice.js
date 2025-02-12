import { createSlice } from "@reduxjs/toolkit";

const likeFilterUserAdminAppModalSlice = createSlice({
  name: "likeFilterUserAdminAppModalToggle",
  initialState: {
    likeFilterUserAdminAppModalToggle: false,
  },
  reducers: {
    likeFilterUserAdminAppToggle(state){
        state.likeFilterUserAdminAppModalToggle = !state.likeFilterUserAdminAppModalToggle
      
    },
  },
});

export const likeFIlterUserAdminAppModalActions = likeFilterUserAdminAppModalSlice.actions
export default likeFilterUserAdminAppModalSlice.reducer