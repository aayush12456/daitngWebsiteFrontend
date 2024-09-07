import MessageDetail from "../../Components/messageDetail/messageDetail"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
const MessageDetailPage=()=>{
    let messageData=useLocation()
    let messageDetail=messageData.state
    const chatiIdObjData=useSelector((state)=>state.getChatDetail.getChatDetailObj.chatIdUser)
    // console.log('chat detail obj data',chatiIdObjData)
    // console.log('message detail data is',messageDetail)
  

   
return (
    <>
    <MessageDetail messageDetail={messageDetail} chatIdObj={chatiIdObjData}  />
    </>
)
}
export default MessageDetailPage