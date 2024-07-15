import React, { useState,useEffect } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import closeEye from '../../assets/modalIcons/closedeye.png'
import openEye from '../../assets/modalIcons/openeye.png'
import 'react-phone-number-input/style.css'
import { useFormik } from 'formik'
import { signUpSchema } from "../../schemas";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import {  useDispatch } from 'react-redux'

import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

export const AnotherContent = ({checkDataArray}) => {
  console.log('check data array ',checkDataArray)
    const [firstNameError, setFirstNameError] = React.useState('');
    const [phoneError, setPhoneError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const initialValues={
      firstName:'',
      phone:'',
      email:'',
      password:'',
      gender:'',
      date:'',
      city:''
    }
    // const {values, errors, touched, handleBlur, handleChange, handleSubmit,setValues,setFieldValue} = useFormik({
    //   initialValues: initialValues,
    //   validationSchema: signUpSchema,
    //   onSubmit: (values, action) => {
    //     let day=values.date.$D
    //     let month=values.date.$M
    //     let year=values.date.$y
    //    let date=day.toString()+ '/'+ month.toString()+ '/'+ year.toString()
    //    const obj={
    //     firstName:values.firstName,
    //     phone:values.phone,
    //     email:values.email,
    //     password:values.password,
    //     gender:values.gender,
    //     city:values.city,
    //     date:date
    //    }
    //    console.log('date is',obj)
    //    for(let i=0;i<checkDataArray.length;i++){
    //     const checkObj=checkDataArray[i]
    //     if(obj.firstName===checkObj.firstName){
    //       setFirstNameError('first name already exist')
    //       return
    //     }
    //      if(obj.email===checkObj.email){
    //       setEmailError('email already exist')
    //       return
    //     }
    //     if(obj.phone===checkObj.phone){
    //       setPhoneError('phone already exist')
    //       return
    //     }
    //    }
    //    sessionStorage.setItem('formData', JSON.stringify(obj));
    //     navigate('/step1',{state:obj})
    //     action.resetForm();
    //   }
    // });
    // console.log(errors)
    const {values, errors, touched, handleBlur, handleChange, handleSubmit, setValues, setFieldValue} = useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        let day = values.date.$D;
        let month = values.date.$M;
        let year = values.date.$y;
        let date = day.toString() + '/' + month.toString() + '/' + year.toString();
        const obj = {
          firstName: values.firstName,
          phone: values.phone,
          email: values.email,
          password: values.password,
          gender: values.gender,
          city: values.city,
          date: date
        };
        console.log('date is', obj);
    
        let errors = {};
    
        for (let i = 0; i < checkDataArray.length; i++) {
          const checkObj = checkDataArray[i];
          if (obj.firstName === checkObj.firstName) {
            errors.firstName = 'First name already exists';
          }
          if (obj.email === checkObj.email) {
            errors.email = 'Email already exists please use different email';
          }
          if (obj.phone === checkObj.phone) {
            errors.phone = 'Mobile number already exists use different number';
          }
        }
    
        if (Object.keys(errors).length > 0) {
          setFirstNameError(errors.firstName || '');
          setEmailError(errors.email || '');
          setPhoneError(errors.phone || '');
          return;
        }
    
        sessionStorage.setItem('formData', JSON.stringify(obj));
        navigate('/step1', {state: obj});
        action.resetForm();
      }
    });
    console.log(errors);
    
   
    useEffect(() => {
      const forms = JSON.parse(sessionStorage.getItem('formData'));
      if (forms) {
        setValues(forms);
        
      }
    }, [setValues]);
    const handleDateChange = (date) => {
      setFieldValue('date', date); // Update Formik values with selected date
  
  };

  return (
    <>
      <div className="flex justify-between mt-8 ">
        <div>
          <p>Date application</p>
          <p>Meet 30 Million Awesome Singles Near You</p>
        </div>
        <div className="mr-28">
          <div class=" rounded overflow-hidden shadow-lg  ">
            <div>
              <div class="font-bold text-xl mb-2 text-center bg-green-500 text-white h-12 ">
                <p className="pt-2">Sign up Now Meet Singles!</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className=" ml-4 mr-4 mt-5">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    type="text"
                    variant="outlined"
                    className="w-96  "
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    error={Boolean(errors.email && touched.email)}
                  />
                   {errors.email && touched.email? <p className='text-red-500 pl-4'>{errors.email}</p>:null}
                   {emailError? <p className='text-red-500 pl-4'>{emailError}</p>:null}
                </div>
                <div className="flex ">
                  <div className="mt-5 ml-4 mr-4">
                    <FormControl className="w-40 ">
                      <InputLabel id="demo-simple-select-label">
                        Gender
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Gender"
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        name="gender"
                        error={Boolean(errors.gender && touched.gender)}
                      >
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                      </Select>
                    </FormControl>
                    {errors.gender && touched.gender ? (
      <p className='text-red-500 pl-2'>{errors.gender}</p>
    ) : null}
                  </div>                                                                       
                  <div  className={`${touched.gender && errors.gender ? 'ml-0 mr-2 mt-3' : 'mt-3 ml-4 mr-4'} `}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]} value={values.date}>
                        <DatePicker
                            label="Date"
                            className="w-36"
                            onChange={handleDateChange} // Call handleDateChange to update the selected date
                        />
                    </DemoContainer>
                </LocalizationProvider>
                {errors.date && touched.date? <p className='text-red-500 pl-4'>{errors.date}</p>:null}
                  </div>

               
                </div>
                <div className="mt-5 ml-4 mr-4">
                <TextField
                    id="outlined-basic1"
                    label="City"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    className="w-96  "
                    type="text"
                    name="city"
                    error={Boolean(errors.city && touched.city)}
                  />
                  {errors.city && touched.city? <p className='text-red-500 pl-4'>{errors.city}</p>:null}
                </div>
                {/* //date */}
              { values.city && <div>
                <div className=" ml-4 mr-4 mt-5">
                  <TextField
                    id="outlined-basic2"
                    label="First Name"
                    variant="outlined"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="firstName"
                    type="text"
                    className="w-96  "
                    error={Boolean(errors.firstName && touched.firstName)}
                    
                  />
                    {errors.firstName && touched.firstName? <p className='text-red-500 pl-4'>{errors.firstName}</p>:null}
                    {firstNameError? <p className='text-red-500 pl-4'>{firstNameError}</p>:null}
                </div>
                <div className=" ml-4 mr-4 mt-5">
                  <TextField
                    id="outlined-basic3"
                    label="Password"
                    variant="outlined"
                    className="w-96  "
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={showPassword ? "text" : "password"}
                    error={Boolean(errors.password && touched.password)}
                  />
                     {errors.password && touched.password? <p className='text-red-500 pl-4'>{errors.password}</p>:null}
                {!showPassword ? (
        <img src={closeEye}   className={`${touched.password && errors.password ? 'w-7 ml-80 relative top-[-4.2rem] ' : 'w-7 ml-80 relative top-[-2.5rem]'} cursor-pointer`} onClick={togglePasswordVisibility}/>
    ) : (
        <img src={openEye} className='w-7 ml-80 relative top-[-2.5rem]  cursor-pointer' onClick={togglePasswordVisibility}/>
    )}
                </div>

                <div className=" ml-4 mr-4 ">
                  <div>
                     <TextField
                    id="outlined-basic4"
                    label="Phone"
                    variant="outlined"
                    className="w-96  "
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="phone"
                    type="text"
                    error={Boolean(errors.phone && touched.phone)}
                    placeholder="+91"
                  
                  />
                  </div>
    {errors.phone && touched.phone? <p className='text-red-500 pl-4'>{errors.phone}</p>:null}
    {phoneError? <p className='text-red-500 pl-4'>{phoneError}</p>:null}
                </div>
                </div>}
                <div className="ml-4 mt-5 mb-5">
                <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-96 h-12" type="submit">
SUBMIT
</button>
                </div>
              </form>
              <div className=" pb-7">
                  <p className="text-center" >By choosing to continue you agree to our <br/><span className="underline">Terms of Use Privacy Policy</span> and <span className="underline">Cookie Policy</span></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
