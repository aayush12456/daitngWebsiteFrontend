import AdditionalInfoWithPhoto from "../../Components/common/Form/AdditionalInfoWithPhoto/AdditionalInfoWithPhoto"
import { useLocation } from "react-router-dom"
import { Header } from "../../Components/common/Header/Header";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const PhotoInfoPage=()=>{
    let Photo = useLocation();
    let photoData=Photo.state
    const registerResponse=useSelector((state)=>state.registerData.registerData)
    console.log('register response',registerResponse)
    const navigate=useNavigate()
    return (
        <>
        <Header photo={photoData}/>
        <p className="text-center text-2xl text-[#000] font-bold pt-8">Upload Your Photos</p>
        <AdditionalInfoWithPhoto photoData={photoData}/>
        {
    registerResponse.token?navigate('/mainContent'):null
    }
        </>
    )
}
export default PhotoInfoPage