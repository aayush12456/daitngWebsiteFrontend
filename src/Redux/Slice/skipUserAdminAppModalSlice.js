import { createSlice } from "@reduxjs/toolkit";

const skipUserAdminAppModalSlice = createSlice({
  name: "skipUserAdminAppModalToggle",
  initialState: {
    skipUserAdminAppModalToggle: false,
  },
  reducers: {
    skipUserAdminAppToggle(state){
        state.skipUserAdminAppModalToggle = !state.skipUserAdminAppModalToggle
      
    },
  },
});

export const skipUserAdminAppModalActions = skipUserAdminAppModalSlice.actions
export default skipUserAdminAppModalSlice.reducer