import { Header } from "../../Components/common/Header/Header"
import Video from "../../Components/video/video"
import { useLocation } from "react-router-dom"
const VideoPage=()=>{
    let video = useLocation();
    let videoRecordData=video.state
return (
    <>
    <Header videoRecord={videoRecordData}/>
    <p className="text-center text-2xl text-[#000] font-bold pt-8">Video Recording</p>
    <Video videoRecord={videoRecordData}/>
    </>
)
}
export default VideoPage