import MoreAllUserInfoDetails from "../../Components/moreAllUserInfoDetails/moreAllUserInfoDetails"
import { useLocation } from "react-router-dom"
const MoreAllUserInfoDetailsPage=()=>{
    const allDetailsData=useLocation()
    const allDetails=allDetailsData.state
    // console.log('all details data',allDetails)
return (
    <>
    <MoreAllUserInfoDetails allDetails={allDetails}/>
    </>
)
}
export default MoreAllUserInfoDetailsPage