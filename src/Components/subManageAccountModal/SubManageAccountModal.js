import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
const SubManageAccountModal=({subManageAccountModal, closeSubManageAccountModal})=>{
    const subManageAccountSelector=useSelector((state)=>state.passDataObj.passDataObj)
    // console.log('sub manage account',subManageAccountSelector)
    const style = {
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 450,
        bgcolor: "background.paper",
        border: "none",
        boxShadow: 24,
        p: 4,
        animation: 'dropDown 1s ease-out',
        '@media (min-width: 300px) and (max-width: 350px)': {
          width: 300,
          left:"50%",
          top:"45%",
     
        },
        '@media (min-width: 350px) and (max-width: 400px)': {
          width: 350,
          left:"50%",
          top:"45%"
        },
        '@media (min-width: 400px) and (max-width: 500px)': {
          width: 400,
          left:"50%",
          top:"45%"
        },
      };
      const closeSubManageAccount=()=>{
        closeSubManageAccountModal()
      }
return(
    <>
      <Modal
        open={subManageAccountModal}
        onClose={ closeSubManageAccountModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
         <p className="text-[#000] text-md">{subManageAccountSelector?.title}</p>
         <div className="mt-7">

         <button class="bg-[#5394e4] hover:bg-blue-700 text-white  py-2 px-4 rounded w-full h-12" onClick={closeSubManageAccount}>
OK
</button>
         </div>
         </Box>
      </Modal>
    </>
)
}
export default SubManageAccountModal