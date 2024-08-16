import { createSlice } from "@reduxjs/toolkit";

const skipUserAdminModalSlice = createSlice({
  name: "skipUserAdminModalToggle",
  initialState: {
    skipUserAdminModalToggle: false,
  },
  reducers: {
    skipUserAdminToggle(state){
        state.skipUserAdminModalToggle = !state.skipUserAdminModalToggle
      
    },
  },
});

export const skipUserAdminModalActions = skipUserAdminModalSlice.actions
export default skipUserAdminModalSlice.reducer