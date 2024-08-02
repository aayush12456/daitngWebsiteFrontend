import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { loginWithOtpModalSliceActions } from "../../Redux/Slice/loginWIthOtpModalSlice";
import leftArrow from '../../assets/personalProfileIcons/leftArrow.svg';
import { TextField } from '@mui/material';
import { useSelector } from "react-redux";
import { loginWithOtpAsync } from "../../Redux/Slice/loginWithOtpSlice/loginWithOtpSlice";
import LoginOtpEnterData from "../loginOtpEnterData/loginOtpEnterData";


const LoginWithOtpModal = ({ otpOpen }) => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const loginWithOtpSelector=useSelector((state)=>state?.loginWithOtp?.loginWithOtpData)
  const errorPhoneMssg=useSelector((state)=>state?.loginWithOtp?.loginWithOtpData.mssg)
  console.log('compare login data',loginWithOtpSelector)
  console.log('error phone mssg',errorPhoneMssg)


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

  const handleCloseModalData = () => {
    dispatch(loginWithOtpModalSliceActions.OtpModalToggle());
  };

  const phoneChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
    if (error) {
      setError(''); // Clear error when user starts typing
    }
  };

  const phoneSubmitHandler = (e) => {
    e.preventDefault();
    if (phoneNumber.trim() === '') {
      setError('Please enter your phone number');
    } else {
      const phoneObj = {
        phone: phoneNumber,
        reset:'login data'
      };
   
      dispatch(loginWithOtpAsync(phoneObj))
      console.log('phone number is', phoneObj);
      setPhoneNumber('');
    }
  };

 

  return (
    <>
      <Modal
        open={otpOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         {loginWithOtpSelector.mssg=='Login Successfully'?null: <div>

          <div className="flex gap-20 ">
            <img src={leftArrow} className="w-4 cursor-pointer" onClick={handleCloseModalData} />
            <p className="font-bold text-xl mb-2 text-center">Login with OTP</p>
          </div>
          <form onSubmit={phoneSubmitHandler}>
            <div className="flex justify-center">
              <div className="mt-5">
                <TextField
                  id="outlined-basic"
                  label="Enter Mobile Number"
                  type="text"
                  variant="outlined"
                  className="w-80"
                  name='phone'
                  onChange={phoneChangeHandler}
                  value={phoneNumber}
                  error={!!error} // Error indication in TextField
                  helperText={error} // Display error message
                />
              </div>
            </div>
            <p className='text-red-500 pl-4 pt-2 text-center'>{errorPhoneMssg}</p>
            <div className="flex justify-center mt-7 mb-7">
              <button
                type="submit"
                className="text-white bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-300 dark:hover:bg-orange-300 focus:outline-none dark:focus:ring-blue-800 w-64 h-12"
                style={{ width: "20rem" }}
              >
                SEND OTP
              </button>
            </div>
          </form>
          </div>}
        { loginWithOtpSelector.mssg=='Login Successfully'? <LoginOtpEnterData/>:null}
        </Box>
      </Modal>
    </>
  );
};

export default LoginWithOtpModal;
