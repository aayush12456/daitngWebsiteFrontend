import React,{useState,useEffect} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik'
import { updatePasswordSchema } from "../../schemas";
import {useDispatch} from "react-redux"
import { PasswordUpdateAsync } from "../../Redux/Slice/passwordUpdateSlice/passwordUpdateSlice";
import { useSelector } from "react-redux";
const ChangePasswordModal = ({ changePasswordModal, closeChangePasswordModal }) => {
    const [notMatch,setNotMatch]=useState('')
    const id=sessionStorage.getItem('userId')
    const dispatch=useDispatch()
    const updatePasswordSelector=useSelector((state)=>state. updatePassword.addPasswordUpdateData.msg)
    console.log('update password selector',updatePasswordSelector)
    useEffect(() => {
        if (updatePasswordSelector) {
            toast.success(`${updatePasswordSelector}`);
        }
    }, [updatePasswordSelector]);
  const style = {
    position: "relative",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 320,
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
  };
  const initialValues={
    currentPassword:'',
    newPassword:'',
    confirmNewPassword:''
  }
  const {values, errors, touched, handleBlur, handleChange, handleSubmit,setValues,setFieldValue} = useFormik({
    initialValues: initialValues,
    validationSchema: updatePasswordSchema,
    onSubmit: (values, action) => {
     const obj={
        id:id,
       currentPassword:values.currentPassword,
       newPassword:values.newPassword,
       confirmNewPassword:values.confirmNewPassword
     }
     if(obj.newPassword !==obj.confirmNewPassword){
         setNotMatch('Both the passwords you typed do not match. Please use identical passwords in both the form fields.')
        return
     }
     console.log('date is',obj)
     dispatch(PasswordUpdateAsync(obj))
     action.resetForm()
     closeChangePasswordModal()
    }
  });
  const cancelUpdatePassword=()=>{
    closeChangePasswordModal()
  }
  return (
    <>
      <Modal
        open={changePasswordModal}
        onClose={closeChangePasswordModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center font-semibold text-xl text-[#333]">Change Password</p>
          <form onSubmit={handleSubmit}>

          <div className="mt-2">
          <p className="pt-3 text-[#757575] text-md">Current password</p>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"    name="currentPassword" type="password"   value={values.currentPassword} onChange={handleChange}  onBlur={handleBlur}  ></input>
          {errors.currentPassword && touched.currentPassword? <p className='text-red-500 pl-4'>{errors.currentPassword}</p>:null}
          </div>
          <div className="mt-2">
          <p className="pt-3 text-[#757575] text-md">New password</p>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"  name="newPassword" type="password"   value={values.newPassword} onChange={handleChange}  onBlur={handleBlur} ></input>
          {errors.newPassword && touched.newPassword? <p className='text-red-500 pl-4'>{errors.newPassword}</p>:null}
          </div>
          <div className="mt-2">
          <p className="pt-3 text-[#757575] text-md">Confirm New password</p>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"  name="confirmNewPassword" type="password"   value={values.confirmNewPassword} onChange={handleChange}  onBlur={handleBlur} ></input>
          {errors.confirmNewPassword && touched.confirmNewPassword? <p className='text-red-500 pl-4'>{errors.confirmNewPassword}</p>:null}
           <p className='text-red-500 pl-4'>{notMatch}</p>
          </div>
          <div className="flex justify-between mt-5">
          <button class="bg-[#bbc5d1] hover:bg-[#bbc5d1] text-white  py-2 px-4 rounded w-28" onClick={cancelUpdatePassword}>
            
  Cancel
</button>
<button class="bg-[#5394e4] hover:bg-blue-700 text-white  py-2 px-4 rounded w-28" type="submit">
            
            Save
          </button>
          </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default ChangePasswordModal;
