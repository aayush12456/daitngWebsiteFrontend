import { useNavigate } from "react-router-dom"
import { BACKEND_BASE_URL } from "../../Services/api"
import { useState ,useEffect} from "react"
import send from '../../assets/modalIcons/sendIcon.png'
import {  useDispatch } from "react-redux"
import { addToChatAsync } from "../../Redux/Slice/addToChatSlice/addToChatSlice"
import axios from '../../Redux/axios/messageAxios'
import io from "socket.io-client";
const Message=({chatArray})=>{
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
    console.log('message detail',chatItem)
    const addToChat={
        id:id,
        chatId:chatItem._id
      }
    dispatch(addToChatAsync(addToChat))
    navigate('/mainContent/messageDetail',{state:chatItem})    
    }
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

    useEffect(() => {
        socket.emit("setup", id);
        socket.on("connected", (message) => {
          console.log('socket is',message);
        });
      
      }, []);
      useEffect(() => {
        socket.on("message received", (newMessage) => {
          console.log('new message is',newMessage)
          setMessages((prev) => [...prev, newMessage]);
        });
      }, [socket]);
      const messageChangeHandler=(event)=>{
      setMessage(event.target.value)
      }
      const messageSubmitHandler=async(e)=>{
      e.preventDefault()
      const messageData={
          sender:id,
          message:message,
          chat:obj._id
      }
        // dispatch(sendMessageAsync(messageData))
        const response = await axios.post("http://localhost:4000/message/send",messageData);
        socket.emit("new message", response.data.message);
      setMessage('')
      console.log('message is',messageData)
      }
      const fetchMessage = async (id) => {
        const response = await axios.post("http://localhost:4000/message/fetch", {
          // sender:id,
          chat: obj._id,
        });
        console.log('response is',response)
        setMessages(response.data.message)
        socket.emit("join chat", obj._id);
      };
      useEffect(()=>{
   fetchMessage()
      },[obj])
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
{show &&<div class="w-[40rem] rounded-2xl overflow-hidden shadow-lg mt-8 h-96 flex flex-col justify-between">
        <div class="w-screen">
            <div className="flex gap-4 ml-7">
                <img src={BACKEND_BASE_URL + obj?.images[0]} className="w-16  rounded-full" />
                <p className="pt-3">{obj.firstName} , </p>
                <p className="pt-3">{age} </p>
                <p className="pt-3">{obj.city} </p>
            </div>
            <hr className="w-full mt-5" />
        </div>
        <div>
        {
    messages.map((message, index) => (
        <div key={index} className={`text-${message.sender === id ? 'right' : 'left'} flex justify-${message.sender === id ? 'end' : 'start'}`}>
            <span className={`bg-${message.sender === id ? 'to-blue-600' : 'white'} p-2 rounded-lg`}>
                {message.message}
            </span>
        </div>
    ))
}
        </div>
        <form>
        <div className="mt-11 ml-4 flex mb-2 ">
            <input
                class="shadow appearance-none border rounded w-[38rem]   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12"
                id="username"
                type="text"
                placeholder="Message"
                onChange={messageChangeHandler}
                value={message}
            />
            <img
                src={send}
                className="w-8 h-8 mt-2 -ml-10 cursor-pointer"
                onClick={messageSubmitHandler}
            />
        </div>
        </form>
       
    </div>}
        </>
    )
}
export default Message