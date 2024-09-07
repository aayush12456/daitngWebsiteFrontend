import React,{useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import guruIcon from '../../assets/guruIcon/guru.svg'
import send from '../../assets/modalIcons/sendIcon.png';
import chat from '../../assets/chatIcons/chat.gif'
import axios from 'axios'
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
        left:"50%",
        top:"50%",
   
      },
      '@media (min-width: 350px) and (max-width: 400px)': {
        width: 350,
        left:"50%",
        top:"50%"
      },
      '@media (min-width: 400px) and (max-width: 500px)': {
        width: 400,
        left:"50%",
        top:"50%"
      },
      '@media (min-width: 500px) and (max-width: 600px)': {
        width: 450,
        left:"50%",
        top:"50%"
      },
      '@media (min-width: 600px) and (max-width: 700px)': {
        width: 500,
        left:"50%",
        top:"50%"
      },
};
const ChatWithExpertModal=({openChatExpert,closeChatExpertModal})=>{
  //aayushtapadia28@gmail.com api key for googleAi studio
  // const API_KEY='AIzaSyAQ82J1ulkv8NMEsP2ZMTNo7OiyuQgdCSc'
  //apnapan93@gmail.com Api key
  const API_KEY='AIzaSyDwhJoYwyMUIaoY0ZGPWPEW14zEvHBtBWM'
  const [queryText,setQueryText]=useState('')
  const [showResponse,setShowResponse]=useState(null)
  const [isLoading, setIsLoading] = useState(false);
    const textChangeHandler=(event)=>{
  setQueryText(event.target.value)
    }
    const textSubmitHandler=async(e)=>{
e.preventDefault()
const queryObj={
query:queryText
}
setIsLoading(true); 
try {
  const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,  // Use the API key in the URL
      {
          contents: [{ parts: [{ text: `${queryObj.query}` }] }]
      },
      {
          headers: {
              'Content-Type': 'application/json'
          }
      }
  );
const data=response.data.candidates[0].content.parts[0]
setShowResponse(data)
setQueryText('')
  console.log('message of gpt data is', data);
} catch (error) {
  console.error('Error sending message:', error);
} finally {
  setIsLoading(false);  // Stop loading
}
    }
    const formatText = (text) => {
      if (!text) return '';
  
      // Remove all * characters
      let formattedText = text.replace(/\*/g, '');
  
      // Ensure lines starting with numbers are on a new line
      formattedText = formattedText
          .replace(/(^|\n)(\d+.*)/g, '\n$2')  // Move lines starting with numbers to a new line
          .replace(/\n+/g, '\n')  // Clean up any extra newlines
          .trim();  // Trim leading/trailing whitespace
  
      return formattedText;
  };
  
  
return (
    <>
<Modal
                open={openChatExpert}
                onClose={closeChatExpertModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <div className="flex justify-center">
                <img src={guruIcon} className="w-36"  alt="guruIcon"/>
                </div>
               {showResponse!==null?null: <p className="text-center pt-1 text-gray-600">Ask Me Anything</p>}
                  <div style={{ maxHeight: '300px', overflowY: 'auto' }} className="mt-5">
                        
                        {
                          isLoading===true &&<div className="flex ">
                          <img src={guruIcon} className="w-12 fixed" alt="guruIcon" />
                      <img src={chat} className="w-12 fixed ml-8" alt="Loading chat" />

                  </div>
                        }
                        {
                          showResponse!==null&&<div className="flex ">
                          <img src={guruIcon} className="w-12 fixed"  alt="guruIcon" />
                          <p className="pl-12">{formatText(showResponse.text)}</p>

                  </div>
                        }
                    </div>
                <div className="mt-8  flex mb-1">
                    <input
                        className="shadow appearance-none border rounded w-[38rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12"
                        id="username"
                        type="text"
                        placeholder="Message"
                        onChange={textChangeHandler}
                       value={queryText}  
                      
                    />
                    <button type="submit" className="w-8 h-8 mt-2 -ml-10 cursor-pointer" onClick={textSubmitHandler} >
                        <img src={send} alt="Send message" />
                    </button>
                </div>
                </Box>
            </Modal>
    </>
)
}
export default ChatWithExpertModal