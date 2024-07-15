import AboutMe from "../../Components/common/Form/AboutMe/aboutMe"
import { Header } from "../../Components/common/Header/Header"
import { useLocation } from "react-router-dom";
const AboutMePage=({resetObj})=>{
    const resetData=resetObj
    let aboutMe = useLocation();
    let aboutMeData=aboutMe.state
return (
    <>
    <Header aboutMe={aboutMeData} reset={resetData}/>
    <p className="text-center text-2xl text-[#000] font-bold pt-8">About Me</p>
    <AboutMe aboutMe={aboutMeData}/>
    </>
)
}
export default AboutMePage