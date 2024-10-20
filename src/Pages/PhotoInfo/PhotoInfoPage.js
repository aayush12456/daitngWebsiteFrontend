import AdditionalInfoWithPhoto from "../../Components/common/Form/AdditionalInfoWithPhoto/AdditionalInfoWithPhoto"
import { useLocation } from "react-router-dom"
import { Header } from "../../Components/common/Header/Header";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProgressBarData from "../../Components/common/progressBar/progressBar";
import {Helmet} from 'react-helmet'
import { useEffect } from "react";
import io from "socket.io-client";
// const socket = io.connect("http://localhost:4000");
const socket = io.connect("https://apnapandaitingwebsitebackend.up.railway.app");
const PhotoInfoPage=({resetObj})=>{
    const resetData=resetObj
    let Photo = useLocation();
    let photoData=Photo.state
    const registerResponse=useSelector((state)=>state.registerData.registerData)
    // console.log('register response',registerResponse)
    
    const navigate=useNavigate()
    useEffect(() => {
        if (registerResponse.existingLoginData) {
          socket.emit('loginUser', registerResponse.existingLoginData);
          // console.log('Emitted login data:', loginResponse.existingLoginData);
        }
      }, [registerResponse.existingLoginData]);
    return (
        <>
          <Helmet>
            <title>Register for Free - Step 5 - ApnaPan </title>
        </Helmet>
        <Header photo={photoData} reset={resetData}/>
        <p className="text-center text-2xl text-[#000] font-bold pt-8">Upload Your Photos</p>
        <ProgressBarData  photoData={photoData}/>
        <AdditionalInfoWithPhoto photoData={photoData}/>
        {
    registerResponse.token?navigate('/mainContent'):null
    }
        </>
    )
}
export default PhotoInfoPage