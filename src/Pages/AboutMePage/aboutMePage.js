
import AboutMe from "../../Components/common/Form/AboutMe/aboutMe"
import { Header } from "../../Components/common/Header/Header"
import { useLocation } from "react-router-dom";
import ProgressBarData from "../../Components/common/progressBar/progressBar";
import {Helmet} from 'react-helmet'
const AboutMePage=({resetObj})=>{
    const resetData=resetObj
    let aboutMe = useLocation();
    let aboutMeData=aboutMe.state
return (
    <>
      <Helmet>
            <title>Register for Free - Step 2 - ApnaPan </title>
        </Helmet>
    <Header aboutMe={aboutMeData} reset={resetData}/>
    <p className="text-center text-2xl text-[#000] font-bold pt-8">About Me</p>
<ProgressBarData  aboutMe={aboutMeData}/>
    <AboutMe aboutMe={aboutMeData}/>
    </>
)
}
export default AboutMePage