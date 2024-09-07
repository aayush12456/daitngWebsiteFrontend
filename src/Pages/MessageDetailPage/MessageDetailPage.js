import MessageDetail from "../../Components/messageDetail/messageDetail"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getChatDetailAsync } from "../../Redux/Slice/getChatDetailSlice/getChatDetailSlice"
const MessageDetailPage=()=>{
    let messageData=useLocation()
    let messageDetail=messageData.state
    const id=sessionStorage.getItem('userId')
    const dispatch=useDispatch()
    const chatiIdObjData=useSelector((state)=>state.getChatDetail.getChatDetailObj.chatIdUser)
    // console.log('chat detail obj data',chatiIdObjData)
    // console.log('message detail data is',messageDetail)
  useEffect(()=>{
   if(id){
    dispatch(getChatDetailAsync({loginId:id,anotherId:messageDetail._id}))
   }
  },[id,dispatch,messageDetail._id])

   
return (
    <>
    <MessageDetail messageDetail={messageDetail} chatIdObj={chatiIdObjData}  />
    </>
)
}
export default MessageDetailPage