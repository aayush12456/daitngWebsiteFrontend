import AdminProfileModal from "../../Components/adminProfileModal/adminProfileModal";
import { Header } from "../../Components/common/Header/Header"
import AdminSidebar from "../../Components/common/adminSidebar/adminSidebar"

import { useSelector } from "react-redux";
const AdminPage=()=>{
    const profileSelector=useSelector((state)=>state.headerModal.headerModalToggle)
    const sidebarOpenSelector=useSelector((state)=>state.sidebarOpen.sidebarModalToggle)
return(
<>
<div className="flex ">
<div className="h-full  ">
<AdminSidebar />
    </div>
<div className="h-full  ">
{sidebarOpenSelector===true?<AdminSidebar adminSidebarOpen={sidebarOpenSelector}/>:null}
    </div>
    <div className="w-full">
<Header/>
    </div>
    <div className="flex justify-end ">
          <div
 
    className="fixed top-20 right-0 z-50"
>
  {profileSelector && <AdminProfileModal/>}
</div>
          </div>
</div>
</>
)
}
export default AdminPage