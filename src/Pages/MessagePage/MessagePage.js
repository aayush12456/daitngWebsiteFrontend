import { useEffect,useState } from "react"
import Message from "../../Components/message/message"
import { useDispatch, useSelector } from "react-redux"
import { getChatData } from "../../Redux/Slice/getChatDataSlice/getChatDataSlice"
import { getChatAsyncData } from "../../Redux/Slice/getChatHandlerSlice/getChatHandlerSlice"
import {Helmet} from 'react-helmet'
const MessagePage=()=>{
    const dispatch=useDispatch()
    const [messageArray,setMessageArray]=useState([])
    const [chatId,setChatId]=useState('')
    const id=sessionStorage.getItem('userId')
    // const chatSelector=useSelector((state)=>state.getChat. getChatAsyncArray.chatUser)
    useEffect(()=>{
     dispatch(getChatData(id))
    },[])
    const messageSelector=useSelector((state)=>state.getChat.getChatArray)
    // sessionStorage.setItem('chatId',messageSelector._id)
    console.log('message is',messageSelector)
    useEffect(()=>{
    const Id=messageSelector?.map((item)=>item._id)
   Id.map(item=>{
    setChatId(item)
   })
    const message=messageSelector?.map((messageItem)=>messageItem.users.filter((messageId)=>messageId._id!==id))
    const messageData=message?.map(item=>item[0])
    setMessageArray(messageData)
    },[messageSelector])
    console.log('message array',messageArray)
  
//     useEffect(()=>{
// dispatch(getChatAsyncData(id))
//     },[])
console.log('chat is',chatId)
    return (
        <>
         <Helmet>
            <title>ApnaPan - All Messages</title>
        </Helmet>
       <Message chatArray={messageArray} chatId={chatId}  />
        </>
    )
}
export default MessagePage

