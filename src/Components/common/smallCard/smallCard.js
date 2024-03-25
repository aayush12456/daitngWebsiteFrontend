import React, { useState } from "react";
import { BACKEND_BASE_URL } from "../../../Services/api";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import message from "../../../assets/modalIcons/message.png";
import send from "../../../assets/modalIcons/sendIcon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVisitorAsync } from "../../../Redux/Slice/addVisitorSlice/addVisitorSlice";
import { addToChatAsync } from "../../../Redux/Slice/addToChatSlice/addToChatSlice";
import { sendMessageAsync } from "../../../Redux/Slice/sendMessageSlice/sendMessageSlice";
import { addChatHandlerAsync } from "../../../Redux/Slice/addChatHandlerSlice/addChatHandlerSlice";
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
export const SmallCard = ({ userData, signupUserData, email, signupEmail }) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [messages,setMessage]=useState('')
  const [obj,setObj]=useState({})
  const id=sessionStorage.getItem('userId')
  const dispatch=useDispatch()
  const navigate=useNavigate()
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
  const mainContentHandler=(item)=>{
  console.log('main content',item)
  navigate('/mainContent/newMainContent',{state:item})
  const visitorObjId={
    id:id,
    userId:item._id
  }
  dispatch(addVisitorAsync(visitorObjId))
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
dispatch(addToChatAsync(addToChat))
}
  return (
    <>
      <div className="flex justify-center">
        <div className=" mt-12 ">
          {email
            ? userData.map((item) => {
                return (
                  <>
                  <div className="flex ">
                  <div className="  overflow-hidden shadow-lg w-96 bg-white mt-8 cursor-pointer" onClick={()=>mainContentHandler(item)}>
                      <div className="px-6 py-4 w-full ">
                        <div className="flex gap-4">
                          <img
                            src={BACKEND_BASE_URL + item.images[0]}
                            className="w-16   rounded-full"
                          />
                          <div>
                            <p className="pt-3">{item.firstName}</p>
                            <p className="pt-1">{item.city}</p>
                          </div>
                    
                        </div>
                      </div>
                    </div>
                    <div className="mt-16 -ml-36">
                            <button
                              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                              // onClick={() => handleOpen(item)}
                              onClick={()=>addChatHandler(item)}
                            >
                            Add chat
                            </button>
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
            ? signupUserData.map((item) => {
                return (
                  <>
                  <div className="flex">
                    <div class="  overflow-hidden shadow-lg w-96 bg-white mt-8" onClick={()=>mainContentHandler(item)}>
                      <div class="px-6 py-4 w-full ">
                        <div className="flex gap-4">
                          <img
                            src={BACKEND_BASE_URL + item.images[0]}
                            className="w-16   rounded-full"
                          />
                          <div>
                            <p className="pt-3">{item.firstName}</p>
                            <p className="pt-1">{item.city}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-16 -ml-36">
                            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"  >
                            Add chat
                            </button>
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
