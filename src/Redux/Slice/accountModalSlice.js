import { createSlice } from "@reduxjs/toolkit";

const accountModalSlice = createSlice({
  name: "modalToggle",
  initialState: {
    accountSettingModalToggle: false,
  },
  reducers: {
    accountSettingVisibleToggle(state){
        state.accountSettingModalToggle = !state.accountSettingModalToggle;
      
    },
  },
});

export const accountModalActions = accountModalSlice.actions
export default accountModalSlice.reducer