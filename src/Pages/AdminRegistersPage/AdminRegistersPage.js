import AdminRegister from "../../Components/adminRegister/adminRegister"
import { Header } from "../../Components/common/Header/Header"

const AdminRegistersPage=()=>{
    const adminRegisterObj={
        name:'Admin Register'
    }
   
return (
    <>
    <Header adminRegisterObj={adminRegisterObj} />
    <AdminRegister/>
    </>
)
}
export default AdminRegistersPage