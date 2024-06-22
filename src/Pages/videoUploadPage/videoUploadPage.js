
import VideoUpload from "../../Components/common/Form/videoUpload/videoUpload";
import { Header } from "../../Components/common/Header/Header"
import { useLocation } from "react-router-dom"

const VideoUploadPage=()=>{
    let VideoUploadData = useLocation();
    let videoData=VideoUploadData.state
return (
    <>
       <Header VideoUploadDatas={videoData} />
    <p className="text-center text-2xl text-[#000] font-bold pt-8">Upload Your Video</p>
<VideoUpload VideoUploadDatas={videoData}/>
    </>
)
}
export default VideoUploadPage