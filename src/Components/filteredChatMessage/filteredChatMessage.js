import axios from "axios";
import io from "socket.io-client";
import { useEffect,useState } from "react";
// const socket = io.connect("http://localhost:4000");
const socket = io.connect("https://apnapanbackend.onrender.com");
const FilteredChatMessage=({filterItem,chatItem})=>{
    const [recordChatMessage, setrecordChatMessage] = useState([]);
    const [recordChatMessageData,setrecordChatMessageData]=useState(false)
    const id=sessionStorage.getItem('userId')
    useEffect(()=>{
        const getChatRecordMessage = async () => {
            try {
                // const response = await axios.get(`http://localhost:4000/user/getRecordChat/${id}`);
                const response = await axios.get(`https://apnapanbackend.onrender.com/user/getRecordChat/${id}`);
                console.log('record chat messages is',response.data.recordChat)
                setrecordChatMessage(response.data.recordChat)
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        getChatRecordMessage()
        socket.on('recieveChatRecord',(newRecordChatMessage)=>{
            setrecordChatMessage(preMessages=>[...preMessages,newRecordChatMessage])
        })
        socket.on('chatRecordDeleted', (deletedChatRecordMessage) => {
            setrecordChatMessage((prevMessages) =>
              prevMessages.filter((msg) => msg._chatId !== deletedChatRecordMessage.chatId)
            );
          });
      
        return ()=>{
            socket.off('recieveChatRecord')
            socket.off('chatRecordDeleted');
        }
       },[id])
       console.log('record chat array',recordChatMessage)
    
       useEffect(() => {
        const recordChat = recordChatMessage?.some(
            (recordMessage) => recordMessage?.senderId === chatItem._id && recordMessage.recieverId===id && recordMessage?.chatId===filterItem?.chatId
          );
    
        if (recordChat) {
            console.log("Matching chatId found between recordChatMessage and filteredMessages.",recordChat);
            // Execute your logic here
            setrecordChatMessageData(true)
        }
    }, [recordChatMessage, filterItem,chatItem._id,id]);

    const filterChatMessageHandler=async(filterItem)=>{
        const filterItemObj={
            id:id,
            ...filterItem
        }
        console.log('filter record data',filterItem)
        try{     
            // const response = await axios.post(`http://localhost:4000/user/deleteRecordData/${filterItemObj.id}`, filterItemObj);  
            const response = await axios.post(`https://apnapanbackend.onrender.com/user/deleteRecordData/${filterItemObj.id}`, filterItemObj);
            console.log('message of delete chat data is',response.data)
            
        }catch(error){
            console.error('Error sending message:', error);
        }
    }
return (
    <>
     <div className="flex gap-3 justify-between">
                        {filterItem.senderId===chatItem._id && filterItem.recieverId===id  &&<p className={`text-sm ${recordChatMessageData===true?'text-blue-600':'text-gray-400'} `} onClick={()=>filterChatMessageHandler(filterItem)}>{filterItem.message }</p>}
                        {filterItem.senderId===chatItem._id && filterItem.recieverId===id  &&<p className={`text-xs pt-1 ${recordChatMessageData===true?'text-blue-600':'text-gray-400'}`}>{new Date(filterItem.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>}
                       {filterItem.senderId===chatItem._id && filterItem.recieverId===id && recordChatMessageData === true && (
        <div className="rounded-full bg-blue-600 w-3 h-3 ml-4 mt-1"></div>
      )}
                        </div>
                        <div className="flex gap-3 justify-between">
                        { filterItem.senderId===id && filterItem.recieverId===chatItem._id  &&<p className="text-sm text-gray-400">You : {filterItem.message }</p>}
                        {filterItem.senderId===id && filterItem.recieverId===chatItem._id &&<p className="text-xs pt-1 text-gray-400">{new Date(filterItem.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>}
                        </div>
    </>
)
}
export default FilteredChatMessage