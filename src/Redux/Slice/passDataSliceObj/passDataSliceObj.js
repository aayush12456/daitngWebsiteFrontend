import { createSlice } from "@reduxjs/toolkit";
const passDataObjSlice=createSlice({
    name:'passDataObj',
    initialState:{
        passDataObj:{}
    },
    reducers:{
        passDataObj(state,action){
        state.passDataObj=action.payload
        // console.log(state.passMovie)
        }
    }
})
export const passDataObjSliceAcions=passDataObjSlice.actions
export default passDataObjSlice.reducer