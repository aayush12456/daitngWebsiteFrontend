
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { addChatDetailsAsync } from "../../Redux/Slice/addChatDetailsSlice/addChatDetailsSlice"
import io from "socket.io-client";
import axios from 'axios'
import FilteredChatMessage from "../filteredChatMessage/filteredChatMessage";
import '../../../src/styles.css'
// const socket = io.connect("http://localhost:4000");
const socket = io.connect("https://daitingwebsitebackend.onrender.com");
const Message = ({ chatItem }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const id = sessionStorage.getItem('userId')
    const loginObj = JSON.parse(sessionStorage.getItem('loginObject'))
    const [loginUser, setLoginUser] = useState(false)
    const [fetchMessages, setFetchMessages] = useState([]);
    const [chatIdArray, setChatIdArray] = useState([])
    const [filteredMessages, setFilteredMessages] = useState([])
    const [loginArray, setLoginArray] = useState([])
    const [checkMessages, setCheckMessages] = useState(false)
    const getProfile = () => chatItem || {};
    const dob = getProfile().DOB;
    const dobBreak = dob?.split("/");
    const year = dobBreak?.[2];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    const age = year ? currentYear - parseInt(year) : "";
    const messageDetail = async (chatItem) => {
        const addChatDetails = {
            id: id,
            anotherId: chatItem?._id,
            loginName: loginObj?.firstName,
            anotherName: chatItem?.firstName
        }
        dispatch(addChatDetailsAsync(addChatDetails))
        navigate('/mainContent/messageDetail', { state: chatItem })
        window.location.reload()
    }
    // const deleteLoginIdUser = useSelector((state) => state.deleteLoginIdUser.deleteLoginIdUserObj.deleteUserData)
    // console.log('delete login id user is', deleteLoginIdUser)




    //loginIdUser
    useEffect(() => {
        const getLoginIdUserAsync = async () => {
            try {
                // const response = await axios.get(`http://localhost:4000/user/getloginIdUser/${id}`);
                const response = await axios.get(`https://daitingwebsitebackend.onrender.com/user/getloginIdUser/${id}`);
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
    // console.log('recieve login array', loginArray)

    useEffect(() => {
        // const loginIdDetailsUser=loginIdUserSelectorArray?.some((loginIdUser)=>loginIdUser.loginId===chatItem._id)
        const loginIdDetailsUser = loginArray?.some((loginIdUser) => loginIdUser.loginId === chatItem._id)
        if (loginIdDetailsUser) {
            setLoginUser(true)
        }
    }, [loginArray, chatItem])


    // console.log('login user is', loginUser)
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                // const response = await axios.get(`http://localhost:4000/chat/getMessage/${id}`);
                const response = await axios.get(`https://daitingwebsitebackend.onrender.com/chat/getMessage/${id}`);
                // console.log('fetch messages is',response.data.chatUserArray)
                setFetchMessages(response.data.chatUserArray);


            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        fetchMessage()
        socket.on('recieveMessage', (newMessage) => {
            setFetchMessages(preMessages => [...preMessages, newMessage])
        })
        return () => {
            socket.off('recieveMessage')
        }
    }, [id])

    useEffect(() => {
        const fetchAllChatId = async () => {
            try {
                // const response = await axios.get(`http://localhost:4000/chat/getAllChatId`);
                const response = await axios.get(`https://daitingwebsitebackend.onrender.com/chat/getAllChatId`);
                // console.log('fetch chat id messages is',response.data)
                setChatIdArray(response.data.chatIdArray)

            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        fetchAllChatId()
    }, [])
    // console.log('chat id array', chatIdArray)
    // console.log('fetchMesage array', fetchMessages)

    useEffect(() => {
        if (fetchMessages.length && chatIdArray.length) {
            const currentTime = new Date();

            // Map through chatIdArray to find the closest message for each chatId
            const closestMessagesArray = chatIdArray.map(chatItem => {
                // Filter messages matching the current chatId
                const matchingMessages = fetchMessages.filter(messageItem => messageItem.chatId === chatItem._id);

                // Find the message with the closest timestamp to the current time
                if (matchingMessages.length > 0) {
                    return matchingMessages.reduce((closest, currentMessage) => {
                        const currentMessageTime = new Date(currentMessage.timestamp);
                        const closestMessageTime = new Date(closest.timestamp);

                        // Calculate time differences
                        const currentTimeDiff = Math.abs(currentTime - currentMessageTime);
                        const closestTimeDiff = Math.abs(currentTime - closestMessageTime);

                        // Return the message with the smaller time difference
                        return currentTimeDiff < closestTimeDiff ? currentMessage : closest;
                    }, matchingMessages[0]);
                }
                return null;
            }).filter(message => message !== null); // Filter out any nulls

            // console.log('Array of closest messages for each chatId:', closestMessagesArray);
            setFilteredMessages(closestMessagesArray)
        }
    }, [fetchMessages, chatIdArray]);
    // console.log('filter message in closest time', filteredMessages)

    useEffect(() => {
        const checkMessage = filteredMessages.some(
            filterItem => filterItem.senderId === chatItem._id && filterItem.recieverId === id
        );
        const anotherCheckMessage = filteredMessages.some(
            filterItem => filterItem.senderId === id && filterItem.recieverId === chatItem._id
        );
        if (checkMessage || anotherCheckMessage) {
            setCheckMessages(true);
        }
    }, [filteredMessages, chatItem._id, id]);

    return (
        <>
            <div class="sm:w-[40rem]  rounded-2xl overflow-hidden shadow-lg mt-8 bg-white messageCard">
                <div class=" cursor-pointer ">
                    <div className="flex justify-between">
                        <div className="flex mt-4 gap-2 ml-4 " onClick={() => messageDetail(chatItem)}>
                            <img src={chatItem.images[0]} className="w-16  rounded-full" alt="chatProfile" />
                            <div className="grid col-span-1">
                                <div className="flex gap-2">
                                    <p className="pt-3">{chatItem.firstName},</p>
                                    <p className="pt-3">{age}</p>
                                </div>
                                <div>
                                    {
                                        filteredMessages.map(filterItem => {
                                            return (
                                                <>
                                                    <FilteredChatMessage filterItem={filterItem} chatItem={chatItem} />

                                                </>
                                            )
                                        })
                                    }
                                    {checkMessages === false ? <p>You have both paired</p> : null}
                                </div>
                            </div>
                        </div>
                        <div>
                            {loginUser === true ? <p className="mr-6 mt-6 text-green-600">online</p> : <p className="mr-6 mt-6 text-red-500">offline</p>}
                        </div>

                    </div>
                    <hr className="mt-4" />
                </div>
            </div>
            {/* </div>} */}
        </>
    )
}
export default Message

