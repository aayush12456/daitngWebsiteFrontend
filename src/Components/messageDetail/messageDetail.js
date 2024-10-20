import { useEffect, useState } from "react";
import axios from 'axios'
import io from "socket.io-client";
import send from '../../assets/modalIcons/sendIcon.png';
import { useDispatch, useSelector } from 'react-redux'
import { getChatDetailAsync } from "../../Redux/Slice/getChatDetailSlice/getChatDetailSlice";
import leftArrow from '../../assets/personalProfileIcons/leftArrow.svg'
import { useNavigate } from "react-router-dom";
import chatIndicator from '../../assets/chatIcons/chat.gif'
import fourIcon from '../../assets/chatIcons/dots.svg'
import moreIcon from '../../assets/chatIcons/more.png'
import unsendIcon from '../../assets/chatIcons/unsend.png'
import { dotsOpenSliceActions } from "../../Redux/Slice/dotsOpenSlice";
import { chatModalData } from "../../utils/chatModalData";
import { addBlockUserAsync } from "../../Redux/Slice/addBlockUserSlice/addBlockUserSlice";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import '../../styles.css'
import ViewProfileModal from "../viewProfileModal/viewProfileModal";
import ChatWithExpertModal from "../chatWithExpertModal/chatWithExpertModal";
import { moreChatActions } from "../../Redux/Slice/moreChatSlice";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const style = {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    animation: 'dropDown 1s ease-out',
    '@media (min-width: 300px) and (max-width: 350px)': {
        width: 300,
        left: "50%",
        top: "50%",

    },
    '@media (min-width: 350px) and (max-width: 400px)': {
        width: 350,
        left: "50%",
        top: "50%"
    },
    '@media (min-width: 400px) and (max-width: 500px)': {
        width: 400,
        left: "50%",
        top: "50%"
    },
    '@media (min-width: 500px) and (max-width: 600px)': {
        width: 450,
        left: "50%",
        top: "50%"
    },
    '@media (min-width: 600px) and (max-width: 700px)': {
        width: 500,
        left: "50%",
        top: "50%"
    },
};

function CustomToast({ image, name, mssg }) {
    return (
        <>
            <div className='flex  text-center gap-4 '>
                <img src={image} className='w-12 h-12 ' alt="visitorUser" />
                <div>
                    <p className='text-semibold'>{name} message you</p>
                    <p className="text-gray-300">{mssg}</p>
                </div>
            </div>

        </>
    );
}
// const socket = io.connect("http://localhost:4000")
const socket = io.connect("https://apnapandaitingwebsitebackend.up.railway.app")
const MessageDetail = ({ messageDetail, chatIdObj }) => {
    // console.log('message detail is', messageDetail)
    const id = sessionStorage.getItem('userId')
    const loginObj = JSON.parse(sessionStorage.getItem('loginObject'))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dotsSelector = useSelector((state) => state.dotsOpenSlice.dotsOpenToggle)
    const moreChatSelector = useSelector((state) => state.moreChat.moreChatToggle)
    const [message, setMessage] = useState('');
    const [loginUser,setLoginUser]=useState(false)
    const [loginArray,setLoginArray]=useState([])
    const [fetchMessages, setFetchMessages] = useState([]);
    const [recieveMssgNotify, setRecieveMssgNotify] = useState([]);
    const [finalMessageArray, setFinalMessageArray] = useState([])
    const [filterMssgNotify, setFilterMssgNotify] = useState([])
    // const [shownMessages, setShownMessages] = useState([]);
    const [confirmData, setConfirmData] = useState(false)
    const [hoveredMessage, setHoveredMessage] = useState(null);
    const [blockObj, setBlockObj] = useState({})
    const [openIndex, setOpenIndex] = useState('')
    const [showTyping, setShowTyping] = useState('')
    const [viewProfileModal, setViewProfileModal] = useState(false)
    const [expertModal, setExpertModal] = useState(false);
    const getProfile = () => messageDetail || {};
    const dob = getProfile().DOB;
    const dobBreak = dob?.split("/");
    const year = dobBreak?.[2];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    const age = year ? currentYear - parseInt(year) : "";


    const backMessageHandler = () => {
        navigate('/mainContent/allMessages')
    }
    const messageChangeHandler = async (event) => {
        setMessage(event.target.value)
        const postTypeObj = {
            loginId: id,
            senderId: id,
            recieverId: messageDetail._id,
            message: event.target.value
        }

        try {
            // const response = await axios.post(`http://localhost:4000/chat/postTyping`, postTypeObj);
            const response = await axios.post(`https://apnapandaitingwebsitebackend.up.railway.app/chat/postTyping`, postTypeObj);
            // console.log('message typing  of data is', response.data.data)
            socket.emit('typingMessage', response.data.data)
            // setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    //get typing
    useEffect(() => {
        const getTypeMessage = async () => {
            try {
                // const response = await axios.get(`http://localhost:4000/chat/getTyping/${id}`);
                const response = await axios.get(`https://apnapandaitingwebsitebackend.up.railway.app/chat/getTyping/${id}`);
                // console.log('get type  messages is', response.data.typeData)
                setShowTyping(response.data.typeData)

            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        getTypeMessage()
        socket.on('getTypingMessage', (getTypeMessage) => {
            setShowTyping(getTypeMessage)
        })


        return () => {
            socket.off('getTypingMessage')
        }
    }, [id])
    // console.log('get typing data is', showTyping)
    const messageSubmitHandler = async (e) => {
        e.preventDefault()
        const messageSubmitData = {
            id: id,
            senderId: id,
            recieverId: messageDetail?._id,
            message: message,
            senderName: loginObj?.firstName,
            images: loginObj?.images[0]
        }
        if(messageSubmitData.message===''){
            return
        }
        // console.log('sending message is', messageSubmitData)
        try {
            // const response = await axios.post(`http://localhost:4000/chat/senderId/${messageSubmitData.id}`, messageSubmitData);
            const response = await axios.post(`https://apnapandaitingwebsitebackend.up.railway.app/chat/senderId/${messageSubmitData.id}`, messageSubmitData);
            // console.log(' send message of data is', response.data.chatUser)
            // console.log('message of sender notify', response.data.senderUser)
            socket.emit('sendMessage', response.data.chatUser)
            socket.emit('messageNotify', response.data.senderUser)
            socket.emit('recordChat', response.data.recordChat)
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                // const response = await axios.get(`http://localhost:4000/chat/getMessage/${id}`);
                const response = await axios.get(`https://apnapandaitingwebsitebackend.up.railway.app/chat/getMessage/${id}`);
                // console.log('fetch messages is', response.data.chatUserArray)
                // console.log('fetch message in reciever', response.data.recieverChatUserArray)
                setFetchMessages(response.data.chatUserArray);


            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        fetchMessage()
        socket.on('recieveMessage', (newMessage) => {
            setFetchMessages(preMessages => [...preMessages, newMessage])
        })
        socket.on('messageDeleted', (deletedMessage) => {
            setFetchMessages((prevMessages) =>
                prevMessages.filter((msg) => msg._id !== deletedMessage._id)
            );
        });

        return () => {
            socket.off('recieveMessage')
            socket.off('messageDeleted');
        }
    }, [id])

    useEffect(() => {
        if (id) {
            const filterMessageArray = fetchMessages.filter((messageItem) => messageItem.chatId === chatIdObj?._id)
            setFinalMessageArray(filterMessageArray)

        }
    }, [id, fetchMessages,chatIdObj?._id])
    //    console.log('final message Array is',finalMessageArray)
    useEffect(() => {
        const getMessageNotify = async () => {
            try {
                // const response = await axios.get(`http://localhost:4000/user/getMessageNotify/${id}`);
                const response = await axios.get(`https://apnapandaitingwebsitebackend.up.railway.app/user/getMessageNotify/${id}`);
                // console.log('get messages notify is', response.data)
                setRecieveMssgNotify(response.data.messageNotify)


            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        getMessageNotify()
        socket.on('recieveMessageNotify', (newMessageNotify) => {
            setRecieveMssgNotify(preMessages => [...preMessages, newMessageNotify])
        })
        return () => {
            socket.off('recieveMessageNotify')
        }
    }, [id])
    // console.log('recive message notify using socket', recieveMssgNotify)


    useEffect(() => {
        if (id) {
            const filterMessageNotify = recieveMssgNotify.filter((recieveMessageNotify) => recieveMessageNotify.chatId !== chatIdObj?._id)
            const finalFilterMssgNotify = filterMessageNotify.filter(filterMssg => filterMssg.recieverId === id)
            setFilterMssgNotify(finalFilterMssgNotify)
            // console.log('final message Array is',filterMessageArray)

        }
    }, [id, recieveMssgNotify, chatIdObj])
    // console.log('filter message notify Array is', filterMssgNotify)



    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem('shownMessages')) || [];
        // setShownMessages(storedMessages);

        filterMssgNotify.forEach(finalMssg => {
            if (!storedMessages.includes(finalMssg.message)) {
                toast.error(
                    <CustomToast image={finalMssg?.images} name={finalMssg?.senderName} mssg={finalMssg?.message} />,
                    {
                        autoClose: 5000, // Auto close the toast after 5 seconds
                        icon: false
                    }
                );

                const updatedMessages = [...storedMessages, finalMssg.message];
                // setShownMessages(updatedMessages);
                localStorage.setItem('shownMessages', JSON.stringify(updatedMessages));
            }
        });
    }, [filterMssgNotify]);
    //ye purane wala hai notfication ke liye
    // useEffect(() => {
    //     filterMssgNotify.map(finalMssg=>{
    //         console.log('message is socket',finalMssg.message)
    //    toast.error(<CustomToast image={finalMssg?.images}   name={finalMssg?.senderName} mssg={finalMssg?.message}/>,
    //    {
    //      autoClose: 5000, // Auto close the toast after 5 seconds,
    //     icon:false
    //    })
    //    })
    //   }, [filterMssgNotify]);



    useEffect(() => {
        const chatidObj = {
            loginId: id,
            anotherId: messageDetail?._id
        }
        if (chatidObj) {
            dispatch(getChatDetailAsync(chatidObj))
        }
    }, [dispatch, id, messageDetail?._id])

    // console.log('final message Array is', finalMessageArray)


    useEffect(()=>{
        const getLoginIdUserAsync = async () => {
            try {
                // const response = await axios.get(`http://localhost:4000/user/getloginIdUser/${id}`);
                const response = await axios.get(`https://apnapandaitingwebsitebackend.up.railway.app/user/getloginIdUser/${id}`);
                // console.log('response of get loginId user',response.data)
                setLoginArray(response.data.loginIdUser)
           
             
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        getLoginIdUserAsync()
      
        socket.on('recieveLoginUser',(newMessage)=>{
            // console.log('reciever data',newMessage)
            setLoginArray(preMessages=>[...preMessages,newMessage])
        })
        // socket.on('loginUserDeleted', (deletedMessage) => {
        //     setLoginArray((prevMessages) =>
        //       prevMessages.filter((msg) => msg._id !== deletedMessage._id)
        //     );
        //   });
        return ()=>{
            socket.off('recieveLoginUser')
        }
       },[id])
    // console.log('recieve login array',loginArray)
    
        useEffect(()=>{
            // const loginIdDetailsUser=loginIdUserSelectorArray?.some((loginIdUser)=>loginIdUser.loginId===chatItem._id)
            const loginIdDetailsUser=loginArray?.some((loginIdUser)=>loginIdUser.loginId===messageDetail._id)
            if(loginIdDetailsUser){
             setLoginUser(true)
            }
        },[loginArray,messageDetail])
       
    const dotsOpenHandler = () => {
        dispatch(dotsOpenSliceActions.dotsVisibleToggle())
    }

    const chatDataOpenHandler = (chatItem) => {
        if (chatItem.title === 'Block') {
            const blockUserObj = {
                id: id,
                blockId: messageDetail._id
            }
            setBlockObj(blockUserObj)
            setConfirmData(true)
        }
        else if (chatItem.title === 'View profile') {
            setViewProfileModal(true)
        }
        else if (chatItem.title === 'Chat With Expert') {
            setExpertModal(true)
        }
    }
    const handleClose = () => {
        setConfirmData(false)
        dispatch(dotsOpenSliceActions.dotsVisibleToggle())
    };
    const confirmDeletehandler = () => {
        dispatch(addBlockUserAsync(blockObj))
        navigate('/mainContent/allMessages')
        window.location.reload()
    }
    const closeViewProfileModal = () => {
        setViewProfileModal(false)
        dispatch(dotsOpenSliceActions.dotsVisibleToggle())
    }
    const closeExpertChatModal = () => {
        setExpertModal(false)
        dispatch(dotsOpenSliceActions.dotsVisibleToggle())
    }
    const moreCardHandler = (index) => {
        dispatch(moreChatActions.moreChatToggle())
        setOpenIndex(index)
    }
    const deleteChatHandler = async (deleteItem) => {
        // console.log('delete item is', deleteItem)
        try {
            // await axios.post(`http://localhost:4000/chat/deleteChat`, deleteItem);
            await axios.post(`https://apnapandaitingwebsitebackend.up.railway.app/chat/deleteChat`, deleteItem);
            // console.log('message of delete chat data is', response.data)

        } catch (error) {
            console.error('Error sending message:', error);
        }
        dispatch(moreChatActions.moreChatToggle())
    }

    const lastMessageFromSender = finalMessageArray
        .filter(message => message.senderId === messageDetail._id)
        .slice(-1)[0]; // Get the last element from the filtered array
    // console.log('last message data', lastMessageFromSender)
    return (
        <>
            <div className="flex justify-center">
                <div className="xl:w-[75rem] mssgCard  xl:ml-60 h-screen  xl:h-[38rem] md:w-[32rem] md:ml-60 rounded-2xl overflow-hidden shadow-lg xl:mt-5  flex flex-col justify-between bg-white">
                    <div className="w-screen bg-slate-50">
                        <div className="flex xl:gap-96 justify-between xl:justify-start">
                            <div className="flex gap-3 ml-4 mt-3">
                                <img src={leftArrow} alt="left-Arrow" className="w-4 cursor-pointer" onClick={backMessageHandler} />
                                <img src={messageDetail?.images[0]} className="w-16 rounded-full " alt="User avatar" />
                                <div>
                                    <div className="flex gap-2">
                                        <p className="pt-3 font-semibold">{messageDetail?.firstName}, </p>
                                        <p className="pt-3 font-semibold">{age},</p>
                                        <p className="pt-3 font-semibold">{messageDetail?.city}</p>
                                    </div>
                                    <div>
                                        {loginUser === true ? <p className="text-green-400">online</p> : null}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7 cursor-pointer mr-5 md:mr-80  xl:ml-[25rem] fourIcon">
                                <img src={fourIcon} className="w-7" onClick={dotsOpenHandler} alt="fourIcon" />
                            </div>
                        </div>

                        <hr className="w-full mt-5" />
                    </div>
                    {/* // open modal */}
                   <div className="flex justify-end">
                   {dotsSelector && <div className="fixed xl:top-52 top-40 xl:right-96 xl:-mr-72 mt-1 z-50 extraModalCard ">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            {
                                chatModalData.map(chatItem => {
                                    return (
                                        <>
                                            <div className="flex mt-4 ml-4 mr-4 gap-2 mb-4 ">
                                                <img src={chatItem.img} className="w-9 cursor-pointer" alt="chatImage" onClick={() => chatDataOpenHandler(chatItem)} />
                                                <p className="text-sm pt-1 cursor-pointer" onClick={() => chatDataOpenHandler(chatItem)}>{chatItem.title}</p>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>}
                   </div>
                    {/* //close modal */}
                    <div className=" xl:mt-0  chatManage" style={{ maxHeight: `${finalMessageArray.length > 5 ? '600px' : ''}`, overflowY: 'auto' }}>
                        {finalMessageArray.map((message, index) => (
                            <div key={index} className={` text-${message?.senderId === id ? 'right' : 'left'} flex justify-${message?.senderId === id ? 'end' : 'start'}
                     ${message?.senderId === id ? 'mt-1 mr-2' : 'mt-1 ml-3'} `} onMouseEnter={() => setHoveredMessage(index)}
                                onMouseLeave={() => setHoveredMessage(null)}>
                                {moreChatSelector && message?.senderId === id && openIndex === index && <div key={openIndex} class="max-w-sm rounded overflow-hidden shadow-lg  ">
                                    <div className="flex gap-3 justify-between ml-4 mr-4  ">
                                        <p className="text-red-500 cursor-pointer" onClick={() => deleteChatHandler(message)}>Unsend</p>
                                        <img src={unsendIcon} className="w-3 h-3 mt-2" alt="unsendIcon" />
                                    </div>
                                </div>}
                                <div className="flex gap-2 ">
                                    {hoveredMessage === index && message?.senderId === id ? <img src={moreIcon} className="w-4 h-4 mt-2 cursor-pointer hidden sm:block" alt="moreIcon" onClick={() => moreCardHandler(index)} /> : null}
                                    {message?.senderId === messageDetail?._id ? <img src={`${message?.senderId === messageDetail?._id ? messageDetail?.images[0] : null}`} className=" rounded-full w-10" alt="sender" /> : null}
                                    <div className={`rounded-lg   ${message?.senderId === id ? 'bg-blue-600' : 'bg-gray-200'}`} onClick={()=>moreCardHandler(index)}>
                                        <p className={`p-2  text-center  ${message?.senderId === id ? ' text-white' : 'text-black'}`} >
                                            {message?.message}
                                            <div className={` flex ${message?.recieverId === messageDetail?._id || message?.recieverId === id ? 'justify-end pr-3 pl-3 ' : ''}`}>
                                                {(message?.senderId === id && message?.recieverId === messageDetail?._id) ||
                                                    (message?.senderId === messageDetail?._id && message?.recieverId === id) ?
                                                    <p style={{ fontSize: '10px' }} className={`${message?.senderId === id ? ' text-white' : 'text-black'}`}>{new Date(message.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p> : null}
                                            </div>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                        {showTyping?.senderId === messageDetail?._id && showTyping?.message !== "" && showTyping?.message !== lastMessageFromSender?.message
                            && <div className="flex justify-start   mt-4 ">
                                <div className="flex gap-3">
                                    <div className="ml-2">
                                        <img src={messageDetail.images[0]} className=" rounded-full w-10" alt="sender" />
                                    </div>
                                    <div className="bg-slate-500 rounded-full  w-14">
                                        <img src={chatIndicator} className="w-16" alt="chatIndicate" />
                                    </div>
                                </div>
                            </div>}
                    </div>
                    <form onSubmit={messageSubmitHandler}>
                        <div className="xl:mt-11 xl:ml-4  flex xl:mb-2 messageInput">
                            <input
                                className="shadow appearance-none border rounded w-screen xl:w-[73rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12"
                                id="username"
                                type="text"
                                placeholder="Message"
                                onChange={messageChangeHandler}
                                value={message}

                            />
                            <button type="submit" className="w-8 h-8 mt-2 -ml-10 cursor-pointer">
                                <img src={send} alt="Send message" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Modal
                open={confirmData}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p className="text-center font-semibold text-lg text-[#333]">Block User</p>
                    <p className="text-center pt-4">Are you sure you want to block {messageDetail.firstName} from viewing your profile or contacting you?</p>
                    <div className="flex gap-3 justify-center mt-8">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded w-36" onClick={confirmDeletehandler}>
                            YES
                        </button>
                        <button class="bg-gray-400 hover:bg-gray-500 text-white  py-2 px-4 rounded w-36" onClick={handleClose}>
                            NO
                        </button>
                    </div>
                </Box>
            </Modal>
            <style jsx="true">{`
                @keyframes dropDown {
                    0% {
                        transform: translateY(100vh) translate(-50%, -50%);
                    }
                    100% {
                        transform: translateY(0) translate(-50%, -50%);
                    }
                }
            `}</style>
            <ViewProfileModal openProfile={viewProfileModal} closeProfileModal={closeViewProfileModal} profile={messageDetail} />
            <ChatWithExpertModal openChatExpert={expertModal} closeChatExpertModal={closeExpertChatModal} />
        </>


    );
};

export default MessageDetail;
