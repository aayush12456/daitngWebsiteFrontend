import AppManageUser from "../../Components/appManageUser/appManageUser"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getAllAppRegisterUserAsync } from "../../Redux/Slice/getAllAppRegisterUserSlice/getAllAppRegisterUserSlice"
const AppManageUserPage=()=>{
    const dispatch = useDispatch()
    const id = sessionStorage.getItem('userId')
    // console.log('id in manage user is',id)
    useEffect(()=>{
  if(id){
 dispatch(getAllAppRegisterUserAsync(id))
  }
    },[dispatch,id])
return (
    <>
    <AppManageUser/>
    </>
)
}
export default AppManageUserPage