import React, { useState,useEffect } from "react";
import { BACKEND_BASE_URL } from "../../../Services/api";
import emailjs from '@emailjs/browser'
import axios from "axios";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import message from "../../../assets/modalIcons/message.png";
// import send from "../../../assets/modalIcons/sendIcon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVisitorAsync } from "../../../Redux/Slice/addVisitorSlice/addVisitorSlice";
import { addToChatAsync } from "../../../Redux/Slice/addToChatSlice/addToChatSlice";
// import { sendMessageAsync } from "../../../Redux/Slice/sendMessageSlice/sendMessageSlice";
// import { addChatHandlerAsync } from "../../../Redux/Slice/addChatHandlerSlice/addChatHandlerSlice";
// import { modalActions } from "../../../Redux/Slice/modalSlice";
import { addCounterUserAsync } from "../../../Redux/Slice/addCounterUserSlice/addCounterUserSlice";
import io from "socket.io-client";
import { modalActions } from "../../../Redux/Slice/modalSlice";
import { addNotifyAsync } from "../../../Redux/Slice/addNotifySlice/addNotifySlice";
import { addVisitorEmailSenderAsync } from "../../../Redux/Slice/addVisitorEmailSlice/addVisitorEmailSlice";
import '../../../../src/styles.css'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};
export const SmallCard = ({ userData, signupUserData, email, signupEmail ,selfOnlineLikeUserData}) => {

  console.log('self online ',selfOnlineLikeUserData)
  const socket = io.connect("http://localhost:4000");
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [selfOnlineLike,setSelfOnlineLike]=useState(true)
  const [messages,setMessage]=useState('')
  const [obj,setObj]=useState({})
  const id=sessionStorage.getItem('userId')
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const loginData=JSON.parse(sessionStorage.getItem('loginObject'))
  console.log('login details data',loginData)
  // const handleClose = () => setOpen(false);
  // const handleOpen = (item) => {
  //   console.log('item is',item)
  //   setObj(item)
  //   const addToChat={
  //     id:id,
  //     chatId:item._id
  //   }
  //   setOpen(true);
  //   const Name = item.firstName;
  //   setName(Name);
  //   dispatch(addToChatAsync(addToChat))
  // };
  // useEffect(() => {
  //   // WebSocket message listener
  //   socket.on("visitorAdded", (visitorData) => {
  //     console.log("New visitor added:", visitorData);
  //     // You can update your UI or perform other actions here
  //   });
  //   // socket.on("countUserAdded", (counterData) => {
  //   //   console.log("New user count added:", counterData);
  //   //   // You can update your UI or perform other actions here
  //   // });
  //   // Clean up WebSocket listener on component unmount
  //   return () => {
  //     socket.off("visitorAdded");
  //     socket.off('countUserAdded')
  //   };
  // }, []);
  useEffect(() => {
    // Emit "setup" event to the server to establish the connection with the user's id
    socket.emit("setup", id);

    // Listen for "connected" event from the server
    socket.on("connected", (message) => {
        console.log('Socket is connected:', message);
    });

    // Clean up function to disconnect the socket on component unmount
    return () => {
        socket.disconnect();
    };
}, [id, socket]);

  const mainContentHandler=async(item)=>{
  console.log('main content',item)
  // const serviceId="service_amqtgj4"
  // const templateId="template_jlr3jns"
  // const publicKey="3bvV0zSUyDmusoTIX"
  navigate('/mainContent/newMainContent',{state:item})
  const visitorObjId={
    id:id,
    userId:item._id
  }
  // const emailObj={
  //   service_id:serviceId,
  //   template_id:templateId,
  //   user_id:publicKey,
  //   emailData:{
  //     from_name:loginData.firstName,
  //     from_email:loginData.email,
  //     to_name:item.firstName,
  //     message:`${loginData.firstName} visited you / browse through your profile.Go check it out`
  //   }
  // }
  // emailjs.send(serviceId,templateId,emailObj.emailData,publicKey).then((response)=>{
  //   console.log('email sent successfully',response)
  // })
  const visitorEmailObj={
    id:id,
    recieverEmailId:item._id
  }
  dispatch(addVisitorAsync(visitorObjId))
  // dispatch(modalActions.visibleToggle())
  dispatch(addCounterUserAsync(visitorObjId))
  dispatch(addNotifyAsync(visitorObjId))
  dispatch(addVisitorEmailSenderAsync(visitorEmailObj))
  // window.location.reload()
//  try{
//   const response = await axios.post(`http://localhost:4000/user/addCountUser/${visitorObjId.id}`, visitorObjId);
//   console.log('message of data is',response.data)
//   socket.emit("new counter", response.data);
//  }catch (error) {
//             console.error('Error sending message:', error);
//         }
}
// const textHandler=(event)=>{
// setMessage(event.target.value)
// }


// const sendMessageHandler=(e)=>{
//   e.preventDefault()
// const sendMessage={
//   sender:id,
//   message:messages,
//   chat:obj._id
// }
// console.log('obj is',sendMessage)
// dispatch(sendMessageAsync(sendMessage))
// setMessage('')
// }

const addChatHandler=(item)=>{
const addChatId={
  id:id,
  addToChatId:item._id
}
const addToChat={
      id:id,
      chatId:item._id
    }
// dispatch(addChatHandlerAsync(addChatId))
// dispatch(addToChatAsync(addToChat))
}

const selfOnlineLikeUser = selfOnlineLikeUserData?.filter((selfOnlineLikeData) => // array of obj  return hoga or ye obj common hoga jo ki selfOnlineLikeUserData and  userData dono present hoga
  userData?.some((user) => user?.firstName === selfOnlineLikeData?.firstName)
);

console.log('self online like', selfOnlineLikeUser);
const commonUsers = selfOnlineLikeUserData?.filter((selfOnlineLikeData) =>
userData?.some((user) => user?.firstName === selfOnlineLikeData?.firstName)
);

console.log('Common Users:', commonUsers);
  return (
    <>
      <div className="flex justify-center">
        <div className=" mt-12 ">
        {/* <div className="flex w-full ">
                  <div className="  overflow-hidden shadow-lg w-screen sm:w-96 new-Card bg-white mt-8 cursor-pointer" onClick={()=>mainContentHandler(item)}>
                      <div className="px-6 py-4 w-full ">
                        <div  className="flex justify-between">
                        <div className="flex gap-4">
                          <img
                            // src={BACKEND_BASE_URL + item.images[0]}
                            src={item.images[0]}
                            className="w-16   rounded-full"
                          />
                          <div>
                            <p className="pt-3">{item.firstName}</p>
                            <p className="pt-1">{item.city}</p>
                          </div>
                    
                        </div>
                        </div>
                        </div>
                        </div>
                        </div> */}
          {email
            ? userData?.map((item) => {
                return (
                  <>
                  <div className="flex w-full ">
                  <div className="  overflow-hidden shadow-lg w-screen sm:w-96 new-Card bg-white mt-8 cursor-pointer" onClick={()=>mainContentHandler(item)}>
                      <div className="px-6 py-4 w-full ">
                        <div className="flex justify-between">
                        <div className="flex gap-4">
                          <img
                            // src={BACKEND_BASE_URL + item.images[0]}
                            src={item.images[0]}
                            className="w-16   rounded-full"
                          />
                          <div>
                            <p className="pt-3">{item.firstName}</p>
                            <p className="pt-1">{item.city}</p>
                          </div>
                    
                        </div>
                        {
  selfOnlineLikeUser?.map(selfOnlineLikeItem=>{
    return (
      <>
      {selfOnlineLikeItem.firstName===item.firstName?<p className='text-md text-end pt-4  font-semibold '>Liked!</p>:null}
 
      </>
    )
  })
  }
  
   <div className="mt-3">
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      // onClick={() => handleOpen(item)}
      onClick={()=>addChatHandler(item)}
    >
    Add chat
    </button>
  </div>
                        </div>
                       
                      </div>
                    </div>
    
                 
                         
                  </div>
                    
                  </>
                );
              })
            : null}

          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="flex justify-center">
                <img src={message} className="w-12" />
              </div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <p className="text-lg text-center pt-3">
                  send message to {name}
                </p>
              </Typography>
              <form >
              <div class=" mt-8 flex ">
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12"
                  id="username"
                  type="text"
                  placeholder="Say something..."
                  onChange={textHandler}
                 value={messages}
                />
          
                <img
                  src={send}
                  className="w-8 -ml-10 h-8 mt-2 cursor-pointer" 
                  onClick={sendMessageHandler}
                />
              
          
              </div>
              </form>
            </Box>
          </Modal> */}
          {signupEmail
            ? signupUserData?.map((item) => {
                return (
                  <>
                <div className="flex ">
                  <div className="  overflow-hidden shadow-lg w-96 bg-white mt-8 cursor-pointer" onClick={()=>mainContentHandler(item)}>
                      <div className="px-6 py-4 w-full ">
                        <div className="flex justify-between">
                        <div className="flex gap-4">
                          <img
                            // src={BACKEND_BASE_URL + item.images[0]}
                            src={item.images[0]}
                            className="w-16   rounded-full"
                          />
                          <div>
                            <p className="pt-3">{item.firstName}</p>
                            <p className="pt-1">{item.city}</p>
                          </div>
                    
                        </div>
                        {
  selfOnlineLikeUser?.map(selfOnlineLikeItem=>{
    return (
      <>
      {selfOnlineLikeItem.firstName===item.firstName?<p className='text-md text-end pt-4  font-semibold '>Liked!</p>:<div className="mt-3">
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      // onClick={() => handleOpen(item)}
      onClick={()=>addChatHandler(item)}
    >
    Add chat
    </button>
  </div>}
      </>
    )
  })
  }
                        </div>
                       
                      </div>
                    </div>
    
                 
                         
                  </div>
                  </>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};
