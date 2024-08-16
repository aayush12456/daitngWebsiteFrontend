import ManageUser from "../../Components/manageUser/manageUser"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getAllRegisterUserAsync } from "../../Redux/Slice/getAllRegisterUserSlice/getAllRegisterUserSlice"
const ManageUserPage=()=>{
    const dispatch = useDispatch()
    const id = sessionStorage.getItem('userId')
    // console.log('id in manage user is',id)
    useEffect(()=>{
  if(id){
 dispatch(getAllRegisterUserAsync(id))
  }
    },[dispatch,id])
return (
    <>
    <ManageUser/>
    </>
)
}
export default ManageUserPage