import { adminSidebarData } from "../../../utils/adminSidebarData"
import { Link } from "react-router-dom"
import logout from '../../../assets/modalIcons/logout.png'
import admin from '../../../assets/adminIcons/admin.png'
import { useNavigate } from "react-router-dom"
const AdminSidebar=({ adminSidebarOpen})=>{
  const navigate=useNavigate()
    const firstName=sessionStorage.getItem('firstName')
    const logoutClickHandler=()=>{
   navigate('/')
   sessionStorage.clear()
   window.location.reload()
    }
return (
    <>
     <div className={`h-full ${ adminSidebarOpen === true ? 'block' : 'hidden'} md:block `}>
     <div class="w-64 rounded-none overflow-hidden shadow-lg h-screen  fixed z-10  bg-black text-white">
        <div className="flex justify-center">
        <div className='flex ml-3'>
            <img
              src={admin}
              className=" md:hidden w-16 rounded-full cursor-pointer h-16 mt-24"
              alt='profile'
            />
            <p className="md:hidden  pt-28 cursor-pointer pl-4 text-white"    >
              {firstName}
            </p>
          </div>
        </div>
        <div className="md:mt-32">
        {
    adminSidebarData.map((adminItem)=>{
        return (
            <>
            <div className="flex gap-4 mt-11 cursor-pointer ml-6 ">
            <Link to={adminItem.link}>
                  <img
                    src={adminItem.image}
                    className='w-8 filter invert'
                    alt='Sidebar Icon'
                  />
                </Link>
                <Link to={adminItem.link}>
                <p className={`text-lg hover:text-[#5394e4] `}>{adminItem.title}</p>
                </Link>
            </div>
            </>
        )
    })
 }
 <div className="flex  mt-11 gap-4 cursor-pointer md:hidden">
 <img src={logout} className='w-7 ml-5 filter invert' alt='modalItem-img' />
<p className={`text-lg hover:text-[#5394e4] `} onClick={logoutClickHandler}>Logout</p>
 </div>
        </div>

 
</div>
     </div>
    
    </>
)
}
export default AdminSidebar