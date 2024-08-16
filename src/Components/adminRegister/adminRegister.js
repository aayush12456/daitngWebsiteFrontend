import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { adminLoginSchema} from '../../schemas';
import closeEye from '../../assets/modalIcons/closedeye.png';
import openEye from '../../assets/modalIcons/openeye.png';
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux'
import { adminRegisterAsync } from '../../Redux/Slice/adminRegisterSlice/adminRegisterSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const AdminRegister=()=>{
    const [showPassword, setShowPassword] = useState(false);
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const adminRegisterResponse=useSelector((state)=>state.adminRegister.adminRegisterresponseData)
    // console.log('admin register data',adminRegisterResponse)
    const initialValues = {
        email: '',
        password: ''
      };
    
      const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema:adminLoginSchema,
        onSubmit: (values, action) => {
            const adminObj={
                adminEmail:values.email,
                adminPassword:values.password
            }
          // console.log('admin register data is', adminObj);
          dispatch(adminRegisterAsync(adminObj))
          action.resetForm();
          
        }
      });
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const adminLogin=()=>{
        navigate('/admin/login')
        }
        useEffect(()=>{
        if(adminRegisterResponse?.token){
          navigate('/admin')
        }
        },[adminRegisterResponse,navigate])
return (
    <>
  <div className='flex justify-center mt-16'>
<div class="w-96 rounded overflow-hidden shadow-lg">
<form onSubmit={handleSubmit}>
<div className="px-6 py-4">
  <div className="font-bold text-xl mb-2 text-center mt-3 ">Admin Register</div>
          </div>
<div className="flex justify-center">
    <div className="mt-5">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="text"
                  variant="outlined"
                  className="w-80"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  error={Boolean(errors.email && touched.email)}
                />
                {errors.email && touched.email ? <p className='text-red-500 pl-4'>{errors.email}</p> : null}
      
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mt-5">
                <TextField
                  id="outlined-basic3"
                  label="Password"
                  variant="outlined"
                  className="w-80"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={showPassword ? "text" : "password"}
                  error={Boolean(errors.password && touched.password)}
                />
                {errors.password && touched.password ? <p className='text-red-500 pl-4'>{errors.password}</p> : null}
                {/* {wrongCredentials? <p className='text-red-500 text-right '>{wrongCredentials}</p> : null} */}
                {!showPassword ? (
                  <img
                    src={closeEye}
                   className={`${(touched.password && errors.password)  ? 'w-7 ml-72 relative top-[-4.2rem]' : 'w-7 ml-72 relative top-[-2.5rem]'} cursor-pointer`}
                    onClick={togglePasswordVisibility}
                    alt='closeEye-img'
                  />
                ) : (
                  <img
                    src={openEye}
                    className='w-7 ml-72 relative top-[-2.5rem] cursor-pointer'
                    onClick={togglePasswordVisibility}
                    alt='openEye-img'
                  />
                )}
              </div>
            </div>
            <div className="flex justify-center mt-4 mb-9">
              <button
                type="submit"
                className="text-white bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-300 dark:hover:bg-orange-300 focus:outline-none dark:focus:ring-blue-800 w-64"
                style={{ width: "20rem" }}
              >
            Submit
              </button>
            </div>
            </form>
            <div className="flex justify-center  mb-9" >
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ width: "20rem" }} onClick={adminLogin}>
              Admin Login
</button>
            </div>
</div>
</div>
    </>
)
}
export default AdminRegister