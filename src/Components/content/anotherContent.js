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
// import { format } from 'date-fns';
// import {  useDispatch } from 'react-redux'
import shield from '../../assets/anotherContentImage/shield.png'
import rightArrow from '../../assets/anotherContentImage/rightArrow.png'
import forwardArrow from '../../assets/anotherContentImage/forwardArrow.png'
import downwardArrow from '../../assets/anotherContentImage/downArrow.png'
import createProfile from '../../assets/anotherContentImage/createProfile.png'
import date from '../../assets/anotherContentImage/dateAndChat.png'
import dating from '../../assets/anotherContentImage/dating.png'
import rightArrows from '../../assets/anotherContentImage/rightArrow.svg'
import '../../styles.css'
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { anotherContentImages } from "../../utils/anotherContentData";
import SecondFooter from "../secondFooter/secondFooter";

export const AnotherContent = ({checkDataArray}) => {
  // console.log('check data array ',checkDataArray)
    const [firstNameError, setFirstNameError] = React.useState('');
    const [phoneError, setPhoneError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [showPassword, setShowPassword] = useState(false)
    // const [selectedDate, setSelectedDate] = useState(null)
    const navigate=useNavigate()
    // const dispatch=useDispatch()
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
        // console.log('date is', obj);
    
        let errors = {};
    
        for (let i = 0; i < checkDataArray?.length; i++) {
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
    // console.log(errors);
    
   
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
      <div className="lg:flex lg:justify-center lg:mt-8 dateLocal  ">
        <div className=" aboslute">
        <div className="w-screen rounded lg:w-[40rem] bg-[#eff0f4]   ">
          <p className="text-xl lg:text-2xl font-bold text-center pt-4">Date application</p>
          <div className="flex justify-center ml-8 ">
          <p className="text-md lg:text-lg font-semibold text-center pt-1">Meet Millions of  Awesome Singles Near You</p>
          <img src={forwardArrow} className="hidden w-12 -mt-2 ml-4 lg:block " alt="forward-Arrow"/>
          <img src={downwardArrow} className=" w-12 -mt-2 ml-4 lg:hidden " alt="backward-Arrow"/>
          </div>
          <div className="flex justify-center gap-3 mt-7">
          {
            anotherContentImages.map(anotherImage=>{
              return (
                <>
                <img src={anotherImage.img} className="w-20 lg:w-28 rounded-xl 
                " alt="anotherImage-img" />
                </>
              )
            })
          }
          </div>
          
        <div className=" mt-7 lg:hidden ">
          <div class="w-screen lg:w-full rounded overflow-hidden shadow-lg bg-white ">
            <div>
              <div class="font-bold text-xl mb-2 text-center bg-green-500 text-white h-12 ">
                <p className="pt-2">Sign up Now Meet Singles!</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className=" sm:ml-28 md:ml-60 ml-4 mr-4 mt-5 signUpSingles">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    type="text"
                    variant="outlined"
                    className="sm:w-96  w-full lg:w-96  "
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
                  <div className="mt-5 sm:ml-28 md:ml-60 ml-4 mr-4 signUpSingles">
                    <FormControl className=" w-28 lg:w-40 ">
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
                  <div  className={`${touched.gender && errors.gender ? 'ml-0 mr-2 mt-3' : 'mt-3 lg:ml-4 mr-4'} `}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]} value={values.date}>
                        <DatePicker
                            label="Date"
                            className="w-full lg:w-36"
                            onChange={handleDateChange} // Call handleDateChange to update the selected date
                        />
                    </DemoContainer>
                </LocalizationProvider>
                {errors.date && touched.date? <p className='text-red-500 pl-4'>{errors.date}</p>:null}
                  </div>

               
                </div>
                <div className="mt-5  md:ml-60 sm:ml-28 ml-4 mr-4 signUpSingles">
                <TextField
                    id="outlined-basic1"
                    label="City"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    className="sm:w-96 w-full lg:w-96  "
                    type="text"
                    name="city"
                    error={Boolean(errors.city && touched.city)}
                  />
                  {errors.city && touched.city? <p className='text-red-500 pl-4'>{errors.city}</p>:null}
                </div>
                {/* //date */}
              { values.city && <div>
                <div className="sm:ml-28  md:ml-60 ml-4 mr-4 mt-5 signUpSingles">
                  <TextField
                    id="outlined-basic2"
                    label="First Name"
                    variant="outlined"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="firstName"
                    type="text"
                    className="sm:w-96 w-full lg:w-96  "
                    error={Boolean(errors.firstName && touched.firstName)}
                    
                  />
                    {errors.firstName && touched.firstName? <p className='text-red-500 pl-4'>{errors.firstName}</p>:null}
                    {firstNameError? <p className='text-red-500 pl-4'>{firstNameError}</p>:null}
                </div>
                <div className="sm:ml-28  md:ml-60 ml-4 mr-4 mt-5 signUpSingles">
                  <TextField
                    id="outlined-basic3"
                    label="Password"
                    variant="outlined"
                    className="sm:w-96 w-full lg:w-96  "
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={showPassword ? "text" : "password"}
                    error={Boolean(errors.password && touched.password)}
                  />
                     {errors.password && touched.password? <p className='text-red-500 pl-4'>{errors.password}</p>:null}
                {!showPassword ? (
        <img src={closeEye}  alt="closeEye" className={`${touched.password && errors.password ? 'w-7 ml-72 lg:ml-80 relative top-[-4.2rem] ' : 'w-7 ml-72 lg:ml-80 relative top-[-2.5rem]'} cursor-pointer`} onClick={togglePasswordVisibility}/>
    ) : (
        <img src={openEye} alt="openEye" className='w-7 ml-72 lg:ml-80 relative top-[-2.5rem]  cursor-pointer' onClick={togglePasswordVisibility}/>
    )}
                </div>

                <div className="sm:ml-28  md:ml-60 ml-4 mr-4 signUpSingles ">
                  <div>
                     <TextField
                    id="outlined-basic4"
                    label="Phone"
                    variant="outlined"
                    className="sm:w-96 w-full lg:w-96  "
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
                <div className="sm:ml-28  md:ml-60 lg:ml-4 mt-5 mb-5 signUpSingles">
                <button className="bg-green-700 hover:bg-green-600  text-white font-bold py-2 px-4 rounded sm:w-96 w-full lg:w-96 h-12" type="submit">
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
          <div className="bg-[#dddddd]  mt-20 ">
            <div className="flex gap-2 justify-between ml-8 mr-8">
           <div className="flex gap-3">
           <div className="rounded-3xl w-12 h-12 mt-3 mb-4 bg-white flex justify-center  ">
            <img src={shield} className="w-9 h-8 mt-2" alt="shield"/>
          </div>
          <div>
            <p className="text-sm text-black font-semibold pt-4">Trusted by<br/> Millions of Indians</p>
          </div>
           </div>

           <div className="flex gap-3">
           <div className="rounded-3xl w-12 h-12 mt-3 mb-4 bg-white flex justify-center ">
            <img src={rightArrow} className="w-9 h-8 mt-2" alt="rightArrow"/>
          </div>
          <div>
            <p className="text-sm text-black font-semibold pt-4">Verified & Screened <br/> No Fakes</p>
          </div>
           </div>
          
            </div>
          </div>
        
        </div>
        </div>
     
        <div className=" hidden lg:block mr-28">
          <div class="w-screen lg:w-full rounded overflow-hidden shadow-lg bg-white ">
            <div>
              <div class="font-bold text-xl mb-2 text-center bg-green-500 text-white h-12 ">
                <p className="pt-2">Sign up Now Meet Singles!</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="signUpSingles ml-4 mr-4 mt-5">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    type="text"
                    variant="outlined"
                    className=" w-full lg:w-96  "
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
                    <FormControl className=" w-28 lg:w-40 ">
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
                  <div  className={`${touched.gender && errors.gender ? 'ml-0 mr-2 mt-3' : 'mt-3 lg:ml-4 mr-4'} `}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]} value={values.date}>
                        <DatePicker
                            label="Date"
                            className="w-full lg:w-36"
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
                    className="w-full lg:w-96  "
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
                    className="w-full lg:w-96  "
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
                    className="w-full lg:w-96  "
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={showPassword ? "text" : "password"}
                    error={Boolean(errors.password && touched.password)}
                  />
                     {errors.password && touched.password? <p className='text-red-500 pl-4'>{errors.password}</p>:null}
                {!showPassword ? (
        <img src={closeEye}  alt="closeEye"  className={`${touched.password && errors.password ? 'w-7 ml-72 lg:ml-80 relative top-[-4.2rem] ' : 'w-7 ml-72 lg:ml-80 relative top-[-2.5rem]'} cursor-pointer`} onClick={togglePasswordVisibility}/>
    ) : (
        <img src={openEye} alt="openEye" className='w-7 ml-72 lg:ml-80 relative top-[-2.5rem]  cursor-pointer' onClick={togglePasswordVisibility}/>
    )}
                </div>

                <div className=" ml-4 mr-4 ">
                  <div>
                     <TextField
                    id="outlined-basic4"
                    label="Phone"
                    variant="outlined"
                    className="w-full lg:w-96  "
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
                <div className="lg:ml-4 mt-5 mb-5">
                <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full lg:w-96 h-12" type="submit">
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
      <p className="text-center font-semibold text-lg text-black pt-4">Match with local Singles</p>
      <div className=" grid grid-cols-2 sm:grid-cols-3 ml-11 lg:flex lg:gap-7 lg:ml-44 mt-8 localSingles localArray ">
        {
         checkDataArray?.length>0? checkDataArray?.slice(0,7).map(checkItem=>{
            const dob = checkItem.DOB;
            const dobBreak = dob?.split("/");
            const year = dobBreak?.[2];
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            const age = year ? currentYear - parseInt(year) : "";
            return (
              <>
              <div className="grid grid-cols-1">
              <img src={checkItem.images[0]} alt="checkItem" className="w-32 h-40  rounded-lg cursor-pointer"/>
              <div className="flex gap-3">
            <p className="text-center">{checkItem.firstName},</p>
            <p>{age}</p>
              </div>
              </div>
              </>
            )
          }):<p className="text-center ml-10">No local singles are available</p>
        }
      </div>
     <p className="text-lg font-semibold text-center pt-5">How does ApnaPan work?</p>
     <div className="rounded-full border-2 dateWork  border-gray-400  mt-4 mb-8 lg:w-[68rem] lg:ml-40">
      <div className=" flex justify-center  lg:gap-12 ">
      <div className="mt-6 mb-6">
        <img src={createProfile} alt="createProfile" className="w-12 ml-12"/>
        <p className="text-center  text-sm lg:-ml-2 pt-2">Create Profile for free</p>
      </div>
      <div className="rounded-2xl bg-slate-200 w-8 h-8 -ml-6 lg:ml-0 flex justify-center mt-10 /">
      <img src={rightArrows} className="w-4 " alt="rightArrow"/>
      </div>
      
      <div className="mt-6 mb-6">
        <img src={date} className="w-12" alt="date"/>
        <p className="text-center text-sm pt-2">Like Match</p>
      </div>
      <div className="rounded-2xl bg-slate-200 w-8 h-8 flex justify-center mt-10 /">
      <img src={rightArrows} className="w-4 " alt="rightArrows"/>
      </div>
      <div className="mt-6 mb-6">
        <img src={dating} className="w-12" alt="dating-img"/>
        <p className="text-center text-sm pt-2">Go on a Date!</p>
      </div>
      </div>
     </div>
     <SecondFooter/>
    </>
  );
};
