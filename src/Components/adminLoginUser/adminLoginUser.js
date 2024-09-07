import { useDispatch } from "react-redux"
import { deleteAdminLoginUserAsync } from "../../Redux/Slice/deleteAdminLoginUserSlices/deleteAdminLoginUserSlices"
import { useState,useEffect } from "react"
import '../../../src/styles.css'
const AdminLoginUser=({allLoginUser})=>{
    const dispatch=useDispatch()
    const [deleteUser, setDeleteUser] = useState([]);
    useEffect(() => {
        setDeleteUser(allLoginUser || []);
    }, [allLoginUser]);

    const deleteLoginUser=(login)=>{
        setDeleteUser(prevState => prevState.filter(loginItem => loginItem._id !== login._id));
    dispatch(deleteAdminLoginUserAsync(login._id))
    }
return (
    <>
    <div className="grid grid-cols-1 mt-6">
    {
   deleteUser && deleteUser.length>0? deleteUser.map(allLogin=>{
        return (
            <>
             <div class="w-full rounded overflow-hidden shadow-lg mt-7 loginCard">
                <div className="flex gap-2  sm:gap-4 justify-between mt-4 mb-4 ml-4 mr-4 lg:gap-11">
                <img src={allLogin.images[0]} className="w-16 rounded-full img" alt="loginUser"/>
                <p className=" pt-3 firstName">{allLogin.firstName}</p>
                <p className="pt-3 email">{allLogin.email}</p>
                <p className="pt-3 phone">{allLogin.phone}</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white sm: py-2 sm:px-4 text-center rounded h-10 delete mt-3" onClick={()=>deleteLoginUser(allLogin)}>
Delete
</button>
                </div>
        </div>
            </>
        )
    }):
    <p className="text-black font-semibold text-lg pt-36">No Login User is there</p>
   }
    </div>
    </>
)
}
export default AdminLoginUser