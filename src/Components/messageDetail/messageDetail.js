import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from '../../Redux/axios/messageAxios';
import io from "socket.io-client";
import { sendMessageAsync } from "../../Redux/Slice/sendMessageSlice/sendMessageSlice";
import { BACKEND_BASE_URL } from "../../Services/api";
import send from '../../assets/modalIcons/sendIcon.png';

const MessageDetail = ({ messageDetail }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch();
    const id = sessionStorage.getItem('userId');
    const socket = io.connect("http://localhost:4000");

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

    useEffect(() => {
        // Listen for "message received" event from the server
        socket.on("message received", (newMessage) => {
            console.log('New message received:', newMessage);
            setMessages((prev) => [...prev, newMessage]);
        });
        
        // Clean up function to remove the listener on component unmount
        return () => {
            socket.off("message received");
        };
    }, [socket]);

    const messageChangeHandler = (event) => {
        setMessage(event.target.value);
    };

    const messageSubmitHandler = async (e) => {
        e.preventDefault();
        const messageData = {
            sender: id,
            message: message,
            chat: messageDetail._id
        };
        console.log('messageData',messageData)
        try {
            // Dispatch action to send message to Redux store (if needed)
            // dispatch(sendMessageAsync(messageData));

            // Send message data to the server
            const response = await axios.post("http://localhost:4000/message/send", messageData);
            
            // Emit "new message" event to the server
            socket.emit("new message", response.data.message);

            // Clear the message input field
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
        fetchMessage()
    };
    const fetchMessage = async () => {
  
      try {
          const response = await axios.post("http://localhost:4000/message/fetch", {
              chat: messageDetail._id
          });
          setMessages(response.data.message);

          // Join chat room associated with the message
          socket.emit("join chat", messageDetail._id);
      } catch (error) {
          console.error("Error fetching messages:", error);
      }
  };
   useEffect(()=>{
fetchMessage()
   },[])
 console.log('messages is',messages)
    return (
        <div className="w-[40rem] rounded-2xl overflow-hidden shadow-lg mt-8 h-96 flex flex-col justify-between">
            <div className="w-screen">
                <div className="flex gap-4 ml-7">
                    <img src={BACKEND_BASE_URL + messageDetail.images[0]} className="w-16 rounded-full" alt="User avatar" />
                    <p className="pt-3">{messageDetail.firstName}, </p>
                    {/* <p className="pt-3">{age}</p> */}
                    <p className="pt-3">{messageDetail.city}</p>
                </div>
                <hr className="w-full mt-5" />
            </div>
            <div>
                {messages.map((message, index) => (
                    <div key={index} className={`text-${message.sender === id ? 'right' : 'left'} flex justify-${message.sender === id ? 'end' : 'start'}`}>
                        <span className={`bg-${message.sender === id ? 'to-blue-600' : 'white'} p-2 rounded-lg`}>
                            {message.message}
                        </span>
                    </div>
                ))}
            </div>
            <form onSubmit={messageSubmitHandler}>
                <div className="mt-11 ml-4 flex mb-2">
                    <input
                        className="shadow appearance-none border rounded w-[38rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12"
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
    );
};

export default MessageDetail;
