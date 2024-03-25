import { BACKEND_BASE_URL } from "../../Services/api"
import { useState } from "react"
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
const Matches = ({ matches}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const getProfile = () => matches || {};
  const dob = getProfile().DOB;
  const dobBreak = dob?.split("/");
  const year = dobBreak?.[2];
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  const age = year ? currentYear - parseInt(year) : "";
  const id=sessionStorage.getItem('userId')
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const addCrossHandler=(crossId)=>{
    const crossObjId={
    id:id,
   userId:crossId
    }
    dispatch(addCrossMatchAsync(crossObjId))
    window.location.reload()
  }
  const addLikeHandler=(likeId)=>{
  const likeObjId={
    id:id,
    likeUserId:likeId
  }
  dispatch(addLikeMatchAsync(likeObjId))
  dispatch(addLikeUserAsync(likeObjId))
  window.location.reload()
  }
  const mainContentMatchesHandler=(visitorId)=>{
    sessionStorage.setItem('visitorId',visitorId)
    navigate('/mainContent/matchesMainContent',{state:matches})
    const visitorObjId={
      id:id,
      userId:visitorId
    }
    dispatch(addVisitorAsync(visitorObjId))
  }
  return (
    <>
      <div className="flex justify-center mt-14 ml-14">

        <div className="w-80 rounded-2xl  shadow-lg ">
          <div className="">
            <div className="flex justify-center ">
              <img
                src={leftArrow}
                className="w-5  cursor-pointer relative left-6 filter invert "
                onClick={handleLeftArrowClick}
              />
              <img src={getImageUrl()} className="cursor-pointer" onClick={()=>mainContentMatchesHandler(matches._id)} />
              <img
                src={rightArrow}
                className="w-5  cursor-pointer relative right-7 filter invert"
                onClick={handleRightArrowClick}
              />
            </div>
            <div className="flex gap-7 -mt-14  ml-4 text-white justify-center">
              <p className="text-3xl font-bold">{matches.firstName}</p>
              <p className="text-xl font-bold pt-1">{age}</p>
            </div>
            <div className="mt-7 flex gap-8 justify-center mb-3  ">
              <img src={cross} className="w-14 cursor-pointer " onClick={()=>addCrossHandler(matches._id)} />
              <img src={like} className="w-14 h-13 cursor-pointer" onClick={()=>addLikeHandler(matches._id)} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Matches