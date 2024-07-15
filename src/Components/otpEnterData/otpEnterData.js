import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
const OTPEnterData = ({ user,forgot,phoneNumber }) => {
  const phone=phoneNumber
    const forgotData={
      name:forgot?.name,
      phone:phone
    }
  console.log('user is ', user);
  const navigate=useNavigate()
  const [otp, setOtp] = useState('');
  const [errorOtp,setErrorOtp]=useState('')

  const verifyOtp = async () => {
    if (otp === '' || otp === null){
setErrorOtp('please enter  OTP')
return 
    } 
    try {
      const data = await user.confirm(otp);
      console.log('data of otp is', data);
      navigate('/newPassword',{state:forgotData})
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        <OtpInput
          value={otp}
          onChange={(otp) => setOtp(otp)}
          numInputs={6}
          separator={<span style={{ width: "8px" }}></span>}
          isInputNum={true}
          shouldAutoFocus={true}
          renderSeparator={<span>-</span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                border: "1px solid transparent",
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
      <p className='text-red-500 pl-4 text-center'>{errorOtp}</p>
      <div className="flex justify-center mt-7 mb-9">
        <button
          className="text-white bg-[#ff6000] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-300 dark:hover:bg-orange-300 focus:outline-none dark:focus:ring-blue-800 w-64"
          style={{ width: "20rem", height: '3rem' }}
          onClick={() => {
            console.log('Entered OTP is: ', otp);
            verifyOtp();
          }}
        >
          SUBMIT
        </button>
      </div>
    </>
  );
};

export default OTPEnterData;
