import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { newPasswordSchema} from '../../schemas';
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";
import { forgotUpdatePasswordUserAsync } from '../../Redux/Slice/forgotUpdatePasswordUserSlice/forgotUpdatePasswordUserSlice';
import ForgotUpdatePasswordResult from '../forgotUpdatePasswordResult/forgotUpdatePasswordResult';
const NewPassword=({phoneNumber})=>{
    const dispatch=useDispatch()
    const [notMatch,setNotMatch]=useState('')
    const forgotUpdatePasswordSelector=useSelector((state)=>state.forgotPasswordUpdateUser.addForgotPasswordUpdateData.msg)
    console.log('forgot update password selector',forgotUpdatePasswordSelector)
    const initialValues = {
        newPassword:'',
        confirmNewPassword:''
      };
    
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: newPasswordSchema,
        onSubmit: (values, action) => {
            const obj={
              phoneNumber:phoneNumber,
               newPassword:values.newPassword,
               confirmNewPassword:values.confirmNewPassword
             }
             if(obj.newPassword !==obj.confirmNewPassword){
                 setNotMatch('Both the passwords you typed do not match. Please use identical passwords in both the form fields.')
                return
             }
             console.log('date is',obj)
         dispatch(forgotUpdatePasswordUserAsync(obj))
             action.resetForm()
        
        }
      });
return (
    <>
 {forgotUpdatePasswordSelector?null:<div>
    <form onSubmit={handleSubmit}>
    <div className='flex justify-center'>
              <div className="mt-5">
                <TextField
                  id="outlined-basic"
                  label="New password"
                  type="password"
                  variant="outlined"
                  className="w-80"
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.newPassword && touched.newPassword)}
                />
                {errors.newPassword && touched.newPassword ? <p className='text-red-500 pl-4'>{errors.newPassword}</p> : null}
              </div>
            </div>
            <div className='flex justify-center'>
              <div className="mt-5">
                <TextField
                  id="outlined-basic"
                  label="Confirm New Password"
                  type="password"
                  variant="outlined"
                  className="w-80"
                  name="confirmNewPassword"
                  value={values. confirmNewPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors. confirmNewPassword && touched. confirmNewPassword)}
                />
                {errors. confirmNewPassword && touched. confirmNewPassword ? <p className='text-red-500 pl-4'>{errors. confirmNewPassword}</p> : null}
              </div>
              
            </div>
            <p className='text-red-500 pl-4 text-center'>{notMatch}</p>
            <div className="flex justify-center mt-7 mb-9">
              <button
                type="submit"
                className="text-white bg-[#ff6000] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-300 dark:hover:bg-orange-300 focus:outline-none dark:focus:ring-blue-800 w-64"
                style={{ width: "20rem", height: '3rem' }}
              >
                SUBMIT
              </button>
            </div>
    </form>

 </div>}
 {forgotUpdatePasswordSelector?<ForgotUpdatePasswordResult/>:null}
    </>
)
}
export default NewPassword