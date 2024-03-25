import { useEffect,useState } from "react"
import Message from "../../Components/message/message"
import { useDispatch, useSelector } from "react-redux"
import { getChatData } from "../../Redux/Slice/getChatDataSlice/getChatDataSlice"
import { getChatAsyncData } from "../../Redux/Slice/getChatHandlerSlice/getChatHandlerSlice"
const MessagePage=()=>{
    const dispatch=useDispatch()
    const [messageArray,setMessageArray]=useState([])
    const id=sessionStorage.getItem('userId')
    // const chatSelector=useSelector((state)=>state.getChat. getChatAsyncArray.chatUser)
    useEffect(()=>{
     dispatch(getChatData(id))
    },[])
    const messageSelector=useSelector((state)=>state.getChat.getChatArray)
    console.log('message is',messageSelector)
    useEffect(()=>{
    const message=messageSelector?.map((messageItem)=>messageItem.users.filter((messageId)=>messageId._id!==id))
    console.log('message array',message)
    const messageData=message?.map(item=>item[0])
    setMessageArray(messageData)
    },[messageSelector])
    console.log('message array',messageArray)
//     useEffect(()=>{
// dispatch(getChatAsyncData(id))
//     },[])
    return (
        <>
     
       <Message chatArray={messageArray}/>
        </>
    )
}
export default MessagePage

