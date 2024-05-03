import { BACKEND_BASE_URL } from "../../../Services/api";
import { useState, useEffect } from 'react';
import './matchPerson.css';
import rightTik from '../../../assets/personalProfileIcons/rightTiks.svg'
const MatchPerson = ({loginUser,matchUser}) => {
    const [showImage, setShowImage] = useState(true);
    const [animate, setAnimate] = useState(false);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setShowImage(false); // Hide the image after a delay
    //         setAnimate(true);   // Trigger animation
    //     }, 2000); // Delay in milliseconds before starting animation

    //     // Clean up
    //     return () => clearTimeout(timeout);
    // }, []);
console.log('login like user',loginUser)
console.log('match like data user',matchUser)
    return (
        <>
       {matchUser && <div>
        <div className="flex justify-center">
    <div className={`image-container ${animate ? 'slide' : ''}`}>
        {showImage && matchUser?.images && matchUser.images.length > 0 && (
            <img
                src={BACKEND_BASE_URL + matchUser.images[0]}
                className="w-28 rounded-full h-28"
                alt="person"
            />
        )}
    </div>
    <div className={`image-container ${animate ? 'slide' : ''}`}>
        {showImage && loginUser?.images && loginUser.images.length > 0 && (
            <img
                src={BACKEND_BASE_URL + loginUser.images[0]}
                className="w-64 rounded-full h-28"
                alt="person"
                style={{ marginLeft: '-8px' }}
            />
        )}
    </div>
</div>
        <div className="flex justify-center absolute ml-40 mt-[-1rem] ">
        <div className="rounded-full bg-blue-600 w-14 h-14 flex justify-center cursor-pointer mt-24 ml-1  " >
        <img src={rightTik} className="w-8" />
      </div>
        </div>
       <p>{matchUser.firstName }and {loginUser.firstName}</p>
       <p >Yay! You`re now paired . Let's get to know each other</p>
        </div>}
          
        </>
     
        
    );
}; 

export default MatchPerson;
