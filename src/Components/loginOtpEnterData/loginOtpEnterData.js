import React, { useState,useEffect} from 'react';
import OtpInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { compareLoginWithOtpAsync } from '../../Redux/Slice/compareLoginWithOtpSlice/compareLoginWithOtpSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginWithOtpAsync } from '../../Redux/Slice/loginWithOtpSlice/loginWithOtpSlice';
import io from "socket.io-client";
// const socket = io.connect("http://localhost:4000");
const socket = io.connect("https://daitingwebsitebackend.onrender.com");
const LoginOtpEnterData=()=>{
    const dispatch=useDispatch()
    const navigate = useNavigate();
    const [otps, setOtps] = useState('');
    const [countdown, setCountdown] = useState(10);
    const [phone,setPhone]=useState('')
    const loginWithOtpResponse=useSelector((state)=>state.compareLogin.compareloginWithOtpData)
    const errorOtp=useSelector((state)=>state?.compareLogin?.compareloginWithOtpData?.mssg)
    const phoneNumber=useSelector((state)=>state.loginWithOtp.loginWithOtpData.phoneNumber)
    // console.log('error otp',errorOtp)
    // console.log('login with otp response',loginWithOtpResponse)
    const phoneObj = {
        phone: phoneNumber
      };
    const otpSubmitHandler=(e)=>{
   e.preventDefault()
   const otpObj={
    otp:otps
   }
  //  console.log('otp is',otpObj)
   dispatch(compareLoginWithOtpAsync(otpObj))
   setOtps('')
    }
     useEffect(() => {
    if (loginWithOtpResponse.token) {
      switch (loginWithOtpResponse.completeData.sidebarTitle) {
        case 'Matches':
          navigate('/mainContent/matches');
          break;
        case 'Search':
          navigate('/mainContent/search');
          break;
        case 'Likes You':
          navigate('/mainContent/likeMe');
          break;
        case 'Visitors':
          navigate('/mainContent/visitors');
          break;
        default:
          navigate('/mainContent');
      }
    }
  }, [loginWithOtpResponse, navigate]);

  useEffect(() => {
    if (loginWithOtpResponse.existingLoginData) {
      socket.emit('loginUser', loginWithOtpResponse.existingLoginData);
      // console.log('Emitted login data:', loginResponse.existingLoginData);
    }
  }, [loginWithOtpResponse.existingLoginData]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const resendOtpHandler = () => {
    // Logic to resend OTP goes here
    setCountdown(10); // Reset the countdown timer
    dispatch(loginWithOtpAsync(phoneObj))
    setPhone(phoneNumber)
  };

return(
    <>
       <p className="font-bold text-xl pb-2 -mt-4 text-center">Enter OTP</p>
       <p className='text-center pb-6'>please enter the verification code sent to +91{phoneNumber}</p>
       <form onSubmit={otpSubmitHandler}>
       <div className='flex justify-center'>
    
    <OtpInput
      value={otps}
      onChange={(otp) => setOtps(otp)}
      numInputs={5}
      separator={<span style={{ width: "8px" }}></span>}
      isInputNum={true}
      shouldAutoFocus={true}
      renderSeparator={<span>-</span>}
      renderInput={(props) => (
        <input
          {...props}
          style={{
            // border: "1px solid transparent",
            borderRadius: "8px",
            width: "54px",
            height: "54px",
            fontSize: "12px",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue",
            border: "1px solid #CFD3DB",
            outline: "none",
            textAlign: 'center'
          }}
          
        />
      )}
    />
  </div>
  <p className='text-red-500 pl-4 pt-2 text-center'>{errorOtp}</p>
  <div className='flex justify-center mt-6'>
<button class="bg-transparent w-44   hover:border-gray-300 text-gray-300 font-semibold hover:text-gray-300 py-2 px-4 border border-gray-300 hover:border-transparent rounded"
            onClick={resendOtpHandler}
            disabled={countdown > 0}
>
RESEND{countdown > 0 ? `(${countdown})` : ''}
</button>
  </div>
  {phone &&<p className='text-center text-green-500 text-sm pt-3  '>Successfully sent OTP to +91{phone}</p>}
  <div className="flex justify-center mt-7 mb-9">
    <button
      className="text-white bg-[#ff6000] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-300 dark:hover:bg-orange-300 focus:outline-none dark:focus:ring-blue-800 w-64"
      style={{ width: "20rem", height: '3rem' }}
  type='submit'
    >
      SUBMIT
    </button>
  </div>
       </form>
   
    </>
)
}
export default LoginOtpEnterData