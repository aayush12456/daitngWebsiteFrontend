import { Header } from "../../Components/common/Header/Header"
import ForgotPassword from "../../Components/forgotPassword/forgotPassword"
import { useLocation } from "react-router-dom"
// import OTPEnterData from "../../Components/otpEnterData/otpEnterData"
// import { useSelector } from 'react-redux';
import {Helmet} from 'react-helmet'
const ForgotPasswordPage=({resetObj})=>{
    const resetData=resetObj
    const forgotData=useLocation()
    const forgot=forgotData.state
    // console.log('forgot is',forgot)
    // const confirmSelector=useSelector((state)=>state.passDataObj.  passDataObj)
    // console.log('confirm selector',confirmSelector)
return (
    <>
         <Helmet>
            <title>ApnaPan - Forgot Your Password? </title>
        </Helmet>
         <Header forgot={forgot} reset={resetData}/>
        <p className="text-center text-2xl text-[#000] font-bold pt-8">Reset Password</p>
        
    <ForgotPassword forgot={forgot}/>
    {/* <OTPEnterData/> */}
    </>
)
}
export default ForgotPasswordPage