import { BACKEND_BASE_URL } from "../../Services/api"
import { useState, useEffect } from "react"
import cross from '../../assets/matchIcons/cross.png'
import like from '../../assets/matchIcons/right.png'
import leftArrow from '../../assets/personalProfileIcons/leftArrow.svg'
import rightArrow from '../../assets/personalProfileIcons/rightArrow.svg'
import { useDispatch } from "react-redux"
import { addCrossMatchAsync } from "../../Redux/Slice/addCrossMatchSlice/addCrossMatchSlice"
import { useNavigate } from "react-router-dom"
import { addVisitorAsync } from "../../Redux/Slice/addVisitorSlice/addVisitorSlice"
import { addLikeMatchAsync } from "../../Redux/Slice/addLikeMatchSlice/addLikeMatchSlice"
import { addLikeUserAsync } from "../../Redux/Slice/addLikeUser/addLikeUser"
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux"
import { addNotifyAsync } from "../../Redux/Slice/addNotifySlice/addNotifySlice"
import { addLikeNotifyAsync } from "../../Redux/Slice/addLikeNotifySlice/addLikeNotifySlice"
import { addLikeCounterUserAsync } from "../../Redux/Slice/addLikeCounterUserSlice/addLikeCounterUserSlice"
import right from '../../assets/personalProfileIcons/right.svg'
import rightTik from '../../assets/personalProfileIcons/rightTikss.svg'
import crossTik from '../../assets/personalProfileIcons/crossTik.svg'
import MatchesModal from "../matchesModal/matchesModal"
import { addSmsSenderAsync } from "../../Redux/Slice/addSmsSlice/addSmsSlice"
import playVideo from '../../assets/personalProfileIcons/playVideo.png'
import WatchVideo from "../common/watchVideo/watchVideo"
import SweetAlert2 from 'react-sweetalert2';
import sorryImage from "../../assets/personalProfileIcons/sorryEmoji.png"
import { passMatchArraySliceActions } from "../../Redux/Slice/passMatchArraySlice/passMatchArraySlice"
import { passDataSliceAcions } from "../../Redux/Slice/passDataSlice/passDataSlice"
import '../../../src/styles.css'
const Matches = ({ matches }) => 
{

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getProfile = () => matches || {};
  const dob = getProfile().DOB;
  const dobBreak = dob?.split("/");
  const year = dobBreak?.[2];
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  const age = year ? currentYear - parseInt(year) : "";
  const id = sessionStorage.getItem('userId')
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [crosses, setCrosses] = useState(false);
  const [watchModalOpen, setWatchModalOpen] = useState(false)
  const [matchesProfileObj,setMatchesProfileObj]=useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [modalObj,setModalObj]=useState({})
  const [swalProps, setSwalProps] = useState({});
  const getDeactivateAccountSelector=useSelector((state)=>state.getDeactivateUser.  getDeactivateUser.deactivateHeading)
  // console.log('get deactivate user',getDeactivateAccountSelector)
  const matchesData = useSelector((state) => state.matchData.getMatchesArray.interestUsers);
  // console.log('matches data array',matchesData)
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

  const getImageUrl = () => {
    // return BACKEND_BASE_URL + (getProfile().images?.[currentImageIndex] || "");
    return  (getProfile().images?.[currentImageIndex] || "");
  };

  const addCrossHandler = (crossId) => {
    if( getDeactivateAccountSelector === 'deactivated') {
      setSwalProps({
        show: true,
        text: 'please activate your account goes on Settings < Account Settings < Manage Account < Deactivate Account',
        imageUrl: sorryImage,
        style: {
          textAlign: 'center',
          display: 'block',
          width: '200px', // Set the width and height of the image
          height: '150px'
        },
        didClose: () => {
          setSwalProps({});
        }
    });
   
      return;
    }
    const crossObjId = {
      id: id,
      userId: crossId
    };
    setCrosses(true);
    dispatch(passDataSliceAcions.passDatas(crossId))
    setTimeout(() => {
      dispatch(addCrossMatchAsync(crossObjId));
      // window.location.reload();
      setCrosses(false); // Set crosses back to false after a delay
    }, 700);
  };

  const addLikeHandler = (likeId) => {
    if( getDeactivateAccountSelector === 'deactivated') {
      setSwalProps({
        show: true,
        text: 'please activate your account goes on Settings < Account Settings < Manage Account < Deactivate Account',
        imageUrl: sorryImage,
        style: {
          textAlign: 'center',
          display: 'block',
          width: '200px', // Set the width and height of the image
          height: '150px'
        },
        didClose: () => {
          setSwalProps({});
        }
    });
   
      return;
    }
    const likeObjId = {
      id: id,
      likeUserId: likeId
    };
    const notifyobjId = {
      id: id,
      userId: likeId
    };
   const smsId={
   id:id,
   recieverUserId:likeId
   }
    setLiked(true);
    dispatch(passDataSliceAcions.passDatas(likeId))
    setTimeout(() => {
      dispatch(addLikeMatchAsync(likeObjId));
      dispatch(addLikeUserAsync(likeObjId));
      dispatch(addLikeNotifyAsync(notifyobjId));
      dispatch(addLikeCounterUserAsync(notifyobjId));
      // window.location.reload();
      setLiked(false)
    }, 700); // Adjust the delay time as needed
    dispatch(addSmsSenderAsync(smsId))
  };

  const mainContentMatchesHandler = (visitorId) => {
    sessionStorage.setItem('visitorId', visitorId)
    setModalObj(matches)
    setModalOpen(true)
    console.log('matches data is',matches)
    // navigate('/mainContent/matchesMainContent', { state: matches })
    const visitorObjId = {
      id: id,
      userId: visitorId
    }
    // dispatch(addVisitorAsync(visitorObjId))
  }
  const handleClose = () => {
       setModalOpen(false)
  };
  const watchVideoButton=()=>{
    setWatchModalOpen(true)
 setMatchesProfileObj(matches)
  
  }
  const handleWatchClose = () => {
    setWatchModalOpen(false)
};
  return (
    <>
      <div className="flex justify-center md:mt-14 md:ml-14 mt-12 custom-margin ">
        <div className="relative">
          {liked && (
            <div className="absolute inset-0 bg-blue-500 opacity-80 rounded-2xl flex items-center justify-center">
              <img src={rightTik} alt="Right" className="w-14 h-14" />
            </div>
          )}

          {crosses && (
            <div className="absolute inset-0 bg-gray-600 opacity-80 rounded-2xl flex items-center justify-center">
              {/* You can add any content here */}
              <img src={crossTik} alt="Right" className="w-14 h-14 filter invert" />
            </div>
          )}

          <div className={`md:w-80 w-72 match-Card rounded-2xl shadow-lg bg-white ${liked ? 'bg-white' : '' || crosses ? 'bg-white' : ''}`}>
            <div className="">
            <div className="flex absolute justify-center ml-7 mt-3 gap-1 cursor-pointer"  onClick={watchVideoButton}>
                <img src={playVideo} className="w-6 invert "/>
                <p className="text-sm font-bold text-white">Watch Video</p>
              </div>
              <div className="flex justify-center">
               {matches?.images?.length===1?null: <img
                  src={leftArrow}
                  className="w-5 cursor-pointer relative left-6 filter invert"
                  onClick={handleLeftArrowClick}
                />}
                <img src={getImageUrl()} className="object-cover w-96 h-96  cursor-pointer" onClick={() => mainContentMatchesHandler(matches._id)} />
               {matches?.images?.length===1?null: <img
                  src={rightArrow}
                  className="w-5 cursor-pointer relative right-7 filter invert"
                  onClick={handleRightArrowClick}
                />}
              </div>
             
              <div className="flext justify-center -mt-20">
              <div className="flex gap-7 -mt-14 ml-4 text-white justify-center">
                <p className="text-3xl font-bold">{matches.firstName}</p>
                <p className="text-xl font-bold pt-1">{age}</p>
              </div>
              <div className="flex justify-center text-white ">
              <p className="text-1xl font-bold tracking-wider pt-0">{matches.city}</p>
              </div>
              </div>
             
              <div className="mt-7 flex gap-8 justify-center mb-3">
                <img src={cross} className="w-14 cursor-pointer" onClick={() => addCrossHandler(matches._id)} />
                <img src={like} className="w-14 h-13 cursor-pointer" onClick={() => addLikeHandler(matches._id)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SweetAlert2 {...swalProps} />
      <MatchesModal modalData={modalObj} match={modalOpen} handleCloses={handleClose}/>
      <WatchVideo modalOpen={watchModalOpen} handleClose={ handleWatchClose}  matchesVideoData={matchesProfileObj}/>
    </>
  )
}

export default Matches;
