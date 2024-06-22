import React, { useRef, useEffect, useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import { useNavigate } from 'react-router-dom';
const Video = ({videoRecord}) => {
  console.log('video record is',videoRecord)
  const videoRecordData={...videoRecord}
  const [isRecording, setIsRecording] = useState(false);
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const navigate=useNavigate()
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720, facingMode: 'user' },
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera: ", err);
    }
  };

  useEffect(() => {
    if (isRecording) {
      startCamera();
    } else {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
      }
    }

    // Clean up the stream on component unmount
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isRecording]);
  
  const downloadVideo=()=>{
 navigate('/step4',{state:videoRecordData})
  }
  return (
    <>
      <div>
        <div className='flex justify-center mt-4 ml-9'>
        <ReactMediaRecorder
          video
          render={({
            status,
            startRecording,
            stopRecording,
            mediaBlobUrl,
          }) => (
            <div>
              {mediaBlobUrl?null:<p className='text-md font-bold'>Status : <span className='text-md text-blue-600'>{status}</span></p>}
           {mediaBlobUrl?null: <div className='mt-5 flex gap-7'>
            <button className=" bg-green-600   dark:bg-green-300 dark:hover:bg-green-300  text-white font-bold text-sm rounded w-40 h-12"  type="btn" onClick={()=>{
              setIsRecording(true);
              startRecording();
            }}>
START RECORDING
</button>
<button className=" bg-gray-500   dark:bg-gray-300 dark:hover:bg-gray-300  text-white font-bold text-sm rounded w-40 h-12"  type="btn" onClick={()=>{
            setIsRecording(false);
            stopRecording();
            }}>
STOP RECORDING
</button>
            </div>}
            {isRecording && (
          <div className=' mt-5'>
            <video ref={videoRef} autoPlay style={{ width: '420px', height: '370px' }} />
          </div>
        )} 
              {mediaBlobUrl && (
                <>
                     <div className={`${mediaBlobUrl?'mt-[-1rem]':'mt-5'}`}>
                  <video src={mediaBlobUrl} controls style={{ width: '420px', height: '370px' }}/>
                  <div className='mt-5 '>
                  <a href={mediaBlobUrl} download="recorded-video.mp4">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={downloadVideo} >
Download Video
</button>
                  </a>  
                  {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={downloadVideo} >
NEXT
</button> */}
                  </div>
               
                     </div>
                </>
              )}
            </div>
          )}
        />    
        </div>
       
      </div>
      {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={downloadVideo} >
NEXT
</button> */}
    </>
  );
}

export default Video;
