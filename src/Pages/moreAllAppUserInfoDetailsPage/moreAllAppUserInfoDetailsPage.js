
import { useLocation } from "react-router-dom"
import MoreAllAppUserInfoDetails from "../../Components/moreAllAppUserInfoDetails/moreAllAppUserInfoDetails"
const MoreAllAppUserInfoDetailsPage=()=>{
    const allDetailsData=useLocation()
    const allDetails=allDetailsData.state
    // console.log('all details data',allDetails)
return (
    <>
    <MoreAllAppUserInfoDetails allDetails={allDetails}/>
    </>
)
}
export default MoreAllAppUserInfoDetailsPage