
import { useState } from "react";
import Message from "../../Components/message/message"
import { useSelector } from 'react-redux';
import {  useDispatch } from 'react-redux';
import { useEffect } from "react";  
import { getMatchUserAsync } from "../../Redux/Slice/getMatchUserSlice/getMatchUserSlice";
import {Helmet} from 'react-helmet'
import animateImage from '../../assets/animateSpinner/colorSpinner.svg'
const MessagePage=()=>{
    const id=sessionStorage.getItem('userId')
    const [isLoading, setIsLoading] = useState(true);
    const dispatch=useDispatch()
    const getMatchUser=useSelector((state)=>state?.getMatchUser?.getMatchUserObj?.matchUser)||[]
    const anothergetMatchUser=useSelector((state)=>state?.getMatchUser?.getMatchUserObj?.anotherMatchUser)||[]
    // console.log('get match user is',getMatchUser)
    // console.log('anither get match user is',anothergetMatchUser)
    
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 500); 
        return () => clearTimeout(loadingTimeout);
    }, []);
    
    useEffect(()=>{
    if(id){
        dispatch(getMatchUserAsync(id));
    }
    },[id,dispatch])
    const allMessageArray=[...getMatchUser,...anothergetMatchUser]
    // console.log('all message array',allMessageArray)





return (
    <>
         <Helmet>
            <title>ApnaPan - All Messages</title>
        </Helmet>
    <p className='text-center font-bold text-2xl pt-6 absolute new-Text  '>Messages</p>
    {isLoading ? (
                <div className=" flex justify-center items-center h-screen -mt-28 ">
                    <img src={animateImage} className="w-28  " alt="Loading..." />
                </div>
            ):
    (<div className="grid grid-cols-1 mt-12">
    {
        allMessageArray.length >0?allMessageArray.map(allMessage=>{
            return (
                <>
 <Message chatItem={allMessage} />
                </>

            )
        }): <p className="text-center pt-60 text-lg font-semibold">No Match User is there for Message</p>
    }
    </div>)
}
    
    </>
)
}
export default MessagePage