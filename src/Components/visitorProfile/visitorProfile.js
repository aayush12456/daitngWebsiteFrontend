import React, { useState ,useEffect} from "react";
import { BACKEND_BASE_URL } from "../../Services/api";
import leftArrow from "../../assets/personalProfileIcons/leftArrow.svg";
import rightArrow from "../../assets/personalProfileIcons/rightArrow.svg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import rightTik from '../../assets/personalProfileIcons/rightTiks.svg'
import crossTik from '../../assets/personalProfileIcons/crossTik.svg'
import likeTik from '../../assets/personalProfileIcons/rightTikss.svg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { addVisitorPlusLikeUserAsync } from "../../Redux/Slice/addVisitorPlusLikeUserSlice/addVisitorPlusLikeUserSlice";
import { addLikeUserAsync } from "../../Redux/Slice/addLikeUser/addLikeUser";
import { addLikeNotifyAsync } from "../../Redux/Slice/addLikeNotifySlice/addLikeNotifySlice";
import { addLikeCounterUserAsync } from "../../Redux/Slice/addLikeCounterUserSlice/addLikeCounterUserSlice";
import { useNavigate } from "react-router-dom";
import { addVisitorPlusSkipUserAsync } from "../../Redux/Slice/addVisitorPlusSkipUserSlice/addVisitorPlusSkipUserSlice";
import { passDataObjSliceAcions } from "../../Redux/Slice/passDataSliceObj/passDataSliceObj";
import { addMatchUserAsync } from "../../Redux/Slice/addMatchUserSlice/addMatchUserSlice";
import { useSelector } from "react-redux";
import { addMatchEmailAsync } from "../../Redux/Slice/addMatchEmailSlice/addMatchEmailSlice";
import { addSmsSenderAsync } from "../../Redux/Slice/addSmsSlice/addSmsSlice";
import playVideo from '../../assets/personalProfileIcons/playVideo.png'
import WatchVideo from "../common/watchVideo/watchVideo";
import { addOnlineSkipUserAsync } from "../../Redux/Slice/addOnlineSkipUserSlice/addOnlineSkipUserSlice";
import { addOnlineLikeUserAsync } from "../../Redux/Slice/addOnlineLikeUserSlice/addOnlineLikeUserSlice";


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
export const VisitorProfile = ({visitor,OnlineContent,likeUserPerson,visitorUser,matchedUser,onlineLikeUserPerson}) => {
    console.log('visitor data',visitor)
  // console.log('online content data',OnlineContent)
    console.log('likeUserPerson',likeUserPerson)
    console.log('onlineLikeUserPerson',onlineLikeUserPerson)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setOpen] = React.useState(false);
    const [likeUser,setLikeUser]=useState(false)
    const [skipUser,setSkipUser]=useState(false)
    const [selfOnlineLike,setSelfOnlineLike]=useState(true)
    const [text,setText]=useState('')
    const [skipText,setSkipText]=useState('')
    const [matchUser,setMatchUser]=useState('')
    // const [visitorLike,setVisitorLike]=useState('')
    const [user,setUser]=useState(true)
    const [watchVideo,setWatchVideo]=useState(true)
    const [skipPart,setSkipPart]=useState(true)
    const [likePart,setLikePart]=useState(true)
    const [likeUserPart,setLikeUserPart]=useState(true)
    const [matchPartUser,setMatchPartUser]=useState(true)
    const [watchModalOpen, setWatchModalOpen] = useState(false)
    const [personalProfileObj,setPersonalProfileObj]=useState({})
    const [onlinePersonalProfileObj,setOnlinePersonalProfileObj]=useState({})
    const [visitorPersonalProfileObj,setVisitorPersonalProfileObj]=useState({})
    const id =sessionStorage.getItem('userId')
    const dob = visitor?.DOB || OnlineContent?.DOB;
    const dobBreak = dob?.split("/");
    const year = dobBreak?.[2];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    const age = year ? currentYear - parseInt(year) : "";
    const number=OnlineContent?.phone||visitor?.phone
    const mainNumber = number.substring(0, 4) + 'X'.repeat(number.length - 4);
    console.log(mainNumber); 
   const loginObj=JSON.parse(sessionStorage.getItem('loginObject'))
   const updateLoginObj=JSON.parse(sessionStorage.getItem('updateUser'))


    const watchVideoButton=()=>{
      setWatchModalOpen(true)
      setPersonalProfileObj(likeUserPerson)
      setOnlinePersonalProfileObj(OnlineContent)
      setVisitorPersonalProfileObj(visitor)
    }
    
      const handleWatchClose = () => {
        setWatchModalOpen(false)
    };
    const handleLeftArrowClick = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? getProfile().images?.length - 1 : prevIndex - 1
        );
      };
    
      const handleRightArrowClick = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === (getProfile().images?.length || 0) - 1 ? 0 : prevIndex + 1
        );
      };
      const getProfile = () =>
    visitor
    ||
    OnlineContent
      {};
      const getImageUrl = () => {
        // return BACKEND_BASE_URL + (getProfile().images?.[currentImageIndex] || "");
        return (getProfile().images?.[currentImageIndex] || "");
      };
      const handleClose = () => setOpen(false);
      const handleOpen = () => {
        setOpen(true);
       
      };
      const likePersonHandler=()=>{
setLikeUser(true)
setTimeout(()=>{
setLikeUser(false)
const visitorLikeUser={
  id:id,
  visitorPlusLikeUserId:visitor?._id
}
 const likeObjId = {
      id: id,
      likeUserId:visitor?._id
    };
    const notifyobjId = {
      id: id,
      userId: visitor?._id
    };
    const onlineNotifyObjId={
      id:id,
      userId:OnlineContent?._id
    }
    const likeSmsObj={
      id:id,
      recieverUserId:visitor?._id
    }
    const onlinePersonLikeObj={
      id:id,
      onlinePersonLikeUserId:OnlineContent?._id

    }
    const onlineSmsId={
      id:id,
      recieverUserId:OnlineContent?._id
      }
    console.log('like obj data',likeObjId)
if(visitorUser){
  dispatch(addVisitorPlusLikeUserAsync(visitorLikeUser))
  dispatch(addSmsSenderAsync(likeSmsObj))
  setText("You Like this profile")
  setLikeUserPart(false)
  
}
if(OnlineContent){
  dispatch(addOnlineLikeUserAsync(onlinePersonLikeObj))
  dispatch(addLikeNotifyAsync(onlineNotifyObjId))
  dispatch(addLikeCounterUserAsync(onlineNotifyObjId));
  dispatch(addSmsSenderAsync(onlineSmsId))
  setText("You Like this profile")
  setSelfOnlineLike(false)
}
dispatch(addLikeUserAsync(likeObjId));
dispatch(addLikeNotifyAsync(notifyobjId));
dispatch(addLikeCounterUserAsync(notifyobjId));
dispatch(passDataObjSliceAcions.passDataObj(visitor))
if(likeUserPerson){
  const likeUserObj={
    id:id,
    matchLikeId:likeUserPerson._id
  }
  const likeEmailObj={
    id:id,
    emailMatchLikeId:likeUserPerson._id
  }
  dispatch(addMatchUserAsync(likeUserObj))
  dispatch(addMatchEmailAsync(likeEmailObj))
  setMatchUser('You ve both paired')
  setMatchPartUser(false)
}
if(onlineLikeUserPerson){
  const onlineLikeUserObj={
    id:id,
    matchLikeId:onlineLikeUserPerson._id
  }
  const onlineLikeEmailObj={
    id:id,
    emailMatchLikeId:onlineLikeUserPerson._id
  }
  dispatch(addMatchUserAsync(onlineLikeUserObj))
  dispatch(addMatchEmailAsync(onlineLikeEmailObj))
  setMatchUser('You ve both paired')
  setMatchPartUser(false)
}
},700)

toast.success('Like sent successfully')
// navigate('/mainContent/visitors',{state:likeVisitorUser})
// navigate('/mainContent/likeMe')
      }

      const skipCancelHandler=()=>{
      setSkipPart(false)
      setSkipUser(true)
      setTimeout(()=>{
        setSkipPart(false)
        setSkipUser(false)
        setSkipText("You Skipped this profile")
        const visitorLikeUser={
          id:id,
          visitorPlusSkipUserId:visitor?._id
        }
        const likeUser={
          id:id,
          visitorPlusSkipUserId:likeUserPerson?._id
        }
        const onlineSkipUser={
          id:id,
          onlinePersonSkipUserId:OnlineContent?._id
        }
        if(OnlineContent){
        dispatch(addOnlineSkipUserAsync(onlineSkipUser))
        }
   if(visitor){
    dispatch(addVisitorPlusSkipUserAsync(visitorLikeUser))
   }
        if(likeUserPerson){
          dispatch(addVisitorPlusSkipUserAsync(likeUser))
        }
        },700)
      }
  
      const getMatchUser=useSelector((state)=>state.getMatchUser.getMatchUserObj.matchUser)
      console.log('get match user array',getMatchUser)
    
      const anothergetMatchUser=useSelector((state)=>state.getMatchUser.getMatchUserObj.anotherMatchUser)
      console.log('another get match user',anothergetMatchUser)
     
      const visitorSkipUser=useSelector((state)=>state. getVisitorSkipUser.getVisitorPlusSkipUserArray.skipUserData)
      console.log('visitor skip data user',visitorSkipUser)

      const visitorLikeUser=useSelector((state)=>state. getVisitorPlusLikeUser.getVisitorPlusLikeUserArray.likeUser)
      console.log('visitor like data user',visitorLikeUser)
      const selfOnlineLikeUser=useSelector((state)=>state.getOnlineLikeUser.getOnlineLikeUserObj.selfOnlineLikeUser)

      // const anothergetMatchUserData=useSelector((state)=>state.getMatchUser.getMatchUserObj.anotherMatchUser)
      // console.log('another get match user data',anothergetMatchUserData)
     
    

      useEffect(() => {
        const matched = getMatchUser?.some(
          (matchUser) => matchUser?.firstName === likeUserPerson?.firstName
        );
        const onlineMatched = getMatchUser?.some(
          (matchUser) => matchUser?.firstName === onlineLikeUserPerson?.firstName
        );
        const anothermatched = anothergetMatchUser?.some(
          (anothermatchUser) => anothermatchUser?.firstName === likeUserPerson?.firstName
        );
        if (matched || anothermatched || onlineMatched) {
          setUser(false);
        }
    
      }, [likeUserPerson, getMatchUser]);
      useEffect(() => {
       
        const anothermatchedWatch = anothergetMatchUser?.some(
          (anothermatchUser) => anothermatchUser?.firstName === visitorUser?.firstName
        );
        if (anothermatchedWatch) {
        setWatchVideo(false)
        }
    
      }, [anothergetMatchUser,visitorUser]);
    
      useEffect(()=>{
     const visitorgetSkippedUser=visitorSkipUser?.some((visitorSkipData)=>visitorSkipData?.firstName===visitorUser?.firstName)
     const likeSkipUser=visitorSkipUser?.some((likeSkipData)=>likeSkipData?.firstName===likeUserPerson?.firstName)
     const onlineLikeSkipUser=visitorSkipUser?.some((onlineLikeSkipData)=>onlineLikeSkipData?.firstName===onlineLikeUserPerson?.firstName)
     if(visitorgetSkippedUser || likeSkipUser ||onlineLikeSkipUser ){
      setSkipPart(false)
     }
      },[visitorUser,visitorSkipUser,likeUserPerson])

      useEffect(()=>{
        const visitorgetLikeUser=visitorLikeUser?.some((visitorLikeData)=>visitorLikeData?.firstName===visitorUser?.firstName)
        if(visitorgetLikeUser){
         setLikePart(false)
        }
         },[visitorUser,visitorLikeUser])

         useEffect(()=>{
          const visitorgetanotherMatchLikeUser= anothergetMatchUser?.some((anothergetMatchData)=>anothergetMatchData?.firstName===visitorUser?.firstName)
          if(visitorgetanotherMatchLikeUser){
           setLikePart(false)
          }
           },[visitorUser,anothergetMatchUser])
       
           useEffect(()=>{
            const selfOnlineLikePerson= selfOnlineLikeUser?.some((selfOnlineLikeData)=>selfOnlineLikeData?.firstName===OnlineContent?.firstName)
            if(selfOnlineLikePerson){
             setSelfOnlineLike(false)
            }
             },[selfOnlineLikeUser,OnlineContent])
         const visitorCommonInterest=visitorUser?.interest?.filter((visitorItem)=>loginObj?.interest?.includes(visitorItem))
         const updateVisitorCommonInterest=visitorUser?.interst?.filter((visitorItem)=>updateLoginObj?.interest?.includes(visitorItem))
         const likeCommonInterest=likeUserPerson?.interest?.filter((likeItem)=>loginObj?.interest?.includes(likeItem))
         const updateLikeCommonInterest=likeUserPerson?.interest?.filter((likeItem)=>updateLoginObj?.interest?.includes(likeItem))
        
  return (
   <>
    <div className="flex justify-center mt-10">
      <div className="relative">
      {likeUser && (
            <div className="absolute inset-0 bg-blue-500 opacity-80 rounded-2xl flex items-center justify-center z-10">
              <img src={likeTik} alt="Right" className="w-12 h-14" />
            </div>
          )}
 {skipUser && (
            <div className="absolute inset-0 bg-gray-600 opacity-80 rounded-2xl flex items-center justify-center z-10">
              {/* You can add any content here */}
              <img src={crossTik} alt="Right" className="w-14 h-14 filter invert" />
            </div>
          )}
<div className={`w-[50rem] rounded overflow-hidden shadow-lg ${likeUser ? 'bg-white' : ''|| skipUser ? 'bg-white' : '' }`} >
          <div className="px-6 py-4  ">
          <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
          <div className={`flex ${likeUserPerson?.images?.length==1 || visitorUser?.images?.length==1?'justify-center':"justify-between"} bg-black`}>
            { likeUserPerson?.images?.length==1 || visitorUser?.images?.length==1?null: <img
                src={leftArrow}
                className="w-5 filter invert cursor-pointer "
                onClick={handleLeftArrowClick}
              />}
              <div className={`flex justify-center ${likeUserPerson?.videoUrl && user && matchPartUser || OnlineContent?.videoUrl || visitorUser?.videoUrl && watchVideo  ?'ml-24':''} `}>
                <img src={getImageUrl()} className="w-48 h-48 cursor-pointer object-cover"  onClick={handleOpen} />
                {likeUserPerson?.videoUrl && user && matchPartUser ? <div className="mt-4 relative left-32  ">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-28  " onClick={watchVideoButton}> <div className="flex gap-1"><img src={playVideo} className="w-6 invert "/>Play</div>

</button>
                </div>:null}
                {OnlineContent?.videoUrl? <div className="mt-4 relative left-32  ">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-28  " onClick={watchVideoButton}> <div className="flex gap-1"><img src={playVideo} className="w-6 invert "/>Play</div>

</button>
                </div>:null}
                {visitorUser?.videoUrl && watchVideo ? <div className="mt-4 relative left-32  ">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-28  " onClick={watchVideoButton}> <div className="flex gap-1"><img src={playVideo} className="w-6 invert "/>Play</div>

</button>
                </div>:null}
               
              </div>
              
             {likeUserPerson?.images?.length==1 || visitorUser?.images?.length==1?null: <img
                src={rightArrow}
                className="w-5 filter invert cursor-pointer"
                onClick={handleRightArrowClick}
              />}
            </div>
            <div className="flex gap-0">
              <p className="pl-5 pt-4 text-lg font-semibold">
               {visitor && visitor.firstName?visitor.firstName:OnlineContent.firstName}
                ,
              </p>
              <p className="pl-3 pt-4 text-lg text-[#333] font-semibold ">
                {age},
              </p>
              <p className="text-lg pt-4 pl-3 text-[#333] font-semibold">
              {visitor &&visitor.city?visitor?.city:OnlineContent?.city}
              </p>
              
            </div>
            {OnlineContent?<div className="pl-5 pt-1">
              <p className="text-md ">Working as {OnlineContent?.profession}</p>
              <p className="text-md pt-1 ">
                Studied {OnlineContent?.education}
              </p>
            </div>:null}

            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Mobile Number</p>
              <p className="text-lg pt-1 font-semibold">
              {mainNumber}
              </p>
            </div>
            {visitor?<div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Relationship status</p>
              <p className="text-lg pt-1 font-semibold">
               {visitor?.relationship}
              </p>
            </div>:null}
           {visitor? <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">I'm looking for</p>
              <p className="text-lg pt-1 font-semibold">
               {visitor?.looking}
              </p>
            </div>:null}
            {/* // interest */}
            <div>
            <div className="pl-5 pt-6 flex gap-1">
              <p className="text-lg text-[#757575]">Interests</p>
             {OnlineContent?null: <p className="text-sm text-[#5394e4] pt-1 ">( {visitorCommonInterest?.length || updateVisitorCommonInterest?.length || likeCommonInterest?.length || updateLikeCommonInterest?.length} common )</p>}
            </div>
            <div className="flex gap-4 ml-4  ">
               
                
               {visitor
                 ? visitor.interest.map((visitorInterest) => {
                   const commonInterest=loginObj?.interest?.includes(visitorInterest) || updateLoginObj?.interest?.includes(visitorInterest)
                   console.log('common interst',commonInterest)
                     return (
                       <>
                         <div className={` rounded mt-3 ${commonInterest?'bg-black':'bg-slate-200'}`}>
                           <p className={`text-lg pt-3 text-center pl-4 pr-4 pb-3 ${commonInterest?'text-white':'text-[#757575]'}`}>
                             {visitorInterest}
                           </p>
                         </div>
                       </>
                     );
                   })
                 : null}
                 {
                   OnlineContent?OnlineContent.interest.map(onlineItem=>{
                       return (
                         <>
                          <div className="bg-slate-200 rounded mt-3">
                           <p className="text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575] ">
                             {onlineItem}
                           </p>
                         </div>
                         </>
                       )
                   }):null
                 }
               </div>
            </div>
           
           {visitor ? <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575] ">About me</p>
              <p className="text-lg pt-1 text-black font-semibold">
               {visitor.aboutUser}
              </p>
            </div>:null}
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Education</p>
              <p className="text-lg pt-1 font-semibold">
               {visitor &&visitor.education?visitor.education:OnlineContent.education}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Profession</p>
              <p className="text-lg pt-1 font-semibold">
              {visitor &&visitor.profession?visitor.profession:OnlineContent.profession}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Drinking</p>
              <p className="text-lg pt-1 font-semibold">
                {visitor && visitor.drinking?visitor.drinking:OnlineContent.drinking}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Smoking</p>
              <p className="text-lg pt-1 font-semibold">
             {visitor && visitor.smoking?visitor.smoking:OnlineContent.smoking}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Eating</p>
              <p className="text-lg pt-1 font-semibold">
              {visitor && visitor.eating?visitor.eating:OnlineContent.eating}
              </p>
            </div>
           {visitor? <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Zodiac sign</p>
              <p className="text-lg pt-1 font-semibold">
                {visitor.zodiac}
              </p>
            </div>:null}
            {visitor?<div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">languages I know</p>
              <p className="text-lg pt-1 font-semibold">
                {visitor.language}
              </p>
            </div>:null}
          </div>
          <hr class="  w-full border-t-1 border-gray-400"/>
         
{user && skipPart && likePart && likeUserPart && matchPartUser && selfOnlineLike &&<div className="flex justify-between">
    <div className="flex gap-4 mt-6 ml-20">
      <div className="rounded-full bg-[#71706f] w-12 h-12 flex justify-center cursor-pointer" onClick={skipCancelHandler}>
        <img src={crossTik} className="w-8 filter invert" />
      </div>
      <p className="text-[#71706f] font-semibold pt-1 text-xl cursor-pointer" onClick={skipCancelHandler}>SKIP</p>
    </div>
    <div className="flex gap-4 mt-6 mr-16">
      <div className="rounded-full bg-blue-600 w-12 h-12 flex justify-center cursor-pointer" onClick={likePersonHandler}>
        <img src={rightTik} className="w-8" />
      </div>
      <p className="text-[#0271fe] font-semibold pt-3 text-xl cursor-pointer" onClick={likePersonHandler}>LIKE</p>
    </div>
  </div>}

 

    

{/* { ((getMatchUser && getMatchUser?.firstName === likeUserPerson?.firstName || matchUser ) || (anotherGetMatchUser && anotherGetMatchUser?.firstName === likeUserPerson?.firstName || matchUser)) && <p className="text-center pt-4 text-lg text-[#757575]">You've both paired</p>}
{anotherMatchPerson?.firstName===visitor?.firstName &&<p className="text-center pt-4 text-lg text-[#757575]">You've both paired</p>}
 */}
 {/* {
  getMatchUser?.map(matchUser=>{
   return (
    <>
    {matchUser?.firstName===likeUserPerson?.firstName &&<p className="text-center pt-4 text-lg text-[#757575]">You've both paired</p> }
    </>
   )
  })
 } */}
 {matchUser &&<p className="text-center pt-4 text-lg text-[#757575]">You've both paired</p>}
 {
  getMatchUser?.map(matchUser=>{
   return (
    <>
    {matchUser?.firstName===onlineLikeUserPerson?.firstName &&<p className="text-center pt-4 text-lg text-[#757575]">You've both paired</p> }
    </>
   )
  })
 }

  {
 anothergetMatchUser?.map(anotherMatchUser=>{
   return (
    <>
    {anotherMatchUser?.firstName===likeUserPerson?.firstName &&<p className="text-center pt-4 text-lg text-[#757575]">You've both paired</p> }
    </>
   )
  })
 }
   {
    visitorSkipUser?.map(visitorSkip=>{
      return(
        <>
        {visitorSkip?.firstName===visitorUser?.firstName  &&<p className="text-center pt-4 text-lg text-[#757575]">You skipped this profile</p>}
        </>
      )
    })
   }
{skipText && <p className="text-center pt-4 text-lg text-[#757575]">You skipped this profile</p>}
{
    visitorSkipUser?.map(visitorSkipData=>{
      return(
        <>
        {visitorSkipData?.firstName===likeUserPerson?.firstName  &&<p className="text-center pt-4 text-lg text-[#757575]">You skipped this profile</p>}
        </>
      )
    })
   }
   {/* {
    visitorSkipUser?.map(visitorSkipData=>{
      return(
        <>
        {visitorSkipData?.firstName===onlineLikeUserPerson?.firstName  &&<p className="text-center pt-4 text-lg text-[#757575]">You skipped this profile</p>}
        </>
      )
    })
   } */}
{
visitorLikeUser?.map(visitorLike=>{
  
   return (
    <>
    {/* {user===true ?visitorLike?.firstName===visitorUser?.firstName &&<p className="text-center pt-4 text-lg text-[#757575]">You've both paired</p>: visitorLike?.firstName===visitorUser?.firstName &&<p className="text-center pt-4 text-lg text-[#757575]">You Like this profile</p> } */}
   { visitorLike?.firstName===visitorUser?.firstName && watchVideo &&<p className="text-center pt-4 text-lg text-[#757575]">You Like this profile</p>}
    </>
   )
  })
 }
 {text &&<p className="text-center pt-4 text-lg text-[#757575]">You Like this profile</p>} 
 {
selfOnlineLikeUser?.map(selfOnlineLike=>{
  
   return (
    <>
   
   { selfOnlineLike?.firstName===OnlineContent?.firstName && watchVideo &&<p className="text-center pt-4 text-lg text-[#757575]">You Like this profile</p>}
    </>
   )
  })
 }

{/* 
 {
  getMatchUserDataArray?.map(matchUserData=>{
   return (
    <>
    {matchUserData?.firstName===visitorUser?.firstName &&<p className="text-center pt-4 text-lg text-[#757575]">You've both paired</p> }
    </>
   )
  })
 } */}
  {
 anothergetMatchUser?.map(anothergetMatchUserData=>{
   return (
    <>
    {anothergetMatchUserData?.firstName===visitorUser?.firstName &&<p className="text-center pt-4 text-lg text-[#757575]">You've both paired</p> }
    </>
   )
  })
 }
          </div>
        </div> 
      </div>
        
      </div>

      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="flex justify-center">
                <img src={getImageUrl()}  />
              </div>
  
              </Box>
          </Modal>
          <WatchVideo modalOpen={watchModalOpen} handleClose={ handleWatchClose} personalVideoData={personalProfileObj} onlinePersonalVideoData={onlinePersonalProfileObj} visitorPersonalVideoData={visitorPersonalProfileObj}/>
   </>
  )
}


{/* <div className="flex gap-4">
<div className="rounded-full bg-blue-600 w-12 h-12 flex justify-center">
<img src={rightTik} className="w-8" />
</div>
<p className="text-[#0271fe] font-semibold pt-3 text-xl">LIKE</p>
</div> */}


// {!(text || likeVisitorUser?.firstName === visitor?.firstName || skipVisitorUser?.firstName === visitor?.firstName || skipText || getMatchUser?.firstName===likeUserPerson?.firstName || anotherGetMatchUser?.firstName===likeUserPerson?.firstName||matchUser)



{/* <div className="flex gap-4  ">
               
                
{visitor
  ? visitor.interest.map((visitorInterest) => {
    const commonInterest=loginObj?.interest?.includes(visitorInterest) || updateLoginObj?.interest?.includes(visitorInterest)
    console.log('common interst',commonInterest)
      return (
        <>
          <div className={` rounded mt-3 ${commonInterest?'bg-black':'bg-slate-200'}`}>
            <p className={`text-lg pt-3 text-center pl-4 pr-4 pb-3 ${commonInterest?'text-white':'text-[#757575]'}`}>
              {visitorInterest}
            </p>
          </div>
        </>
      );
    })
  : null}
  {
    OnlineContent?OnlineContent.interest.map(onlineItem=>{
        return (
          <>
           <div className="bg-slate-200 rounded mt-3">
            <p className="text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575] ">
              {onlineItem}
            </p>
          </div>
          </>
        )
    }):null
  }
</div> */}