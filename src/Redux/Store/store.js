import modalSlice from "../Slice/modalSlice"
import { configureStore } from "@reduxjs/toolkit"
import registerSlice from "../Slice/registerSlice/registerSlice"
import loginSlice from "../Slice/loginSlice/loginSlice"
import loginObjectSlice from "../Slice/loginObjectSlice/loginObjectSlice"
import getUserSlice from "../Slice/getUserSlice/getUserSlice"
import getMatchesSlice from "../Slice/getMatchesSlice/getMatchesSlice"
import addCrossMatchSlice from "../Slice/addCrossMatchSlice/addCrossMatchSlice"
import addVisitorSlice from "../Slice/addVisitorSlice/addVisitorSlice"
import getVisitorSlice from "../Slice/getVisitorSlice/getVisitorSlice"
import addLikeMatchSlice from "../Slice/addLikeMatchSlice/addLikeMatchSlice"
import addLikeUser from "../Slice/addLikeUser/addLikeUser"
import getLikeUser from "../Slice/getLikeUser/getLikeUser"
import passDataArraySliice from "../Slice/passDataArraySlice/passDataArraySliice"
import addToChatSlice from "../Slice/addToChatSlice/addToChatSlice"
import sendMessageSlice from "../Slice/sendMessageSlice/sendMessageSlice"
import getChatSlice from '../Slice/getChatDataSlice/getChatDataSlice'
import addChatHandlerSlice from "../Slice/addChatHandlerSlice/addChatHandlerSlice"
import getChatHandlerSlice from "../Slice/getChatHandlerSlice/getChatHandlerSlice"
import updateUserSlice from "../Slice/updateUserSlice/updateUserSlice"
import passDataSlice from "../Slice/passDataSlice/passDataSlice"
const store=configureStore({
    reducer:{

    modal:modalSlice,
    // city:cityCartSlice 
    registerData:registerSlice, 
    loginData:loginSlice,
    loginObject:loginObjectSlice,
    userData:getUserSlice,
    matchData:getMatchesSlice,
    crossData:addCrossMatchSlice,
    visitorData:addVisitorSlice,
    getVisitorData:getVisitorSlice,
    likeData:addLikeMatchSlice,
    likeUser:addLikeUser,
    getlikeUser:getLikeUser,
    passData:passDataArraySliice,
    addToChat:addToChatSlice,
    sendMessage:sendMessageSlice,
    getChat:getChatSlice,
    addChat:addChatHandlerSlice,
    // getChat:getChatHandlerSlice,
    updateUser:updateUserSlice,
    passData:passDataSlice
    }
})
export default store