import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { resetPasswordSchema } from '../../schemas';
import { useFormik } from 'formik';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../firebase/setup';
import { useDispatch } from 'react-redux';
import OTPEnterData from '../otpEnterData/otpEnterData';
import { passDataSliceAcions } from '../../Redux/Slice/passDataSlice/passDataSlice';

const ForgotPassword = ({forgot}) => {
  const forgots=forgot
  const dispatch=useDispatch()
  const [captcha, setCaptcha] = useState('');
  const [phones, setPhones] = useState(null);
  const [phoneNumber,setPhoneNumber]=useState('')
const [user,setUser]=useState(null)

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const sendOtp = async (phone) => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      console.log('confirmation is', confirmation);
      setPhones(confirmation);
      setUser(confirmation)
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const initialValues = {
    phone: '',
    captcha: ''
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: resetPasswordSchema,
    onSubmit: (values, action) => {
      if (values.captcha !== captcha) {
        alert('Captcha does not match');
        return;
      }
      setPhoneNumber(values.phone)
      dispatch(passDataSliceAcions. passDatas(values.phone))
      const phone = `+91${values.phone}`;
      sendOtp(phone);
  
      console.log('reset data is', values);
      action.resetForm();
      setCaptcha(generateCaptcha());
    }
  });

  return (
    <>
      {phones?null:<div className="flex justify-center">
        <div className="w-96 rounded overflow-hidden shadow-lg mt-8">
          <form onSubmit={handleSubmit}>
            <div className='flex justify-center'>
              <div className="mt-5">
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  type="text"
                  variant="outlined"
                  className="w-80"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.phone && touched.phone)}
                />
                {errors.phone && touched.phone ? <p className='text-red-500 pl-4'>{errors.phone}</p> : null}
              </div>
            </div>
            <div className='flex justify-center'>
              <div className="mt-5">
                <TextField
                  id="outlined-basic3"
                  label="Enter Captcha Code"
                  variant="outlined"
                  className="w-80"
                  name="captcha"
                  type="text"
                  value={values.captcha}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.captcha && touched.captcha)}
                />
                {errors.captcha && touched.captcha ? <p className='text-red-500 pl-4'>{errors.captcha}</p> : null}
              </div>
              <div className='absolute pl-60 pt-8'>
                <p>{captcha}</p>
              </div>
            </div>
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
          <div id="recaptcha" className="flex justify-center mt-7 mb-9"></div>
        </div>
      </div>}
      {phones?<p className='text-center pt-2 pb-4'>Your password reset OTP has been sent to your mobile number {phoneNumber}</p>:null}
      {phones ? <OTPEnterData user={user} forgot={forgots} phoneNumber={phoneNumber} /> : null}
    </>
  );
};

export default ForgotPassword;
