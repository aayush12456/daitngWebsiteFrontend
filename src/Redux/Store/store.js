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
import addCounterUserSlice from "../Slice/addCounterUserSlice/addCounterUserSlice"
import getCounterUserSlice from "../Slice/getCounterUserSlice/getCounterUserSlice"
import deleteCounterUserSlice from "../Slice/deleteCounterUserSlice/deleteCounterUserSlice"
import passDataSliceObj from "../Slice/passDataSliceObj/passDataSliceObj"
import addNotifySlice from "../Slice/addNotifySlice/addNotifySlice"
import getNotifySlice from "../Slice/getNotifySlice/getNotifySlice"
import addLikeNotifySlice from "../Slice/addLikeNotifySlice/addLikeNotifySlice"
import getLikeNotifySlice from "../Slice/getLikeNotifySlice/getLikeNotifySlice"
import addLikeCounterUserSlice from "../Slice/addLikeCounterUserSlice/addLikeCounterUserSlice"
import getLikeCounterUserSlice from "../Slice/getLikeCounterUserSlice/getLikeCounterUserSlice"
import deleteLikeCounterUserSlice from "../Slice/deleteLikeCounterUserSlice/deleteLikeCounterUserSlice"
import addVisitorPlusLikeUserSlice from "../Slice/addVisitorPlusLikeUserSlice/addVisitorPlusLikeUserSlice"
import getVisitorPlusLikeUserSlice from "../Slice/getVisitorPlusLikeUserSlice/getVisitorPlusLikeUserSlice"
import addVisitorPlusSkipUserSlice from "../Slice/addVisitorPlusSkipUserSlice/addVisitorPlusSkipUserSlice"
import getVisitorPlusSkipUserSlice from "../Slice/getVisitorPlusSkipUserSlice/getVisitorPlusSkipUserSlice"
import addMatchUserSlice from "../Slice/addMatchUserSlice/addMatchUserSlice"
import getMatchUserSlice from "../Slice/getMatchUserSlice/getMatchUserSlice"
import onlineLikeUserSlice from "../Slice/onlineLikeUserSlice/onlineLikeUserSlice"
import getOnlineLikeUserSlice from "../Slice/getOnlineLikeUserSlice/getOnlineLikeUserSlice"
import onlineMatchSlice from "../Slice/onllineMatchSlice/onlineMatchSlice"
import addSmsSlice from "../Slice/addSmsSlice/addSmsSlice"
import addVisitorEmailSlice from "../Slice/addVisitorEmailSlice/addVisitorEmailSlice"
import addMatchEmailSlice from "../Slice/addMatchEmailSlice/addMatchEmailSlice"


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
    passData:passDataSlice,
    addCountUser:addCounterUserSlice,
    getCountUser:getCounterUserSlice,
    deleteCountUser:deleteCounterUserSlice,
    passDataObj:passDataSliceObj,
    addNotfyUser:addNotifySlice,
    getNotifyUser:getNotifySlice,
    addLikeNotifyUser:addLikeNotifySlice,
    getLikeNotifyUser:getLikeNotifySlice,
    addLikeCounterUser:addLikeCounterUserSlice,
    getLikeCounterUser:getLikeCounterUserSlice,
    deleteLikeCounterUser:deleteLikeCounterUserSlice,
    addVisitorLikeUser:addVisitorPlusLikeUserSlice,
    getVisitorPlusLikeUser:getVisitorPlusLikeUserSlice,
    addVisitorSkipUser:addVisitorPlusSkipUserSlice,
    getVisitorSkipUser:getVisitorPlusSkipUserSlice,
    addMatchUser:addMatchUserSlice,
    getMatchUser:getMatchUserSlice,
    addOnlineUser:onlineLikeUserSlice,
    getOnlineLikeUser:getOnlineLikeUserSlice,
    addOnlineMatchUser: onlineMatchSlice,
    addSmsUser:addSmsSlice,
    addvisitorEmailUser:addVisitorEmailSlice,
    addMatchEmailUser:addMatchEmailSlice
    }
})
export default store