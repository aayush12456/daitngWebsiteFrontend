import { createSlice } from "@reduxjs/toolkit";
const deleteAccountSlice=createSlice({
    name:'deleteAccountObj',
    initialState:{
        deleteAccountObj:{}
    },
    reducers:{
        deleteAccount(state,action){
        state.  deleteAccountObj=action.payload
        // console.log('delete data obj',state.passDataObj)
        }
    }
})
export const deleteDataObjSliceActions=deleteAccountSlice.actions
export default deleteAccountSlice.reducer