import { useNavigate } from "react-router-dom"
import { BACKEND_BASE_URL } from "../../Services/api"
import { useState ,useEffect} from "react"
import send from '../../assets/modalIcons/sendIcon.png'
import {  useDispatch } from "react-redux"
import { addToChatAsync } from "../../Redux/Slice/addToChatSlice/addToChatSlice"
import axios from '../../Redux/axios/messageAxios'
import io from "socket.io-client";
const Message=({chatArray,chatId})=>{
    const navigate=useNavigate()
    const [obj,setObj]=useState({})
    const [show,setShow]=useState(false)
    const [message,setMessage]=useState('')
    const [messages, setMessages] = useState([]);
    const socket = io.connect("http://localhost:4000");
    const dispatch=useDispatch()
    const id=sessionStorage.getItem('userId')
    const dob = obj.DOB;
    const dobBreak = dob?.split("/");
    const year = dobBreak?.[2];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    const age = year ? currentYear - parseInt(year) : "";
    const messageDetail=(chatItem)=>{
        const updatedChatItem = { ...chatItem, chatId: chatId };
    const addToChat={
        id:id,
        chatId:chatItem._id
      }
    dispatch(addToChatAsync(addToChat))
    navigate('/mainContent/messageDetail',{state:updatedChatItem})    
    }
    console.log('chat is',chatId)
    // const chatDetail=(item)=>{
    //     console.log('itemfdfd',item)
    //     const addToChat={
    //         id:id,
    //         chatId:item._id
    //       }
    //     dispatch(addToChatAsync(addToChat))
    // setObj(item)
    // setShow(!show)
    // }

   
    return (
        <>
        {/* <div className="flex mt-4 gap-4 ml-4 " onClick={messageDetail}>
        <img src={BACKEND_BASE_URL+message.images[0]}   className="w-16  rounded-full" />
                    <p className="pt-3">{message.firstName}</p>
        </div>
       <hr className="mt-4"/> */}
      {!show && <div  class="w-[40rem] rounded-2xl overflow-hidden shadow-lg mt-8">

  <div class=" cursor-pointer w-screen">
 {
    chatArray?.map(chatItem=>{
        return (
            <>
         <div className="flex mt-4 gap-4 ml-4 " onClick={()=>messageDetail(chatItem)}>
        <img src={BACKEND_BASE_URL+chatItem.images[0]}   className="w-16  rounded-full" />
                    <p className="pt-3">{chatItem.firstName}</p>
        </div>
       <hr className="mt-4"/>
            </>
        )
    })
 }
  </div>

</div>}
{/* messageDetail */}

        </>
    )
}
export default Message