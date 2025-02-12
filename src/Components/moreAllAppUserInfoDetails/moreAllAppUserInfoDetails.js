import { useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
// import deleteImg from '../../assets/adminIcons/delete.png';
import leftArrowImg from '../../assets/adminIcons/leftArrow.svg';
import playImg from '../../assets/adminIcons/play.png';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import WatchVideo from "../common/watchVideo/watchVideo";
import RegisterAppUserArrayInfoAdmin from "../common/registerAppUserArrayInfoAdmin/registerAppUserArrayInfoAdmin";
import { appModalActions } from "../../Redux/Slice/appModalSlice";
import { getAllAppFieldRegisterUserAsync } from "../../Redux/Slice/getAllAppFieldRegisterUserSlice/getAllAppFieldRegisterUserSlice";
import { visitorAdminAppModalActions } from "../../Redux/Slice/visitorAdminAppModalSlice";
import { onlineLikeUserAppAdminModalActions } from "../../Redux/Slice/onlineLikeUserAppAdminModalSlice";
import { anotherMatchUserAdminAppModalActions } from "../../Redux/Slice/anotherMatchUserAdminAppModalSlice";
import { skipUserAdminAppModalActions } from "../../Redux/Slice/skipUserAdminAppModalSlice";
import { matchUserAdminAppModalActions } from "../../Redux/Slice/matchUserAdminAppModalSlice";
import { likeFIlterUserAdminAppModalActions } from "../../Redux/Slice/likeFilterUserAdminAppModalSlice";
import { selfOnlineLikeUserAdminAppModalActions } from "../../Redux/Slice/selfOnlineLikeUserAdminAppModalSlice";
import { likeUserAdminAppModalActions } from "../../Redux/Slice/likeUserAdminAppModalSlice";
import { recordMessageModalActions } from "../../Redux/Slice/recordMessageModalSlice";
import { anotherRecordMessageModalActions } from "../../Redux/Slice/anotherRecordMessageModalSlice";
import { typingModalActions } from "../../Redux/Slice/typingModalSlice";
import { deleteProfileAppAsync } from "../../Redux/Slice/deleteProfileAppSlice/deleteProfileAppSlice";
const MoreAllAppUserInfoDetails=({allDetails})=>{
    const id = allDetails?._id;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // console.log('all app details',allDetails)
    const allAppFieldObj = useSelector((state) => state.getAllAppFieldUser.getAllAppFieldRegisterUserObj);
    // console.log('all app field',allAppFieldObj)
    const [open, setOpen] =useState(false);
    const [imageArray,setImageArray]=useState([])
    const [watchModalOpen, setWatchModalOpen] = useState(false)
    const [personalVideoObj,setPersonalVideoObj]=useState({})
    const [visitor,setVisitor]=useState(allAppFieldObj?.visitorUserArray)
    const [likes,setLikes]=useState(allAppFieldObj?.likes)
    const [onlineLikeUser,setOnlineLikeUser]=useState(allAppFieldObj?.onlineLikeUser)
    const [anotherMatchUser,setAnotherMatchUser]=useState(allAppFieldObj?.anotherMatchUser)
    const [skipUser,setSkipUser]=useState(allAppFieldObj?.skipUser)
    const [matchUser,setMatchUser]=useState(allAppFieldObj?.matchUser)
    const [likeFilterUser,setLikeFilterUser]=useState(allAppFieldObj?.likeFilterUser)
    const [selfOnlineLikeUser,setSelfOnlineLikeUser]=useState(allAppFieldObj?.selfOnlineLikeUser)
    const [likeUser,setLikeUser]=useState(allAppFieldObj?.likeUser)
    const appModalSelector=useSelector((state)=>state.appToggle.appVisibleToggle)
    // console.log('app like',appModalSelector)
    const visitorAppModalSelector=useSelector((state)=>state.visitorAppToggle.visitorAdminAppModalToggle)
    // console.log('visible app ',visitorAppModalSelector)
    const onlineLikeUserAppAdminModalSelector=useSelector((state)=>state.onlineLikeAppToggle.onlineLikeUserAppAdminModalToggle)
    // console.log('online like app ',onlineLikeUserAppAdminModalSelector)
    const anotherMatchUserAdminAppModalSelector=useSelector((state)=>state.anotherMatchAppToggle.anotherMatchUserAdminAppModalToggle)
    // console.log('another match app ', anotherMatchUserAdminAppModalSelector)
    const skipUserAdminAppModalSelector=useSelector((state)=>state.skipUserToggle.skipUserAdminAppModalToggle)
    // console.log('skip user app ', skipUserAdminAppModalSelector)
    const matchUserAdminAppModalSelector=useSelector((state)=>state.matchUserToggle.matchUserAdminAppModalToggle)
    // console.log('match user app ', matchUserAdminAppModalSelector)
    const likeFilterUserAdminAppModalSelector=useSelector((state)=>state.likeFilterUserToggle.likeFilterUserAdminAppModalToggle)
    // console.log('like filter user app ',likeFilterUserAdminAppModalSelector)
    const selfOnlineLikeUserAdminAppModalSelector=useSelector((state)=>state.selfOnlineLikeToggle.selfOnlineLikeUserAdminAppModalToggle)
    // console.log('self online user app ',selfOnlineLikeUserAdminAppModalSelector)
    const likeUserAdminAppModalSelector=useSelector((state)=>state.likeUserToggle.likeUserAdminAppModalToggle)
    // console.log('like  user app ', likeUserAdminAppModalSelector)
    const recordMessageModalSelector=useSelector((state)=>state.recordMessageToggle.recordMessageModalToggle)
    // console.log('record  user app ', recordMessageModalSelector)
    const anotherRecordMessageModalSelector=useSelector((state)=>state.anotherRecordToggle.anotherRecordMessageModalToggle)
    // console.log('another record  user app ', anotherRecordMessageModalSelector)
    const typingModalSelector=useSelector((state)=>state.typingToggle.typingModalToggle)
    // console.log('typing  user app ', typingModalSelector)
    const crossId=useSelector((state)=>state.passAppData.passAppData)
    // console.log('cross id app ', crossId)

    useEffect(() => {
        if (id) {
            dispatch(getAllAppFieldRegisterUserAsync(id));
        }
    }, [dispatch, id]);
    
    useEffect(()=>{
        if(crossId){
     const visitorArray=visitor?.filter((item)=>item._id!==crossId)
     setVisitor(visitorArray)
        }
        else{
         setVisitor(allAppFieldObj?.visitorUserArray)
     }
         },[crossId,allAppFieldObj?.visitorUserArray,visitor])
     
         useEffect(()=>{
        if(crossId){
     const likesArray=likes?.filter((item)=>item._id!==crossId)
     setLikes(likesArray)
        }
        else{
         setLikes(allAppFieldObj?.likes)
     }
         },[crossId,allAppFieldObj?.likes,likes])

         useEffect(()=>{
            if(crossId){
         const onlineLikeUserArray=onlineLikeUser?.filter((item)=>item._id!==crossId)
         setOnlineLikeUser(onlineLikeUserArray)
            }
            else{
             setOnlineLikeUser(allAppFieldObj?.onlineLikeUser)
         }
             },[crossId,allAppFieldObj?.onlineLikeUser,onlineLikeUser])

             useEffect(()=>{
                if(crossId){
             const anotherMatchUserArray=anotherMatchUser?.filter((item)=>item._id!==crossId)
             setAnotherMatchUser(anotherMatchUserArray)
                }
                else{
                 setAnotherMatchUser(allAppFieldObj?.anotherMatchUser)
             }
                 },[crossId,allAppFieldObj?.anotherMatchUser,anotherMatchUser])

                 useEffect(()=>{
                    if(crossId){
                 const skipUserArray=skipUser?.filter((item)=>item._id!==crossId)
                 setSkipUser(skipUserArray)
                    }
                    else{
                     setSkipUser(allAppFieldObj?.skipUser)
                 }
                     },[crossId,allAppFieldObj?.skipUser,skipUser])
                     
                     useEffect(()=>{
                        if(crossId){
                     const matchUserArray=matchUser?.filter((item)=>item._id!==crossId)
                     setMatchUser(matchUserArray)
                        }
                        else{
                         setMatchUser(allAppFieldObj?.matchUser)
                     }
                         },[crossId,allAppFieldObj?.matchUser,matchUser])

                         useEffect(()=>{
                            if(crossId){
                         const likeFilterUserArray=likeFilterUser?.filter((item)=>item._id!==crossId)
                         setLikeFilterUser(likeFilterUserArray)
                            }
                            else{
                             setLikeFilterUser(allAppFieldObj?.likeFilterUser)
                         }
                             },[crossId,allAppFieldObj?.likeFilterUser,likeFilterUser])

                             useEffect(()=>{
                                if(crossId){
                             const selfOnlineLikeUserArray=selfOnlineLikeUser?.filter((item)=>item._id!==crossId)
                             setSelfOnlineLikeUser(selfOnlineLikeUserArray)
                                }
                                else{
                                 setSelfOnlineLikeUser(allAppFieldObj?.selfOnlineLikeUser)
                             }
                                 },[crossId,allAppFieldObj?.selfOnlineLikeUser,selfOnlineLikeUser])

                                 useEffect(()=>{
                                    if(crossId){
                                 const likeUserArray=likeUser?.filter((item)=>item._id!==crossId)
                                 setLikeUser(likeUserArray)
                                    }
                                    else{
                                     setLikeUser(allAppFieldObj?.likeUser)
                                 }
                                     },[allAppFieldObj?.likeUser,likeUser,crossId])
    const handleClose = () => setOpen(false);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "none",
        boxShadow: 24,
        animation: 'dropDown 1s ease-out',
        p: 4,
      };
    const handleOpen = (images) => {
        setImageArray(images)
      setOpen(true);
    };
    const watchVideoButton=(videoUrl)=>{
        setWatchModalOpen(true)
        const personalVideoObj={
         videoUrl:videoUrl
        }
        setPersonalVideoObj(personalVideoObj)
    }
    const handleWatchClose = () => {
        setWatchModalOpen(false)
    };
    const leftArrowClickHandler=()=>{
        navigate('/admin')
        window.location.reload()
          }
          const deleteProfileHandler=(id)=>{
              // console.log('id is profile',id)
              dispatch(deleteProfileAppAsync(id))
            }
            const likeClickHandler=()=>{
                // setLikeOpen(true)
                dispatch(appModalActions.appVisibleToggle());
            }
            const visitorClickHandler=()=>{
                dispatch(visitorAdminAppModalActions.visibleAdminAppToggle());
            }
            const onlineLikeUserClickHandler=()=>{
                dispatch(onlineLikeUserAppAdminModalActions.visibleOnlineLikeUserAppAdminToggle());
            }
            const anotherMatchUserClickHandler=()=>{
                dispatch( anotherMatchUserAdminAppModalActions.anotherMatchUserAdminAppToggle());
            }
            const skipUserClickHandler=()=>{
                dispatch(skipUserAdminAppModalActions.skipUserAdminAppToggle());
            }
            const matchUserClickHandler=()=>{
                dispatch(matchUserAdminAppModalActions.matchUserAdminAppToggle());
            }
            const likeFilterUserClickHandler=()=>{
                dispatch(likeFIlterUserAdminAppModalActions.likeFilterUserAdminAppToggle());
            }
            const selfOnlineLikeUserClickHandler=()=>{
                dispatch(selfOnlineLikeUserAdminAppModalActions.selfOnlineLikeAdminAppToggle());
            }
            const likeUserClickHandler=()=>{
                dispatch(likeUserAdminAppModalActions.visiblelikeUserAdminAppToggle());
            }
            const recordMessageClickHandler=()=>{
                dispatch(recordMessageModalActions.recordMessageModal());
            }
            const anotherRecordMessageClickHandler=()=>{
                dispatch(anotherRecordMessageModalActions.anotherRecordMessageModal());
            }
            const typingClickHandler=()=>{
                dispatch(typingModalActions.typingModal());
            }
return(
    <>
     <div className="lg:w-[50rem] rounded overflow-hidden shadow-lg mt-8 bg-white mb-8 registerAdmiCard registerAdminDetailsCard">
                <img src={leftArrowImg} className="w-5 mt-3 mb-3 ml-4 cursor-pointer" alt="leftArrow" onClick={leftArrowClickHandler}/>
                <div className="flex gap-4">
                {allDetails && allDetails.images && (
                    <img src={allDetails.images[0]} alt="imageUrl" className="sm:w-36 mt-4 mb-4 sm:ml-6" />
                )}
                 <p className="text-md text-[#757575] mt-32 cursor-pointer "  onClick={()=>handleOpen(allDetails.images)}>More
                 </p> 
                </div>
                <div className="flex justify-end">
                <p className="text-md text-[#757575] cursor-pointer pr-5 sm:hidden "  onClick={()=>handleOpen(allDetails.images)}>More
                 </p>
                </div>
                <div className="sm:flex sm:gap-10 grid grid-cols-2 sm:grid-cols-1 registerDetails">
                    <div className="flex gap-2 pl-5 ">
                        <p className="text-lg text-[#757575]">Name :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.firstName?allDetails?.firstName:null}</p>
                    </div>
                    <div className="flex gap-2 pl-5  ">
                        <p className="text-lg text-[#757575] ">City :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.city?allDetails?.city:null}</p>
                    </div>
                    <div className="flex gap-2 pl-5 pt-3 sm:pt-0 registerDetailsNameSpace ">
                        <p className="text-lg text-[#757575]">DOB :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.DOB?allDetails?.DOB:null }</p>
                    </div>
                    <div className="flex gap-2 pl-5  pt-3 sm:pt-0 registerDetailsNameSpace ">
                        <p className="text-lg text-[#757575]">Gender :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.gender?allDetails?.gender:null}</p>
                    </div>
                </div>
                <div className="flex gap-2 pl-5 pt-4 ">
                    <p className="text-lg text-[#757575]">About Info :</p>
                    <p className="text-lg font-semibold">{allDetails &&allDetails?.aboutUser?allDetails?.aboutUser:null}</p>
                </div>
                <div className="sm:flex sm:gap-10 grid grid-cols-1 sm:grid-cols-1">
                    <div className="flex gap-2 pl-5 pt-4 ">
                        <p className="text-lg text-[#757575]">Email :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.email?allDetails?.email:null}</p>
                    </div>
                    <div className="flex gap-2 pt-4 pl-4 sm:pl-0">
                        <p className="text-lg text-[#757575]">PersonalVideo :</p>
                        <img src={playImg} alt="play" className="w-8 cursor-pointer" onClick={()=>watchVideoButton(allDetails.videoUrl)}/>
                     
                    </div>
                </div>

                <div className="sm:flex sm:gap-10 grid grid-cols-1 sm:grid-cols-1 sm:pl-5">
                <div className="flex gap-2 pt-4 pl-4 sm:pl-0 ">
                        <p className="text-lg text-[#757575]">Language :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.language?allDetails?.language:null}</p>
                    </div>
                    <div className="flex gap-2 pt-4 pl-4 sm:pl-0 ">
                        <p className="text-lg text-[#757575]">Phone Number :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.phone?allDetails?.phone:null}</p>
                    </div>
                </div>

                <div className="sm:flex sm:gap-14 sm:pl-5 grid grid-cols-1 pl-4 sm:grid-cols-1 registerAnotherDetails">
                    <div className="flex gap-2 pt-4 ">
                        <p className="text-lg text-[#757575]">Education :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.education?allDetails?.education:null}</p>
                    </div>
                    <div className="flex gap-2 pt-4 registerAnotherDetailsNameSpace ">
                        <p className="text-lg text-[#757575] ">Eating :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.eating?allDetails?.eating:null}</p>
                    </div>
                    <div className="flex gap-2 pt-4 registerAnotherDetailsNameSpace">
                        <p className="text-lg text-[#757575] ">Drinking :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.drinking?allDetails?.drinking:null}</p>
                    </div>
                </div>
                <div className="sm:flex sm:gap-10 sm:pl-5 pl-4 registerAnotherDetails">
                    <div className="flex gap-2 pt-4 ">
                        <p className="text-lg text-[#757575]">Relationship :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.relationship?allDetails?.relationship:null}</p>
                    </div>
                    <div className="flex gap-2 pt-4 registerAnotherDetailsNameSpace">
                        <p className="text-lg text-[#757575]">Looking :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.looking?allDetails?.looking:null}</p>
                    </div>
                    <div className="flex gap-2 pt-4 registerAnotherDetailsNameSpace">
                        <p className="text-lg text-[#757575] ">Smoking :</p>
                        <p className="text-lg font-semibold">{ allDetails && allDetails?.smoking?allDetails?.smoking:null}</p>
                    </div>
                </div>
                <div className="sm:flex sm:gap-10 sm:pl-5 pl-4 registerAnotherDetails">
                    <div className="flex gap-2 pt-4 ">
                        <p className="text-lg text-[#757575]">Zodiac Sign :</p>
                        <p className="text-lg font-semibold">{allDetails && allDetails?.zodiac?allDetails?.zodiac:null}</p>
                    </div>
                    <div className="flex gap-2 pt-4 registerAnotherDetailsNameSpace ">
                        <p className="text-lg text-[#757575]">Interest :</p>
                        {allDetails&& allDetails?.interest? allDetails?.interest?.map((interestItem) => (
                            <p key={interestItem} className="text-lg text-center pb-3 text-black font-semibold">
                                {interestItem},
                            </p>
                        )):null}
                    </div>
                </div>
              <div className="pl-5">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={likeClickHandler}>Likes :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {appModalSelector&& likes?.map((likeItem) => (
                      <RegisterAppUserArrayInfoAdmin likeItem={likeItem}  openId={allDetails._id} />
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer"  onClick={visitorClickHandler}>Visitors :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {visitorAppModalSelector&& visitor?.map((visitorItem) => (
                        
                          <RegisterAppUserArrayInfoAdmin  visitorItem={visitorItem} openId={allDetails._id}/>
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={onlineLikeUserClickHandler}  >onlineLikeUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {onlineLikeUserAppAdminModalSelector&& onlineLikeUser?.map((onlineLikeItem) => (
                        <RegisterAppUserArrayInfoAdmin  onlineLikeItem={onlineLikeItem}  openId={allDetails._id}/>
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={anotherMatchUserClickHandler}  >anotherMatchUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {anotherMatchUserAdminAppModalSelector&& anotherMatchUser?.map((anotherMatchUserItem) => (
                     <RegisterAppUserArrayInfoAdmin anotherMatchUserItem={anotherMatchUserItem}  openId={allDetails._id}/>   
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={skipUserClickHandler}  >skipUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {skipUserAdminAppModalSelector && skipUser?.map((skipUserItem) => (
                      <RegisterAppUserArrayInfoAdmin skipUserItem={skipUserItem}  openId={allDetails._id}/>   
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={matchUserClickHandler}  >matchUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    { matchUserAdminAppModalSelector &&  matchUser?.map((matchUserItem) => (
                         <RegisterAppUserArrayInfoAdmin matchUserItem={matchUserItem}  openId={allDetails._id}/>  
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={likeFilterUserClickHandler}   >likeFilterUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    { likeFilterUserAdminAppModalSelector && likeFilterUser?.map((likeFilterUserItem) => (
                         <RegisterAppUserArrayInfoAdmin likeFilterUserItem={likeFilterUserItem}  openId={allDetails._id}/>  
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={selfOnlineLikeUserClickHandler}   >selfOnlineLikeUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {selfOnlineLikeUserAdminAppModalSelector &&selfOnlineLikeUser?.map((selfOnlineLikeUserItem) => (
                        <RegisterAppUserArrayInfoAdmin selfOnlineLikeUserItem={selfOnlineLikeUserItem}  openId={allDetails._id}/>  
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={likeUserClickHandler}   >likeUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {likeUserAdminAppModalSelector && likeUser?.map((likeUserItem) => (
                        <RegisterAppUserArrayInfoAdmin likeUserItem={likeUserItem}  openId={allDetails._id}/>  
                    ))}
                </div>

                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={recordMessageClickHandler}   >recordMessageId :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {recordMessageModalSelector&& allAppFieldObj?.recordMessageIdArray?.map((recordMessageUserItem) => (
                        <RegisterAppUserArrayInfoAdmin recordMessageUserItem={recordMessageUserItem}  openId={allDetails._id}/>  
                    ))}
                </div>
                
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={anotherRecordMessageClickHandler}   >anotherRecordMessageId :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {anotherRecordMessageModalSelector&& allAppFieldObj?.anotherRecordMessageIdArray?.map((anotherRecordMessageUserItem) => (
                        <RegisterAppUserArrayInfoAdmin anotherRecordMessageUserItem={anotherRecordMessageUserItem}  openId={allDetails._id}/>  
                    ))}
                </div>

                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={typingClickHandler}   >typing :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {typingModalSelector&& allAppFieldObj?.typingIdArray?.map((typingItem) => (
                        <RegisterAppUserArrayInfoAdmin typingItem={typingItem}  openId={allDetails._id}/>  
                    ))}
                </div>
                        <div className="flex justify-center mt-3 mb-6">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded w-64 text-lg font-semibold" onClick={()=>deleteProfileHandler(allDetails._id)}>
  Delete
</button>
                        </div>
            </div>
            <WatchVideo modalOpen={watchModalOpen} handleClose={ handleWatchClose}  personalVideoData={personalVideoObj} />
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div  style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {
                    imageArray.map(imageItem=>{
                        return (
                            <>
                              <div className="flex justify-center">
                              <img src={imageItem} className="w-36  mt-4" alt="imageUrk "/>
</div>
                            </>
                        )
                    })
                }
              </div>
  
              </Box>
          </Modal>
          <style jsx="true">{`
                @keyframes dropDown {
                    0% {
                        transform: translateY(-100vh) translate(-50%, -50%);
                    }
                    100% {
                        transform: translateY(0) translate(-50%, -50%);
                    }
                }
            `}</style>
    </>
)
}
export default MoreAllAppUserInfoDetails