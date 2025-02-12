import AppLoginUser from "../../Components/appLoginUser/appLoginUser"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getAdminAppLoginUserAsync } from "../../Redux/Slice/getAdminAppLoginUserSlice/getAdminAppLoginUserSlice"
const AppLoginUserPage=()=>{
    const dispatch=useDispatch()
    const id='as1234errfdsddfkcf'
    const getAllAppLoginIdUser=useSelector((state)=>state.getAdminAppLoginUser.getAdminAppLoginUserObj.loginUserArray)
    // console.log('get all login id user',getAllAppLoginIdUser)
    useEffect(()=>{
    if(id){
   dispatch(getAdminAppLoginUserAsync(id))
    }
    },[dispatch,id])
return (
    <>
    <AppLoginUser allAppLoginUser={getAllAppLoginIdUser}/>
    </>
)
}
export default AppLoginUserPage