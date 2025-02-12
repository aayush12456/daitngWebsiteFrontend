import { createSlice } from "@reduxjs/toolkit";

const matchUserAdminAppModalSlice = createSlice({
  name: "matchUserAdminAppModalToggle",
  initialState: {
    matchUserAdminAppModalToggle: false,
  },
  reducers: {
    matchUserAdminAppToggle(state){
        state.matchUserAdminAppModalToggle = !state.matchUserAdminAppModalToggle
      
    },
  },
});

export const matchUserAdminAppModalActions = matchUserAdminAppModalSlice.actions
export default matchUserAdminAppModalSlice.reducer