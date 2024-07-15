import { Header } from "../../Components/common/Header/Header"
import NewPassword from "../../Components/newPassword/newPassword"
import { useLocation } from "react-router-dom"
const NewPasswordPage=()=>{
    const forgotMean=useLocation()
    const forgotData=forgotMean.state
    console.log('forgot in new pass',forgotData)
    const phone=forgotData?.phone
return (
    <>
      <Header forgot={forgotData}/>
        <p className="text-center text-2xl text-[#000] font-bold pt-8">Reset Password</p>
        
    <NewPassword phoneNumber={phone}/>
    </>
)
}
export default NewPasswordPage