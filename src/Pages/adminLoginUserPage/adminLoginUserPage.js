import AdminLoginUser from "../../Components/adminLoginUser/adminLoginUser"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getAdminLoginUserAsync } from "../../Redux/Slice/getAdminLoginUserSlice/getAdminLoginUserSlice"
import { useSelector } from "react-redux"
const AdminLoginUserPage=()=>{
    const dispatch=useDispatch()
    const getAllLoginIdUser=useSelector((state)=>state.getAdminLoginUser.getAdminLoginUserObj.loginUserArray)
    console.log('get all login id user',getAllLoginIdUser)
    const id='as1234errfdsddfkcf'
    useEffect(()=>{
    if(id){
   dispatch(getAdminLoginUserAsync(id))
    }
    },[dispatch,id])
return (
    <>
    <AdminLoginUser allLoginUser={getAllLoginIdUser}/>
    </>
)
}
export default AdminLoginUserPage