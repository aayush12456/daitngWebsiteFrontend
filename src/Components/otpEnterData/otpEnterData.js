import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyPasswordOtpAsync } from '../../Redux/Slice/verifyPasswordOtpSlice/verifyPasswordOtpSlice';
import { useSelector } from 'react-redux';

const OTPEnterData = ({forgot,phoneNumber }) => {
  const phone=phoneNumber
    const forgotData={
      name:forgot?.name,
      phone:phone
    }
  // console.log('user is ', user);
  const navigate=useNavigate()
  const [otp, setOtp] = useState('');
  // const [errorOtp,setErrorOtp]=useState('')
 const dispatch=useDispatch()
 const verifyOtpSelector=useSelector((state)=>state?.verifyPasswordOtp?.verifyPasswordOtpData)
//  console.log('verify password otp selector',verifyOtpSelector)


const verifyOtp=()=>{
  const otpObj={
    otp:otp
  }
 dispatch(verifyPasswordOtpAsync(otpObj)) 
 setOtp('')
}


  return (
    <>
 
      <div className='flex justify-center'>
        <OtpInput
          value={otp}
          onChange={(otp) => setOtp(otp)}
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
      <p className='text-red-500 pl-4 text-center pt-2'>{verifyOtpSelector?.mssg}</p>
      <div className="flex justify-center mt-7 mb-9">
        <button
          className="text-white bg-[#ff6000] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-300 dark:hover:bg-orange-300 focus:outline-none dark:focus:ring-blue-800 w-64"
          style={{ width: "20rem", height: '3rem' }}
          onClick={() => {
            // console.log('Entered OTP is: ', otp);
            verifyOtp();
          }}
        >
          SUBMIT
        </button>
      </div>
      {verifyOtpSelector?.mssg==='Login Successfully'?    navigate('/newPassword',{state:forgotData}):null}
    </>
  );
};

export default OTPEnterData;
