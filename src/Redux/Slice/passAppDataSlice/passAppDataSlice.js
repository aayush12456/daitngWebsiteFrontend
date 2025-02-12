import { createSlice } from "@reduxjs/toolkit";
const passAppDataSlice=createSlice({
    name:'passAppData',
    initialState:{
        passAppData:''
    },
    reducers:{
        passAppDatas(state,action){
        state.passAppData=action.payload
        // console.log(state.passData)
        }
    }
})
export const passAppDataSliceActions=passAppDataSlice.actions
export default passAppDataSlice.reducer