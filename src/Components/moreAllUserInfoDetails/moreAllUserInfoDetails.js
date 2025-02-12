import { useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { getAllFieldRegisterUserAsync } from "../../Redux/Slice/getAllFieldRegisterUserSlice/getAllFieldRegisterUserSlice";
import deleteImg from '../../assets/adminIcons/delete.png';
import leftArrowImg from '../../assets/adminIcons/leftArrow.svg';
import playImg from '../../assets/adminIcons/play.png';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { modalActions } from "../../Redux/Slice/modalSlice";
import { visitorAdminModalActions } from "../../Redux/Slice/visitorAdminModalSlice";
import { hideRemainAdminModalActions } from "../../Redux/Slice/hideRemainAdminModalSlice";
import { onlineLikeUserAdminModalActions } from "../../Redux/Slice/onlineLikeUserAdminModalSlice";
import { anotherMatchUserAdminModalActions } from "../../Redux/Slice/anotherMatchUserAdminModalSlice";
import { skipUserAdminModalActions } from "../../Redux/Slice/skipUserAdminModalSlice";
import { matchUserAdminModalActions } from "../../Redux/Slice/matchUserAdminModalSlice";
import { likeFIlterUserAdminModalActions } from "../../Redux/Slice/likeFilterUserAdminModalSlice";
import { selfOnlineLikeUserAdminModalActions } from "../../Redux/Slice/selfOnlineLikeUserAdminModalSlice";
import { likeUserAdminModalActions } from "../../Redux/Slice/likeUserAdminModalSlice";
import { selfDeactivateAdminModalActions } from "../../Redux/Slice/selfDeactivateAdminModalSlice";
import WatchVideo from "../common/watchVideo/watchVideo";
import RegisterUserArrayInfoAdmin from "../common/registerUserArrayInfoAdmin/registerUserArrayInfoAdmin";
import { deleteProfileUserAsync } from "../../Redux/Slice/deleteProfileUser/deleteProfileUser";


const MoreAllUserInfoDetails = ({ allDetails }) => {
    // const [likeOpen,setLikeOpen]=useState(false)
    const id = allDetails?._id;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const allFieldArray = useSelector((state) => state.getAllFieldRegisterUser.getAllFieldRegisterUserArray);
    const [watchModalOpen, setWatchModalOpen] = useState(false)
    const [personalVideoObj,setPersonalVideoObj]=useState({})
    const [open, setOpen] =useState(false);
    const [imageArray,setImageArray]=useState([])
    const [visitor,setVisitor]=useState(allFieldArray?.visitorUserArray)
    const [likes,setLikes]=useState(allFieldArray?.likes)
    const [hideRemainMatch,setHideRemainMatch]=useState(allFieldArray?.hideRemainMatchArray)
    const [onlineLikeUser,setOnlineLikeUser]=useState(allFieldArray?.onlineLikeUser)
    const [anotherMatchUser,setAnotherMatchUser]=useState(allFieldArray?.anotherMatchUser)
    const [skipUser,setSkipUser]=useState(allFieldArray?.skipUser)
    const [matchUser,setMatchUser]=useState(allFieldArray?.matchUser)
    const [likeFilterUser,setLikeFilterUser]=useState(allFieldArray?.likeFilterUser)
    const [selfOnlineLikeUser,setSelfOnlineLikeUser]=useState(allFieldArray?.selfOnlineLikeUser)
    const [likeUser,setLikeUser]=useState( allFieldArray?.likeUser)
    const modalSelector=useSelector((state)=>state.modal.visibleToggle)
    const visitorAdminModalSelector=useSelector((state)=>state.visitorAdminModal.visitorAdminModalToggle)
    const hideRemainMatchAdminModalSelector=useSelector((state)=>state.hideRemainAdminModal.hideRemainAdminModalToggle)
    const onlineLikeUserAdminModalSelector=useSelector((state)=>state.onlineLikeUserAdminModal.onlineLikeUserAdminModalToggle)
    const anotherMatchUserAdminModalSelector=useSelector((state)=>state.anotherMatchUserAdminModal.anotherMatchUserAdminModalToggle)
    const skipUserAdminModalSelector=useSelector((state)=>state.skipUserAdminModal.skipUserAdminModalToggle)
    const matchUserAdminModalSelector=useSelector((state)=>state.matchUserAdminModal.matchUserAdminModalToggle)
    const likeFilterUserAdminModalSelector=useSelector((state)=>state.likeFilterUserAdminModal.likeFilterUserAdminModalToggle)
    const selfOnlineLikeUserAdminModalSelector=useSelector((state)=>state.selfOnlineLikeUserAdminModal.selfOnlineLikeUserAdminModalToggle)
    const likeUserAdminModalSelector=useSelector((state)=>state.likeUserAdminModal.likeUserAdminModalToggle)
    const selfDeactivateAdminModalSelector=useSelector((state)=>state.selfDeactivateAdminModal.selfDeactivateAdminModalToggle)
    const crossId=useSelector((state)=>state.passData.passData)
    // console.log('cross id is',crossId)
    // console.log('all field array ', allFieldArray);
    // console.log('self online like user array',selfOnlineLikeUserAdminModalSelector);
    useEffect(() => {
        if (id) {
            dispatch(getAllFieldRegisterUserAsync(id));
        }
    }, [dispatch, id]);


    useEffect(()=>{
   if(crossId){
const visitorArray=visitor?.filter((item)=>item._id!==crossId)
setVisitor(visitorArray)
   }
   else{
    setVisitor(allFieldArray?.visitorUserArray)
}
    },[crossId,allFieldArray?.visitorUserArray,visitor])

    useEffect(()=>{
   if(crossId){
const likesArray=likes?.filter((item)=>item._id!==crossId)
setLikes(likesArray)
   }
   else{
    setLikes(allFieldArray?.likes)
}
    },[crossId,allFieldArray?.likes,likes])

    useEffect(()=>{
        if(crossId){
     const hideRemainMatchArray=hideRemainMatch?.filter((item)=>item._id!==crossId)
     setHideRemainMatch(hideRemainMatchArray)
        }
        else{
         setHideRemainMatch(allFieldArray?.hideRemainMatchArray)
     }
         },[crossId,allFieldArray?.hideRemainMatchArray,hideRemainMatch])

         useEffect(()=>{
            if(crossId){
         const hideRemainMatchArray=hideRemainMatch?.filter((item)=>item._id!==crossId)
         setHideRemainMatch(hideRemainMatchArray)
            }
            else{
             setHideRemainMatch(allFieldArray?.hideRemainMatchArray)
         }
             },[crossId,allFieldArray?.hideRemainMatchArray,hideRemainMatch])

             useEffect(()=>{
                if(crossId){
             const onlineLikeUserArray=onlineLikeUser?.filter((item)=>item._id!==crossId)
             setOnlineLikeUser(onlineLikeUserArray)
                }
                else{
                 setOnlineLikeUser(allFieldArray?.onlineLikeUser)
             }
                 },[crossId,allFieldArray?.onlineLikeUser,onlineLikeUser])

                 useEffect(()=>{
                    if(crossId){
                 const anotherMatchUserArray=anotherMatchUser?.filter((item)=>item._id!==crossId)
                 setAnotherMatchUser(anotherMatchUserArray)
                    }
                    else{
                     setAnotherMatchUser(allFieldArray?.anotherMatchUser)
                 }
                     },[crossId,allFieldArray?.anotherMatchUser,anotherMatchUser])

                     useEffect(()=>{
                        if(crossId){
                     const skipUserArray=skipUser?.filter((item)=>item._id!==crossId)
                     setSkipUser(skipUserArray)
                        }
                        else{
                         setSkipUser(allFieldArray?.skipUser)
                     }
                         },[crossId,allFieldArray?.skipUser,skipUser])
                         
                         useEffect(()=>{
                            if(crossId){
                         const matchUserArray=matchUser?.filter((item)=>item._id!==crossId)
                         setMatchUser(matchUserArray)
                            }
                            else{
                             setMatchUser(allFieldArray?.matchUser)
                         }
                             },[crossId,allFieldArray?.matchUser,matchUser])

                             useEffect(()=>{
                                if(crossId){
                             const likeFilterUserArray=likeFilterUser?.filter((item)=>item._id!==crossId)
                             setLikeFilterUser(likeFilterUserArray)
                                }
                                else{
                                 setLikeFilterUser(allFieldArray?.likeFilterUser)
                             }
                                 },[crossId,allFieldArray?.likeFilterUser,likeFilterUser])

                                 useEffect(()=>{
                                    if(crossId){
                                 const selfOnlineLikeUserArray=selfOnlineLikeUser?.filter((item)=>item._id!==crossId)
                                 setSelfOnlineLikeUser(selfOnlineLikeUserArray)
                                    }
                                    else{
                                     setSelfOnlineLikeUser(allFieldArray?.selfOnlineLikeUser)
                                 }
                                     },[crossId,allFieldArray?.selfOnlineLikeUser,selfOnlineLikeUser])

                                     useEffect(()=>{
                                        if(crossId){
                                     const likeUserArray=likeUser?.filter((item)=>item._id!==crossId)
                                     setLikeUser(likeUserArray)
                                        }
                                        else{
                                         setLikeUser(allFieldArray?.likeUser)
                                     }
                                         },[crossId,allFieldArray?.likeUser,likeUser])
        

    const likeClickHandler=()=>{
        // setLikeOpen(true)
        dispatch(modalActions.visibleToggle());
    }
    const visitorClickHandler=()=>{
        dispatch(visitorAdminModalActions.visibleAdminToggle());
    }
    const hideRemainMatchClickHandler=()=>{
        dispatch(hideRemainAdminModalActions.visiblehideRemainAdminToggle());
    }
    const onlineLikeUserClickHandler=()=>{
        dispatch(onlineLikeUserAdminModalActions.visibleOnlineLikeUserAdminToggle());
    }
    const anotherMatchUserClickHandler=()=>{
        dispatch( anotherMatchUserAdminModalActions.anotherMatchUserAdminToggle());
    }
    const skipUserClickHandler=()=>{
        dispatch(skipUserAdminModalActions.skipUserAdminToggle());
    }
    const matchUserClickHandler=()=>{
        dispatch(matchUserAdminModalActions.matchUserAdminToggle());
    }
    const likeFilterUserClickHandler=()=>{
        dispatch(likeFIlterUserAdminModalActions.likeFilterUserAdminToggle());
    }
    const selfOnlineLikeUserClickHandler=()=>{
        dispatch(selfOnlineLikeUserAdminModalActions.selfOnlineLikeAdminToggle());
    }
    const likeUserClickHandler=()=>{
        dispatch(likeUserAdminModalActions.visiblelikeUserAdminToggle());
    }
    const selfDeactivateClickHandler=()=>{
        dispatch(selfDeactivateAdminModalActions.visibleselfDeactivateAdminToggle());
    }
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
    const handleClose = () => setOpen(false);
    const handleOpen = (images) => {
        setImageArray(images)
      setOpen(true);
     
    };
    const leftArrowClickHandler=()=>{
  navigate('/admin')
  window.location.reload()
    }
    const deleteProfileHandler=(id)=>{
        // console.log('id is profile',id)
        dispatch(deleteProfileUserAsync(id))
      }
    return (
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
                    {modalSelector&& likes?.map((likeItem) => (
                      <RegisterUserArrayInfoAdmin likeItem={likeItem}  openId={allDetails._id} />
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer"  onClick={visitorClickHandler}>Visitors :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {visitorAdminModalSelector&& visitor?.map((visitorItem) => (
                        
                          <RegisterUserArrayInfoAdmin  visitorItem={visitorItem} openId={allDetails._id}/>
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={hideRemainMatchClickHandler} >hideRemainMatch :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                { hideRemainMatchAdminModalSelector && hideRemainMatch?.map((hideRemainItem) => (
                          
                          <RegisterUserArrayInfoAdmin  hideRemainItem={hideRemainItem}  openId={allDetails._id}/>
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={onlineLikeUserClickHandler}  >onlineLikeUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {onlineLikeUserAdminModalSelector&& onlineLikeUser?.map((onlineLikeItem) => (
                        <RegisterUserArrayInfoAdmin  onlineLikeItem={onlineLikeItem}  openId={allDetails._id}/>
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={anotherMatchUserClickHandler}  >anotherMatchUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {anotherMatchUserAdminModalSelector&& anotherMatchUser?.map((anotherMatchUserItem) => (
                     <RegisterUserArrayInfoAdmin anotherMatchUserItem={anotherMatchUserItem}  openId={allDetails._id}/>   
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={skipUserClickHandler}  >skipUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {skipUserAdminModalSelector && skipUser?.map((skipUserItem) => (
                      <RegisterUserArrayInfoAdmin skipUserItem={skipUserItem}  openId={allDetails._id}/>   
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={matchUserClickHandler}  >matchUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    { matchUserAdminModalSelector &&  matchUser?.map((matchUserItem) => (
                         <RegisterUserArrayInfoAdmin matchUserItem={matchUserItem}  openId={allDetails._id}/>  
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={likeFilterUserClickHandler}   >likeFilterUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    { likeFilterUserAdminModalSelector && likeFilterUser?.map((likeFilterUserItem) => (
                         <RegisterUserArrayInfoAdmin likeFilterUserItem={likeFilterUserItem}  openId={allDetails._id}/>  
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={selfOnlineLikeUserClickHandler}   >selfOnlineLikeUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {selfOnlineLikeUserAdminModalSelector && selfOnlineLikeUser?.map((selfOnlineLikeUserItem) => (
                        <RegisterUserArrayInfoAdmin selfOnlineLikeUserItem={selfOnlineLikeUserItem}  openId={allDetails._id}/>  
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={likeUserClickHandler}   >likeUser :</p>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {likeUserAdminModalSelector && likeUser?.map((likeUserItem) => (
                        <RegisterUserArrayInfoAdmin likeUserItem={likeUserItem}  openId={allDetails._id}/>  
                    ))}
                </div>
                <div className="pl-5 pt-3">
                    <p className="text-lg text-[#757575] cursor-pointer" onClick={selfDeactivateClickHandler}    >selfDeactivate :</p>
                </div>
                {selfDeactivateAdminModalSelector &&<div  className="w-[48rem] rounded overflow-hidden shadow-lg mt-4">
                            <div className="flex  justify-between">
                                <img
                                    src={allFieldArray?.selfDeactivate?.images && allFieldArray?.selfDeactivate?.images[0]}
                                    className="w-20 ml-4 mt-4 mb-2 rounded-full"
                                    alt="likeImage"
                                />
                                <p className="text-lg font-semibold pt-9">{allFieldArray?.selfDeactivate?.firstName}</p>
                                <p className="text-lg font-semibold pt-9">{allFieldArray?.selfDeactivate?.email}</p>
                                <p className="text-lg font-semibold pt-9">{allFieldArray?.selfDeactivate?.phone}</p>
                                <img src={deleteImg} className="w-8 h-8 mt-8 cursor-pointer mr-4" alt="Delete" />
                            </div>
                        </div>}
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
    );
};

export default MoreAllUserInfoDetails;