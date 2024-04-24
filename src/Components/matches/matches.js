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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux"
import { addNotifyAsync } from "../../Redux/Slice/addNotifySlice/addNotifySlice"
import { addLikeNotifyAsync } from "../../Redux/Slice/addLikeNotifySlice/addLikeNotifySlice"
import { addLikeCounterUserAsync } from "../../Redux/Slice/addLikeCounterUserSlice/addLikeCounterUserSlice"
import right from '../../assets/personalProfileIcons/right.svg'
import rightTik from '../../assets/personalProfileIcons/rightTikss.svg'
import crossTik from '../../assets/personalProfileIcons/crossTik.svg'
const Matches = ({ matches }) => {
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
    return BACKEND_BASE_URL + (getProfile().images?.[currentImageIndex] || "");
  };

  const addCrossHandler = (crossId) => {
    const crossObjId = {
      id: id,
      userId: crossId
    };
    setCrosses(true); // Set crosses to true to change background color
    setTimeout(() => {
      dispatch(addCrossMatchAsync(crossObjId));
      window.location.reload();
      setCrosses(false); // Set crosses back to false after a delay
    }, 700);
  };

  const addLikeHandler = (likeId) => {
    const likeObjId = {
      id: id,
      likeUserId: likeId
    };
    const notifyobjId = {
      id: id,
      userId: likeId
    };

    setLiked(true);

    setTimeout(() => {
      dispatch(addLikeMatchAsync(likeObjId));
      dispatch(addLikeUserAsync(likeObjId));
      dispatch(addLikeNotifyAsync(notifyobjId));
      dispatch(addLikeCounterUserAsync(notifyobjId));
      window.location.reload();
    }, 700); // Adjust the delay time as needed
  };

  const mainContentMatchesHandler = (visitorId) => {
    sessionStorage.setItem('visitorId', visitorId)
    console.log('matches data is',matches)
    navigate('/mainContent/matchesMainContent', { state: matches })
    const visitorObjId = {
      id: id,
      userId: visitorId
    }
    dispatch(addVisitorAsync(visitorObjId))
  }

  return (
    <>
      <div className="flex justify-center mt-14 ml-14">
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

          <div className={`w-80 rounded-2xl shadow-lg ${liked ? 'bg-white' : '' || crosses ? 'bg-white' : ''}`}>
            <div className="">
              <div className="flex justify-center">
                <img
                  src={leftArrow}
                  className="w-5 cursor-pointer relative left-6 filter invert"
                  onClick={handleLeftArrowClick}
                />
                <img src={getImageUrl()} className="cursor-pointer" onClick={() => mainContentMatchesHandler(matches._id)} />
                <img
                  src={rightArrow}
                  className="w-5 cursor-pointer relative right-7 filter invert"
                  onClick={handleRightArrowClick}
                />
              </div>
              <div className="flex gap-7 -mt-14 ml-4 text-white justify-center">
                <p className="text-3xl font-bold">{matches.firstName}</p>
                <p className="text-xl font-bold pt-1">{age}</p>
              </div>
              <div className="mt-7 flex gap-8 justify-center mb-3">
                <img src={cross} className="w-14 cursor-pointer" onClick={() => addCrossHandler(matches._id)} />
                <img src={like} className="w-14 h-13 cursor-pointer" onClick={() => addLikeHandler(matches._id)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Matches;
