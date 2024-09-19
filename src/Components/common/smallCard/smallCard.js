import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVisitorAsync } from "../../../Redux/Slice/addVisitorSlice/addVisitorSlice";
import { addCounterUserAsync } from "../../../Redux/Slice/addCounterUserSlice/addCounterUserSlice";
import io from "socket.io-client";
import { addNotifyAsync } from "../../../Redux/Slice/addNotifySlice/addNotifySlice";
import { addVisitorEmailSenderAsync } from "../../../Redux/Slice/addVisitorEmailSlice/addVisitorEmailSlice";
import '../../../../src/styles.css'
import FooterBlockModal from "../../footerBlockModal/footerBlockModal";
import axios from 'axios'
// const socket = io.connect("http://localhost:4000");
const socket = io.connect("https://apnapanbackend.onrender.com");
export const SmallCard = ({ userData, signupUserData, email, signupEmail ,selfOnlineLikeUserData}) => {
  const [message,setMessage]=useState('')
  const [chatOpenData, setChatOpenData] = useState(false);
  const [loginUser, setLoginUser] = useState(false)
  const [signUpUser, setSignUpUser] = useState(false)
  const [loginArray, setLoginArray] = useState([])
  const id=sessionStorage.getItem('userId')
  const dispatch=useDispatch()
  const navigate=useNavigate()


  const mainContentHandler=async(item)=>{
  navigate('/mainContent/newMainContent',{state:item})
  const visitorObjId={
    id:id,
    userId:item._id
  }
  const visitorEmailObj={
    id:id,
    recieverEmailId:item._id
  }
  dispatch(addVisitorAsync(visitorObjId))
  // dispatch(modalActions.visibleToggle())
  dispatch(addCounterUserAsync(visitorObjId))
  dispatch(addNotifyAsync(visitorObjId))
  dispatch(addVisitorEmailSenderAsync(visitorEmailObj))
 
}
const addChatHandler=(event)=>{
  // console.log('user data',userData)
  event.stopPropagation();
  const firstName = userData?.firstName || signupUserData?.firstName || '';
    setChatOpenData(true);
    setMessage(firstName)
}

const chatCloseModalData = () => {
  setChatOpenData(false);
};

// const selfOnlineLikeUser = selfOnlineLikeUserData?.filter((selfOnlineLikeData) => // array of obj  return hoga or ye obj common hoga jo ki selfOnlineLikeUserData and  userData dono present hoga
//   userData?.some((user) => user?.firstName === selfOnlineLikeData?.firstName)
// );
const selfOnlineLikeUser = selfOnlineLikeUserData?.filter((selfOnlineLikeItem)=>selfOnlineLikeItem?.firstName===userData?.firstName);
useEffect(() => {
  const getLoginIdUserAsync = async () => {
      try {
          // const response = await axios.get(`http://localhost:4000/user/getloginIdUser/${id}`);
          const response = await axios.get(`https://apnapanbackend.onrender.com/user/getloginIdUser/${id}`);
          // console.log('response of get loginId user', response.data)
          setLoginArray(response.data.loginIdUser)


      } catch (error) {
          console.error("Error fetching messages:", error);
      }
  };
  getLoginIdUserAsync()

  socket.on('recieveLoginUser', (newMessage) => {
      // console.log('reciever data', newMessage)
      setLoginArray(preMessages => [...preMessages, newMessage])
  })
  socket.on('deleteLoginIdUser', (deleteLoginUser) => {
      setLoginArray((prevMessages) =>
          prevMessages.filter((msg) => msg._id !== deleteLoginUser._id)
      );
  });

  return () => {
      socket.off('recieveLoginUser')
      socket.off('deleteLoginIdUser')
  }
}, [id])
// console.log('login array is',loginArray)
useEffect(()=>{
const loginDetailsUser=loginArray.some(loginItem=>loginItem?.loginId===userData?._id)
// console.log('login details users',loginDetailsUser)
if(loginDetailsUser){
  setLoginUser(true)
}
const signUpDetailsUser=loginArray.some(loginItem=>loginItem?.loginId===signupUserData?._id)
// console.log('login details users',loginDetailsUser)
if(signUpDetailsUser){
  setSignUpUser(true)
}

},[userData,loginArray,signupUserData])
  return (
    <>
      <div className="flex justify-center">
        <div className=" mt-8 ">
      
          {/* {email
            ? userData?.map((item) => {
                return (
                  <>
                  <div className="flex w-full ">
                  <div className="  overflow-hidden shadow-lg w-screen sm:w-96 new-Card bg-white mt-8 cursor-pointer" onClick={()=>mainContentHandler(item)}>
                      <div className="px-6 py-4 w-full ">
                        <div className="flex justify-between">
                        <div className="flex gap-4">
                          <div className="flex">
                          <img
                            // src={BACKEND_BASE_URL + item.images[0]}
                            src={item.images[0]}
                            className="w-16   rounded-full"
                            alt="images"
                          />
                          {loginUser===true?<p>online</p>:<p>offline</p>}
                          </div>
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
  
   <div className="mt-3 ">
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      // onClick={() => handleOpen(item)}
      onClick={(event)=>addChatHandler(item,event)}
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
            : null} */}

{email
            ?userData &&   <div className="flex w-full ">
            <div className="  overflow-hidden shadow-lg w-screen sm:w-96 new-Card bg-white  cursor-pointer" onClick={()=>mainContentHandler(userData)}>
                <div className="px-6 py-4 w-full ">
                  <div className="flex justify-between">
                  <div className="flex gap-6">
                    <div className="">
                    <img
                      // src={BACKEND_BASE_URL + item.images[0]}
                      src={userData.images[0]}
                      className="w-16   rounded-full"
                      alt="images"
                    />
                    {loginUser===true || signUpUser===true?<div className="ml-12 -mt-4 absolute">
                      <div className="rounded-full w-3 h-3 bg-green-400">
                      </div>
                    </div>:
                    <div className="ml-12 -mt-4 absolute">
 <div className="rounded-full w-3 h-3 bg-[red]">
                      </div>
                      </div>}
                    </div>
                    <div>
                      <p className="pt-3">{userData.firstName}</p>
                      <p className="pt-1">{userData.city}</p>
                    </div>
              
                  </div>
                  {
selfOnlineLikeUser?.map(selfOnlineLikeItem=>{
return (
<>
{selfOnlineLikeItem.firstName===userData.firstName?<p className='text-md text-end pt-4  font-semibold '>Liked!</p>:null}

</>
)
})
}

<div className="mt-3 ">
<button
class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
// onClick={() => handleOpen(item)}
onClick={(event)=>addChatHandler(event)}
>
Add chat
</button>
</div>
                  </div>
                 
                </div>
              </div>

           
                   
            </div>
              
            : null}

          {signupEmail
            ? signupUserData && <div className="flex ">
            <div className="  overflow-hidden shadow-lg w-96 bg-white cursor-pointer" onClick={()=>mainContentHandler(signupUserData)}>
                <div className="px-6 py-4 w-full ">
                  <div className="flex justify-between">
                  <div className="flex gap-6">
                  <div className="">
                  <img
                      // src={BACKEND_BASE_URL + item.images[0]}
                      src={signupUserData.images[0]}
                      className="w-16   rounded-full"
                      alt="images"
                    />
                    {signUpUser===true?<div className="ml-12 -mt-4 absolute">
                      <div className="rounded-full w-3 h-3 bg-green-400">
                      </div>
                    </div>:
                    <div className="ml-12 -mt-4 absolute">
 <div className="rounded-full w-3 h-3 bg-[red]">
                      </div>
                      </div>}
                  </div>
                    <div>
                      <p className="pt-3">{signupUserData.firstName}</p>
                      <p className="pt-1">{signupUserData.city}</p>
                    </div>
              
                  </div>
                  {
selfOnlineLikeUser?.map(selfOnlineLikeItem=>{
return (
<>
{selfOnlineLikeItem.firstName===signupUserData.firstName?<p className='text-md text-end pt-4  font-semibold '>Liked!</p>:null}
</>
)
})
}
<div className="mt-3">
<button
class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
// onClick={() => handleOpen(item)}
onClick={(event)=>addChatHandler(event)}
>
Add chat
</button>
</div>
                  </div>
                 
                </div>
              </div>

           
                   
            </div>
            : null}
        </div>
      </div>
      <FooterBlockModal  footerOpenData={chatOpenData}  footerSubName={message} footerCloseModal={chatCloseModalData}/>
    </>
  );
};
