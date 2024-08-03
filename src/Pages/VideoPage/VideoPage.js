import { Header } from "../../Components/common/Header/Header"
import ProgressBarData from "../../Components/common/progressBar/progressBar"
import Video from "../../Components/video/video"
import { useLocation } from "react-router-dom"
import {Helmet} from 'react-helmet'
const VideoPage=({resetObj})=>{
    const resetData=resetObj
    let video = useLocation();
    let videoRecordData=video.state
return (
    <>
     <Helmet>
            <title>Register for Free - Step 3 - ApnaPan </title>
        </Helmet>
    <Header videoRecord={videoRecordData} reset={resetData}/>
    <p className="text-center text-2xl text-[#000] font-bold pt-8">Video Recording</p>
    <ProgressBarData  videoRecord={videoRecordData}/>
    <Video videoRecord={videoRecordData}/>
    </>
)
}
export default VideoPage