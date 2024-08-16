import logout from '../../assets/modalIcons/logout.png'
import { useNavigate } from 'react-router-dom'
const AdminProfileModal=()=>{
    const navigate=useNavigate()
    const adminLogoutHandler=()=>{
        sessionStorage.clear()
    navigate('/')
    window.location.reload()
    }
return (
    <>
     <div class="w-40 rounded overflow-hidden shadow-lg bg-white mr-3 hidden md:block ">
     <div className='cursor-pointer flex gap-5 mt-2 mb-4' >
          <img src={logout} className='w-7 ml-5' alt='modalItem-img' />
          <p className={`text-center `} onClick={adminLogoutHandler}>Logout</p>
        </div>
     </div>
    </>
)
}
export default AdminProfileModal