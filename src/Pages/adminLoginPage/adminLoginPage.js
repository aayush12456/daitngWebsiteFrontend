
import AdminLogin from "../../Components/adminLogin/adminLogin"
import { Header } from "../../Components/common/Header/Header"

const AdminLoginPage=()=>{
  const adminLoginObj={
    name:'Admin Login'
  }
return(
    <>
    <Header adminLoginObj={adminLoginObj} />
  <AdminLogin/>
    </>
)
}
export default AdminLoginPage