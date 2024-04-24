import React,{useEffect} from 'react'
import { BACKEND_BASE_URL } from '../../../Services/api'
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { loginObjectSliceAcions } from '../../../Redux/Slice/loginObjectSlice/loginObjectSlice';
export const ExtraSmallCard = ({visitor}) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const getProfile = () =>visitor|| {};
  const dob = getProfile().DOB;
  const dobBreak = dob?.split("/");
  const year = dobBreak?.[2];
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  const age = year ? currentYear - parseInt(year) : "";

  const visitorHandler=()=>{
    sessionStorage.setItem('visitor',visitor)
  navigate('/mainContent/visitorProfile',{state:visitor})
  }
  useEffect(()=>{
  dispatch(loginObjectSliceAcions.loginObjectData(visitor))
  },[])
  return (
    <>
   <div class="w-52 h-80  rounded-2xl overflow-hidden shadow-lg ">
  <div>
  <img src={BACKEND_BASE_URL +visitor.images[0]} className='cursor-pointer h-80' onClick={visitorHandler}/>   
  </div>
  {/* <div className='flex gap-2 pl-6 -mt-7 cursor-pointer'>
    <p className='text-lg text-white absolute top-80 pt-28 font-semibold'  onClick={visitorHandler}>{visitor.firstName} ,</p>
    <p className='text-lg text-white absolute top-80 pt-28 pl-20 font-semibold'  onClick={visitorHandler}>{age}</p>
  </div> */}
   <div className='flex gap-2 pl-6 -mt-16 cursor-pointer'>
    <p className='text-lg text-white font-semibold'  onClick={visitorHandler}>{visitor.firstName} ,</p>
    <p className='text-lg text-white font-semibold'  onClick={visitorHandler}>{age}</p>
  </div>
</div>
    </>
  )
}