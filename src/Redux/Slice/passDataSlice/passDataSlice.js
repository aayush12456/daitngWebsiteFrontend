import { createSlice } from "@reduxjs/toolkit";
const passDataSlice=createSlice({
    name:'passData',
    initialState:{
        passData:''
    },
    reducers:{
        passDatas(state,action){
        state.passData=action.payload
        // console.log(state.passData)
        }
    }
})
export const passDataSliceAcions=passDataSlice.actions
export default passDataSlice.reducer