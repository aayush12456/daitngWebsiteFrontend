import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import rightArrow from '../../assets/personalProfileIcons/rightArrow.svg';
import { useDispatch } from "react-redux";
import { passDataObjSliceAcions } from "../../Redux/Slice/passDataSliceObj/passDataSliceObj";
import { manageAccount } from "../../utils/peronalInfo";
import { deleteDataObjSliceActions } from "../../Redux/Slice/deleteAccountSliceObj/deleteAccountSliceObj";
const ManageAccountModal=({ManageAccountModal,closeManageAccountModal, openSubManageAccountModal,deletePlusDeactivateAccountModal})=>{
  const dispatch=useDispatch()
  const sumManageobj={title:"You can't change Email or Number it is permanently fixed for further changes"}
  const changeNameManageObj={title:"You can't change Name it is permanently fixed for further changes"}
  const changeDateOfBirthManageObj={title:"You can't change Date Of Birth it is permanently fixed for further changes"}
  const deactivateAccountObj={heading:"Deactivate Account",title:"Deactivating account will cause your profile, messages, visits, likes to be hidden from others until you login back again.When you login again, your profile will be visible to others.Before you go, let us know why you are deactivating your account."}
  const deleteAccountObj={heading:"Delete Account",title:"We're sad to see you go. Deleting your account would remove all your personal information, messages, photos, matches and purchases. This action cannot be undone.Some information may be stored as per Privacy Policy for legal reasons, which will also be deleted after a grace period.If you decide to come back later and use the same profile, you can deactivate your profile instead."}
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
        animation: 'dropDown 1s ease-out'
      };
      const manageAccountData=(accountTitle)=>{
        closeManageAccountModal()
        if(accountTitle=='Change Mobile or Email'){
          dispatch(passDataObjSliceAcions. passDataObj(sumManageobj))
          openSubManageAccountModal()
        }
        else if(accountTitle=='Change Name'){
          dispatch(passDataObjSliceAcions. passDataObj(changeNameManageObj))
          openSubManageAccountModal()
        }
        else if(accountTitle=='Change Date Of Birth'){
          dispatch(passDataObjSliceAcions. passDataObj( changeDateOfBirthManageObj))
          openSubManageAccountModal()
        }
        else if(accountTitle=='Deactivate Account'){
          dispatch(passDataObjSliceAcions. passDataObj(deactivateAccountObj))
          deletePlusDeactivateAccountModal()
        }
        else if(accountTitle=='Delete Account'){
          // dispatch(deleteDataObjSliceActions.deleteAccount(deleteAccountObj))
          dispatch(passDataObjSliceAcions. passDataObj(deleteAccountObj))
          deletePlusDeactivateAccountModal()
        }
      }
return (
    <>
      <Modal
        open={ManageAccountModal}
        onClose={closeManageAccountModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <p className="text-center font-semibold text-xl text-[#333]">Manage Account</p>
        <div className=" rounded overflow-hidden shadow-lg mt-2 mb-2">
       
           
        {
          manageAccount.map(manageItem=>{
            return(
              <>
               <div className="flex justify-between mt-2 mb-2 ">
              <p className='pl-3 pt-2 border-slate-300 cursor-pointer' onClick={()=>manageAccountData(manageItem.accountTitle)}>{manageItem.accountTitle}</p>
              <img src={rightArrow} className='w-3 mr-4 mt-2' />
            </div>
              </>
            )
          })
        }
       </div>
        </Box>
      </Modal>

    </>
)
}
export default ManageAccountModal