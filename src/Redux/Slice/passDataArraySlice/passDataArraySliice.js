import { createSlice } from "@reduxjs/toolkit";
const passDataArraySlice=createSlice({
    name:'passDataArray',
    initialState:{
        passDataArray:[]
    },
    reducers:{
        passData(state,action){
        state.passDataArray=action.payload
        console.log('pass data slice array',state.passDataArray)
        }
    }
})
export const passDataArraySliceAcions=passDataArraySlice.actions
export default passDataArraySlice.reducer