import { createSlice } from "@reduxjs/toolkit";
const loginObjectSlice=createSlice({
    name:'loginObject',
    initialState:{
        loginObjectResponse:{}
    },
    reducers:{
        loginObjectData(state,action){
        state.loginObjectResponse=action.payload
        // console.log(state.passMovie)
        }
    }
})
export const loginObjectSliceAcions=loginObjectSlice.actions
export default loginObjectSlice.reducer