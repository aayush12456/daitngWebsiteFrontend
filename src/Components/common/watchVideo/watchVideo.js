
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import React, { useRef, useEffect } from 'react';
// const WatchVideo=({modalOpen,handleClose, personalVideoData})=>{
//     console.log('watch video is',personalVideoData)
//     const videoRef = useRef(null);
//     useEffect(() => {
//       const videoElement = videoRef.current;
//       if (videoElement) {
//         // Automatically play the video
//         videoElement.play();
//         // Loop the video
//         videoElement.loop = true;
//       }
//     }, []);
//     const handleVideoClick = () => {
//       const videoElement = videoRef.current;
//       if (videoElement.paused) {
//         videoElement.play();
//       } else {
//         videoElement.pause();
//       }
//     };
//     const style = {
//         position: "absolute",
//         top: "45%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         width: 500,
//         bgcolor: "background.paper",
//         border: "none",
//         boxShadow: 24,
//         p: 4,
//       };
// return (
//     <>
//      <Modal
//         open={modalOpen}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
     
//           <Box sx={style}>
//           <video src={personalVideoData?.videoUrl} controls  autoPlay style={{ width: '420px', height: '370px' }}/>
//           </Box>
               
// {/* <div className="flex justify-center mt-36">
// <video src={personalVideoData?.videoUrl} controls  autoPlay style={{ width: '500px', height: '370px' }}/>
// </div> */}
        
//       </Modal>
//     </>
// )
// }
// export default WatchVideo
// animation normal in a video
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import React, { useRef, useEffect } from 'react';

// const WatchVideo = ({ modalOpen, handleClose, personalVideoData }) => {
//     console.log('watch video is', personalVideoData);
//     const videoRef = useRef(null);

//     useEffect(() => {
//         const videoElement = videoRef.current;
//         if (videoElement) {
//             // Automatically play the video
//             videoElement.play();
//             // Loop the video
//             videoElement.loop = true;
//         }
//     }, []);

//     const handleVideoClick = () => {
//         const videoElement = videoRef.current;
//         if (videoElement.paused) {
//             videoElement.play();
//         } else {
//             videoElement.pause();
//         }
//     };

//     const style = {
//         position: "absolute",
//         top: "45%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         width: 500,
//         bgcolor: "background.paper",
//         border: "none",
//         boxShadow: 24,
//         p: 4,
//     };

//     return (
//         <>
//             <Modal
//                 open={modalOpen}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <div className="flex justify-center mt-36">
//                     <video 
//                         ref={videoRef}
//                         src={personalVideoData?.videoUrl} 
//                         controls  
//                         autoPlay 
//                         style={{ 
//                             width: '500px', 
//                             height: '370px',
//                             animation: 'dropDown 1s ease-out' 
//                         }}
//                         onClick={handleVideoClick}
//                     />
//                 </div>
//             </Modal>
//             <style jsx="true">{`
//                 @keyframes dropDown {
//                     0% {
//                         transform: translateY(-100vh);
//                     }
//                     100% {
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>
//         </>
//     )
// }

// export default WatchVideo;
// animation with box
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import React, { useRef, useEffect } from 'react';

const WatchVideo = ({ modalOpen, handleClose, personalVideoData,onlinePersonalVideoData, visitorPersonalVideoData }) => {
    console.log('watch video is', personalVideoData);
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            // Automatically play the video
            videoElement.play();
            // Loop the video
            videoElement.loop = true;
        }
    }, []);

    const handleVideoClick = () => {
        const videoElement = videoRef.current;
        if (videoElement.paused) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
    };

    const style = {
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        bgcolor: "background.paper",
        border: "none",
        boxShadow: 24,
        p: 4,
        animation: 'dropDown 1s ease-out'
    };

    return (
        <>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <video 
                        ref={videoRef}
                        src={personalVideoData?.videoUrl || onlinePersonalVideoData?.videoUrl ||  visitorPersonalVideoData?.videoUrl} 
                        controls  
                        autoPlay 
                        style={{ 
                            width: '100%', 
                            height: 'auto'
                        }}
                        onClick={handleVideoClick}
                    />
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

export default WatchVideo;
