import { BACKEND_BASE_URL } from "../../../Services/api";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion';
import './matchPerson.css';
import rightTik from '../../../assets/personalProfileIcons/rightTiks.svg';
import { useState } from "react";
const MatchPerson = () => {
  const [show,setShow]=useState(true)
  const matchPersonSelector = useSelector((state) => state.addMatchUser.addMatchUserData);
  console.log('match person selector', matchPersonSelector);

  const matchUser = matchPersonSelector.matchUserData;
  const matchLikesData = matchPersonSelector.matchLikes;
const keepData=()=>{
setShow(false)
}
  return (
    <>
      {matchUser && matchLikesData && show &&(
        <div>
          <div
            className="blur-background"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backdropFilter: "blur(8px)", // Adjust the blur intensity as needed
              zIndex: 5,
            }}
          ></div>

          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50vw" }}
            animate={{ opacity: 1, scale: 1, x: "0vw" }}
            transition={{
              duration: 1.5,
            }}
            style={{
              position: "fixed",
              top: "30%",
              left: "48%",
              width: 120,
              height: 120,
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "rgba(0, 150, 255, 0.5)",
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "translateX(-50%)", // Center the circle horizontally
            }}
          >
            <img
              // src={BACKEND_BASE_URL + matchUser?.images[0]}
              src={matchUser?.images[0]}
              alt="Animated Circle"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>

          {/* second circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "50vw" }} // Start from right side
            animate={{ opacity: 1, scale: 1, x: "6vw" }} // Move to center
            transition={{
              duration: 1.5,
            }}
            style={{
              position: "fixed",
              top: "30%",
              left: "49%",
              width: 120,
              height: 120,
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "rgba(0, 150, 255, 0.5)",
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "translateX(-50%)", // Center the circle horizontally
            }}
          >
            <img
              // src={BACKEND_BASE_URL + matchLikesData?.images[0]}
              src={ matchLikesData?.images[0]}
              alt="Animated Circle"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>

          {/* third circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: "50vh" }} // Start from bottom
            animate={{ opacity: 1, scale: 1, y: "0vh" }} // Move to center
            transition={{
              duration: 1.5,
            }}
            style={{
              position: "fixed",
              top: "43.2%", // Changed to center vertically
              left: "53.6%",
              width: 60,
              height: 60,
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "rgba(0, 150, 255, 0.5)",
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "translate(-50%, -50%)", // Center the circle horizontally and vertically
            }}
          >
            <img
              src={rightTik}
              alt="Animated Circle"
              style={{
                width: "70%",
                height: "70%",
                objectFit: "cover",
              }}
            />
          </motion.div>

          {/* Text content */}
          <div style={{ position: 'fixed', top: '54%', left: '55%', transform: 'translate(-50%, -50%)', zIndex: 20 }}>
            <p className="text-center text-black font-medium " style={{paddingTop:'1rem',fontSize:"1.1rem"}}>{matchUser?.firstName} & {matchLikesData?.firstName}</p>
            <p className="text-center text-black font-medium" style={{fontSize:"1.1rem"}}>Yay! You`re now paired. Let's get to know each other</p>
          </div>
          <div  style={{ position: 'fixed', top: '66%', left: '55%', transform: 'translate(-50%, -50%)', zIndex: 20 }}>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={keepData}>
  KEEP MATCHING
</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MatchPerson;
