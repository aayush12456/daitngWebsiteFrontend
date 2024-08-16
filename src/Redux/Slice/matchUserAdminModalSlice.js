import { createSlice } from "@reduxjs/toolkit";

const matchUserAdminModalSlice = createSlice({
  name: "matchUserAdminModalToggle",
  initialState: {
    matchUserAdminModalToggle: false,
  },
  reducers: {
    matchUserAdminToggle(state){
        state.matchUserAdminModalToggle = !state.matchUserAdminModalToggle
      
    },
  },
});

export const matchUserAdminModalActions = matchUserAdminModalSlice.actions
export default matchUserAdminModalSlice.reducer