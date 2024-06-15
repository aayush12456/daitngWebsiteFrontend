import React,{useState} from 'react'
import closeEye from '../../assets/modalIcons/closedeye.png'
import openEye from '../../assets/modalIcons/openeye.png'
import { loginSchema } from '../../schemas'
import { useFormik } from 'formik'
import { TextField } from '@mui/material'
import {  useDispatch } from 'react-redux'
import { userLoginAsync } from '../../Redux/Slice/loginSlice/loginSlice'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { modalActions } from '../../Redux/Slice/modalSlice'
export const Modals = ({match}) => {
    const [showPassword, setShowPassword] = useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const initialValues={
      email:'',
      password:''
    }
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
      initialValues:initialValues,
      validationSchema:loginSchema,
      onSubmit:(values,action)=>{
     console.log('login data is',values)
     dispatch(userLoginAsync(values))
     action.resetForm()
      }
    
    })
    // const token=localStorage.getItem('loginToken')
    // console.log('token is',token)
    const loginResponse=useSelector((state)=>state.loginData.LoginresponseData)
    console.log('login response',loginResponse)
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "none",
      boxShadow: 24,
      p: 4,
    };
    const handleCloses=()=>{
      dispatch(modalActions.visibleToggle());
    }
  return (
    <>
    {/* <div className='flex justify-center mt-11   ' >

    <div class="max-w-sm rounded overflow-hidden shadow-lg  ">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">Login</div>
  </div>
 <form onSubmit={handleSubmit}>
 <div className=" ml-7 mr-7 mt-5">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    type="text"
                    variant="outlined"
                    className="w-80  "
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    error={Boolean(errors.email && touched.email)}
                  />
                   {errors.email && touched.email? <p className='text-red-500 pl-4'>{errors.email}</p>:null}
        
                </div>
                <div className=" ml-7 mr-7 mt-5">
                  <TextField
                    id="outlined-basic3"
                    label="Password"
                    variant="outlined"
                    className="w-80  "
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={showPassword ? "text" : "password"}
                    error={Boolean(errors.password && touched.password)}
                  />
                     {errors.password && touched.password? <p className='text-red-500 pl-4'>{errors.password}</p>:null}
                {!showPassword ? (
        <img src={closeEye}   className={`${touched.password && errors.password ? 'w-7 ml-72 relative top-[-4.2rem] ' : 'w-7 ml-72 relative top-[-2.5rem]'} cursor-pointer`} onClick={togglePasswordVisibility}/>
    ) : (
        <img src={openEye} className='w-7 ml-72 relative top-[-2.5rem]  cursor-pointer' onClick={togglePasswordVisibility}/>
    )}
                </div>
<div className=''>
<p className='text-end text-black pr-7 relative -top-4   '>Forgot your password?</p>

</div>
            <div class="flex justify-center mt-4 mb-9">
              <button
                type="submit"
                class="text-white bg-orange-600  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-300 dark:hover:bg-orange-300 focus:outline-none dark:focus:ring-blue-800 w-64"     style={{ width: "20rem" }}
              >
                Login
              </button>
            </div>
 </form>
</div>
    </div> */}
    <Modal
        open={match}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
  <Box sx={style}>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">Login</div>
  </div>
  <form onSubmit={handleSubmit}>
    <div className='flex justify-center'>
    <div className="mt-5">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    type="text"
                    variant="outlined"
                    className="w-80  "
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    error={Boolean(errors.email && touched.email)}
                  />
                   {errors.email && touched.email? <p className='text-red-500 pl-4'>{errors.email}</p>:null}
        
                </div>
    </div>
                <div className='flex justify-center'>
                <div className="  mt-5">
                  <TextField
                    id="outlined-basic3"
                    label="Password"
                    variant="outlined"
                    className="w-80  "
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={showPassword ? "text" : "password"}
                    error={Boolean(errors.password && touched.password)}
                  />
                     {errors.password && touched.password? <p className='text-red-500 pl-4'>{errors.password}</p>:null}
                {!showPassword ? (
        <img src={closeEye}   className={`${touched.password && errors.password ? 'w-7 ml-72 relative top-[-4.2rem] ' : 'w-7 ml-72 relative top-[-2.5rem]'} cursor-pointer`} onClick={togglePasswordVisibility}/>
    ) : (
        <img src={openEye} className='w-7 ml-72 relative top-[-2.5rem]  cursor-pointer' onClick={togglePasswordVisibility}/>
    )}
                </div>
                </div>
               
<div className=''>
<p className='text-end text-black pr-7 relative -top-4   '>Forgot your password?</p>

</div>
            <div class="flex justify-center mt-4 mb-9">
              <button
                type="submit"
                class="text-white bg-orange-600  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-300 dark:hover:bg-orange-300 focus:outline-none dark:focus:ring-blue-800 w-64"     style={{ width: "20rem" }}
              >
                Login
              </button>
            </div>
 </form>
  </Box>
      </Modal>
    {
    loginResponse.token?navigate('/mainContent'):null
    }
      
    </>
  )
}
