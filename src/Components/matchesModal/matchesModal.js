// 1st animation
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import { BACKEND_BASE_URL } from "../../Services/api";
// import { useState } from "react";
// import leftArrow from "../../assets/personalProfileIcons/leftArrow.svg";
// import rightArrow from "../../assets/personalProfileIcons/rightArrow.svg";

// const MatchesModal = ({ modalData, match, handleCloses }) => {
//   console.log('modal data', modalData)
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 700,
//     bgcolor: "background.paper",
//     border: "none",
//     boxShadow: 24,
//     p: 4,
//   };

//   const getProfile = () =>
//     modalData || {};

//   const handleLeftArrowClick = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? getProfile().images?.length - 1 : prevIndex - 1
//     );
//   };

//   const handleRightArrowClick = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === (getProfile().images?.length || 0) - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const getImageUrl = () => {
//     // return BACKEND_BASE_URL + (getProfile().images?.[currentImageIndex] || "");
//     return (getProfile().images?.[currentImageIndex] || "");
//   };

//   const ITEM_HEIGHT = 48;
//   const ITEM_PADDING_TOP = 8;
//   const MenuProps = {
//     PaperProps: {
//       style: {
//         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//         width: 250,
//       },
//     },
//   };

//   const dob = getProfile().DOB;
//   const dobBreak = dob?.split("/");
//   const year = dobBreak?.[2];
//   let currentDate = new Date();
//   let currentYear = currentDate.getFullYear();
//   const age = year ? currentYear - parseInt(year) : "";

//   return (
//     <>
//       <Modal
//         open={match}
//         onClose={handleCloses}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <div className={flex  ${modalData?.images?.length==1?'justify-center':'justify-between'} bg-black}>
//             {modalData?.images?.length==1?null:<img
//               src={leftArrow}
//               className="w-5 filter invert cursor-pointer"
//               onClick={handleLeftArrowClick}
//             />}
//             <div  className={flex justify-center }>
//               <img
//                 src={getImageUrl()}
//                 className="w-48 h-48 object-cover cursor-pointer"
//               />
//             </div>
//             {modalData?.images?.length==1?null:<img
//               src={rightArrow}
//               className="w-5 filter invert cursor-pointer"
//               onClick={handleRightArrowClick}
//             />}
//           </div>
//           <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
//             <div className="flex justify-between">
//               <div className="flex gap-0">
//                 <p className="pl-5 pt-4 text-lg font-semibold">
//                   {modalData?.firstName},
//                 </p>
//                 <p className="pl-3 pt-4 text-lg text-[#333] font-semibold">
//                   {age},
//                 </p>
//                 <p className="text-lg pt-4 pl-3 text-[#333] font-semibold">
//                   {modalData?.city}
//                 </p>
//               </div>
//             </div>
//             <div className="pl-5 pt-3">
//               <p className="text-lg text-[#757575]">Relationship status</p>
//               <p className="text-lg pt-1 font-semibold">
//                 {modalData?.relationship}
//               </p>
//             </div>
//             <div className="pl-5 pt-3">
//               <p className="text-lg text-[#757575]">I'm looking for</p>
//               <p className="text-lg pt-1 font-semibold">
//                 {modalData?.looking}
//               </p>
//             </div>
//             <div className="pl-5 pt-3">
//               <p className="text-lg text-[#757575]">Interests</p>
//               <div className="grid grid-cols-5 gap-3">
//                 {modalData.interest?.map(modalInterest => {
//                   return (
//                     <div className="bg-slate-200 rounded mt-3" key={modalInterest}>
//                       <p className="text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575]">
//                         {modalInterest}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="pl-5 pt-3">
//               <p className="text-lg text-[#757575]">About me</p>
//               <p className="text-lg pt-1 font-semibold">
//                 {modalData?.aboutUser}
//               </p>
//             </div>
//             <div className="pl-5 pt-3">
//               <p className="text-lg text-[#757575]">Education</p>
//               <p className="text-lg pt-1 font-semibold">
//                 {modalData?.education}
//               </p>
//             </div>
//             <div className="pl-5 pt-3">
//               <p className="text-lg text-[#757575]">Profession</p>
//               <p className="text-lg pt-1 font-semibold">
//                 {modalData?.profession}
//               </p>
//             </div>
//             <div className="pl-5 pt-3">
//               <p className="text-lg text-[#757575]">Drinking</p>
//               <p className="text-lg pt-1 font-semibold">
//                 {modalData?.drinking}
//               </p>
//             </div>
//             <div className="pl-5 pt-3">
//               <p className="text-lg text-[#757575]">Smoking</p>
//               <p className="text-lg pt-1 font-semibold">
//                 {modalData?.smoking}
//               </p>
//             </div>
//             <div className="pl-5 pt-3">
//               <p className="text-lg text-[#757575]">Eating</p>
//               <p className="text-lg pt-1 font-semibold">
//                 {modalData?.eating}
//               </p>
//             </div>
//             <div className="pl-5 pt-3">
//               <p className="text-lg text-[#757575]">Zodiac sign</p>
//               <p className="text-lg pt-1 font-semibold">
//                 {modalData?.zodiac}
//               </p>
//             </div>
//             <div className="pl-5 pt-3">
//               <p className="text-lg text-[#757575]">Languages I know</p>
//               <p className="text-lg pt-1 font-semibold">
//                 {modalData?.language}
//               </p>
//             </div>
//           </div>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default MatchesModal;
// 2nd animation
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Fade from "@mui/material/Fade";
// import { BACKEND_BASE_URL } from "../../Services/api";
// import { useState } from "react";
// import leftArrow from "../../assets/personalProfileIcons/leftArrow.svg";
// import rightArrow from "../../assets/personalProfileIcons/rightArrow.svg";

// const MatchesModal = ({ modalData, match, handleCloses }) => {
//   console.log('modal data', modalData)
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 700,
//     bgcolor: "background.paper",
//     border: "none",
//     boxShadow: 24,
//     p: 4,
//   };

//   const getProfile = () => modalData || {};

//   const handleLeftArrowClick = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? getProfile().images?.length - 1 : prevIndex - 1
//     );
//   };

//   const handleRightArrowClick = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === (getProfile().images?.length || 0) - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const getImageUrl = () => {
//     return (getProfile().images?.[currentImageIndex] || "");
//   };

//   const ITEM_HEIGHT = 48;
//   const ITEM_PADDING_TOP = 8;
//   const MenuProps = {
//     PaperProps: {
//       style: {
//         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//         width: 250,
//       },
//     },
//   };

//   const dob = getProfile().DOB;
//   const dobBreak = dob?.split("/");
//   const year = dobBreak?.[2];
//   let currentDate = new Date();
//   let currentYear = currentDate.getFullYear();
//   const age = year ? currentYear - parseInt(year) : "";

//   return (
//     <>
//       <Modal
//         open={match}
//         onClose={handleCloses}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         closeAfterTransition
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={match} timeout={500}>
//           <Box sx={style}>
//             <div className={`flex ${modalData?.images?.length == 1 ? 'justify-center' : 'justify-between'} bg-black`}>
//               {modalData?.images?.length == 1 ? null : (
//                 <img
//                   src={leftArrow}
//                   className="w-5 filter invert cursor-pointer"
//                   onClick={handleLeftArrowClick}
//                 />
//               )}
//               <div className="flex justify-center">
//                 <img
//                   src={getImageUrl()}
//                   className="w-48 h-48 object-cover cursor-pointer"
//                 />
//               </div>
//               {modalData?.images?.length == 1 ? null : (
//                 <img
//                   src={rightArrow}
//                   className="w-5 filter invert cursor-pointer"
//                   onClick={handleRightArrowClick}
//                 />
//               )}
//             </div>
//             <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
//               <div className="flex justify-between">
//                 <div className="flex gap-0">
//                   <p className="pl-5 pt-4 text-lg font-semibold">
//                     {modalData?.firstName},
//                   </p>
//                   <p className="pl-3 pt-4 text-lg text-[#333] font-semibold">
//                     {age},
//                   </p>
//                   <p className="text-lg pt-4 pl-3 text-[#333] font-semibold">
//                     {modalData?.city}
//                   </p>
//                 </div>
//               </div>
//               <div className="pl-5 pt-3">
//                 <p className="text-lg text-[#757575]">Relationship status</p>
//                 <p className="text-lg pt-1 font-semibold">
//                   {modalData?.relationship}
//                 </p>
//               </div>
//               <div className="pl-5 pt-3">
//                 <p className="text-lg text-[#757575]">I'm looking for</p>
//                 <p className="text-lg pt-1 font-semibold">
//                   {modalData?.looking}
//                 </p>
//               </div>
//               <div className="pl-5 pt-3">
//                 <p className="text-lg text-[#757575]">Interests</p>
//                 <div className="grid grid-cols-5 gap-3">
//                   {modalData.interest?.map(modalInterest => {
//                     return (
//                       <div className="bg-slate-200 rounded mt-3" key={modalInterest}>
//                         <p className="text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575]">
//                           {modalInterest}
//                         </p>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//               <div className="pl-5 pt-3">
//                 <p className="text-lg text-[#757575]">About me</p>
//                 <p className="text-lg pt-1 font-semibold">
//                   {modalData?.aboutUser}
//                 </p>
//               </div>
//               <div className="pl-5 pt-3">
//                 <p className="text-lg text-[#757575]">Education</p>
//                 <p className="text-lg pt-1 font-semibold">
//                   {modalData?.education}
//                 </p>
//               </div>
//               <div className="pl-5 pt-3">
//                 <p className="text-lg text-[#757575]">Profession</p>
//                 <p className="text-lg pt-1 font-semibold">
//                   {modalData?.profession}
//                 </p>
//               </div>
//               <div className="pl-5 pt-3">
//                 <p className="text-lg text-[#757575]">Drinking</p>
//                 <p className="text-lg pt-1 font-semibold">
//                   {modalData?.drinking}
//                 </p>
//               </div>
//               <div className="pl-5 pt-3">
//                 <p className="text-lg text-[#757575]">Smoking</p>
//                 <p className="text-lg pt-1 font-semibold">
//                   {modalData?.smoking}
//                 </p>
//               </div>
//               <div className="pl-5 pt-3">
//                 <p className="text-lg text-[#757575]">Eating</p>
//                 <p className="text-lg pt-1 font-semibold">
//                   {modalData?.eating}
//                 </p>
//               </div>
//               <div className="pl-5 pt-3">
//                 <p className="text-lg text-[#757575]">Zodiac sign</p>
//                 <p className="text-lg pt-1 font-semibold">
//                   {modalData?.zodiac}
//                 </p>
//               </div>
//               <div className="pl-5 pt-3">
//                 <p className="text-lg text-[#757575]">Languages I know</p>
//                 <p className="text-lg pt-1 font-semibold">
//                   {modalData?.language}
//                 </p>
//               </div>
//             </div>
//           </Box>
//         </Fade>
//       </Modal>
//     </>
//   );
// };

// export default MatchesModal;
// under se bhar modal open karne wala animation ka code 
import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
// import { BACKEND_BASE_URL } from "../../Services/api";
import { useState,useEffect } from "react";
import leftArrow from "../../assets/personalProfileIcons/leftArrow.svg";
import rightArrow from "../../assets/personalProfileIcons/rightArrow.svg";
import {  Circle } from 'rc-progress';
import { useSelector } from "react-redux";
import {getSongAsync} from '../../Redux/Slice/getSongSlice/getSongSlice'
import { useDispatch } from "react-redux";
import play from "../../assets/personalProfileIcons/play.png";
import pause from "../../assets/personalProfileIcons/pause.png";
import '../../styles.css'
const MatchesModal = ({ modalData, match, handleCloses }) => {
  // console.log('modal data', modalData)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songId, setSongId] = useState('');
  const loginUser=JSON.parse(sessionStorage.getItem('loginObject'))
  const dispatch=useDispatch()
  const selectSong=useSelector((state)=>state.getSong.getSongObj.selectedObj)
  // console.log('selected song',selectSong)
  const style = {
    position: "absolute",
    top: "20%",
    left: "30%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    '@media (max-width: 300px)': {
      width: 300,
      left:"8%"
    },
    '@media (min-width: 300px) and (max-width: 350px)': {
      width: 300,
      left:"4%"
    },
    '@media (min-width: 350px) and (max-width: 400px)': {
      width: 300,
      left:"6%"
    },
    '@media (min-width: 400px) and (max-width: 500px)': {
      width: 370,
      left:"8%"
    },
    '@media (min-width: 500px) and (max-width: 600px)': {
      width: 450,
      left:"8%"
    },
    '@media (min-width: 600px) and (max-width: 700px)': {
      width: 550,
      left:"8%"
    },
    '@media (min-width: 700px) and (max-width: 850px)': {
      width: 650,
      left:"8%"
    },
    '@media (min-width: 850px) and (max-width: 1000px)': {
      width: 750,
      left:"12%"
    }
  };

  const getProfile = () => modalData || {};

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
    return (getProfile().images?.[currentImageIndex] || "");
  };

  // const ITEM_HEIGHT = 48;
  // const ITEM_PADDING_TOP = 8;
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       width: 250,
  //     },
  //   },
  // };

  const dob = getProfile().DOB;
  const dobBreak = dob?.split("/");
  const year = dobBreak?.[2];
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  const age = year ? currentYear - parseInt(year) : "";
  const calculateMatchPercentage = () => {
    let matchCount = 0;

    if (loginUser?.drinking === modalData?.drinking  ) {
      matchCount++;
    }
    if (loginUser?.smoking === modalData?.smoking ) {
      matchCount++;
    }
    if (loginUser?.eating === modalData?.eating ) {
      matchCount++;
    }
    if (loginUser?.language === modalData?.language ) {
      matchCount++;
    }
    if (loginUser?.zodiac === modalData?.zodiac) {
      matchCount++;
    }
   
    if (loginUser?.looking === modalData?.looking ) {
      matchCount++;
    }
    const interest=loginUser?.interest?.map(item=>modalData?.interest?.includes(item))
    if(interest){
      matchCount++;
    }
   
    // Calculate the percentage based on the number of matches
    const percentage = (matchCount / 8) * 100;
    return percentage.toFixed(2);
  };
  const matchPercentage = calculateMatchPercentage();
  useEffect(()=>{
 if(modalData._id){
dispatch(getSongAsync(modalData._id))
 }
  },[modalData._id,dispatch])

  const audioRef = React.createRef();
  const selectedHandlePlayPause = (id) => {
    // console.log('id of spotify',id)
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true); 
      setSongId(id)

    } else {
      audio.pause();
      setIsPlaying(false);
      setSongId(id)
    }
  };
  return (
    <>

      <Modal
        open={match}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        
        <Grow in={match} timeout={500}>
          
          <Box sx={style}>
            <div className={`flex ${modalData?.images?.length === 1 ? 'justify-center' : 'justify-between'} bg-black`}>
              {modalData?.images?.length === 1 ? null : (
                <img
                  src={leftArrow}
                  className="w-5 filter invert cursor-pointer"
                  onClick={handleLeftArrowClick}
                  alt="leftArrow-img"
                />
              )}
              <div className="flex justify-center">
                <img
                  src={getImageUrl()}
                  className="w-48 h-48 object-cover cursor-pointer"
                  alt="getUrl"
                />
              </div>
              {modalData?.images?.length === 1 ? null : (
                <img
                  src={rightArrow}
                  className="w-5 filter invert cursor-pointer"
                  onClick={handleRightArrowClick}
                  alt="rightArrow-img"
                />
              )}
            </div>
            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
              <div className="flex justify-between">
               <div className="1">
               <div className="flex justify-between">
                <div className="flex gap-0">
                  <p className="pl-5 pt-4 md:text-lg font-semibold">
                    {modalData?.firstName},
                  </p>
                  <p className="pl-3 pt-4 md:text-lg text-[#333] font-semibold">
                    {age},
                  </p>
                  <p className="md:text-lg pt-4 pl-3 text-[#333] font-semibold">
                    {modalData?.city}
                  </p>
                </div>
            
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Relationship status</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {modalData?.relationship}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">I'm looking for</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {modalData?.looking}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Interests</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {modalData.interest?.map(modalInterest => {
                    return (
                      <div className="bg-slate-200 rounded mt-3" key={modalInterest}>
                        <p className="md:text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575]">
                          {modalInterest}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">About me</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {modalData?.aboutUser}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Education</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {modalData?.education}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Profession</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {modalData?.profession}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Drinking</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {modalData?.drinking}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Smoking</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {modalData?.smoking}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Eating</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {modalData?.eating}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Zodiac sign</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {modalData?.zodiac}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Languages I know</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {modalData?.language}
                </p>
              </div>
             {selectSong? <div className="pl-5 pt-5">
                <p className="md:text-lg text-[#757575]">Bio Track</p>
               <div className="flex mt-2 gap-3">
               <img src={selectSong?.songImage} className="rounded-full w-14 h-14" alt="spotifyImage" />
               <p className="text-center pt-2 pb-2">{selectSong?.songName}</p>
               { songId!==selectSong?._id || isPlaying===false? <img src={play} className="w-6 h-6 mt-3 -mr-3 cursor-pointer"  alt="pause"  onClick={()=>selectedHandlePlayPause(selectSong?._id)}/>
 :<img src={pause} className="w-6 h-6 mt-3 -mr-3 cursor-pointer"  alt="play"  onClick={()=>selectedHandlePlayPause(selectSong?._id)}/>}
    <audio ref={audioRef} src={selectSong?.songUrl} />
               </div>
              </div>:null}
               </div>
               <div className="">
               <div className={` flex mr-12 mt-6 `  }>
              <div className="w-[4.2rem] modalProgress ">
            <Circle percent={matchPercentage} strokeLinecap="square" strokeWidth={8} strokeColor="blue" trailColor="lightBlue" trailWidth={8}  /> 
              </div>
            <p className=" -ml-14 pt-4 text-sm textData ">{matchPercentage}%</p>
            <p className=" -ml-11  pt-8 text-sm textDatas ">match</p>
            </div>
               </div>
              </div>
              
            </div>
          </Box>
        </Grow>
      </Modal>
    </>
  );
};

export default MatchesModal;

