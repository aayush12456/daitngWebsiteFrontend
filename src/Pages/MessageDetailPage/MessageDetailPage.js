import MessageDetail from "../../Components/messageDetail/messageDetail"
import { useLocation } from "react-router-dom"
const MessageDetailPage=()=>{
    let messageData=useLocation()
    let messageDetail=messageData.state
return (
    <>
    <MessageDetail messageDetail={messageDetail}/>
    </>
)
}
export default MessageDetailPage