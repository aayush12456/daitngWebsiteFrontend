import React,{useEffect} from 'react'
import { BACKEND_BASE_URL } from '../../../Services/api'
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { loginObjectSliceAcions } from '../../../Redux/Slice/loginObjectSlice/loginObjectSlice';
import { useSelector } from 'react-redux';
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
  const visitorLikeUser=useSelector((state)=>state. getVisitorPlusLikeUser.getVisitorPlusLikeUserArray.likeUser)
  console.log('visitor like data user',visitorLikeUser)

  const matchedLikeVisitorData = visitorLikeUser?.find((likeUser) => likeUser.id === visitor.id);
  console.log('mathes like visitor data',matchedLikeVisitorData)
  
  const visitorSkipUser=useSelector((state)=>state. getVisitorSkipUser.getVisitorPlusSkipUserArray.skipUserData)
  console.log('visitor skip data user',visitorSkipUser)

 const matchedSkipVisitorData = visitorSkipUser?.find((skipUser) => skipUser.id === visitor.id);
  console.log('mathes skip visitor data',matchedSkipVisitorData)
 
  return (
    <>
   <div class="w-52 h-80  rounded-2xl overflow-hidden shadow-lg ">
  <div>
  <img src={BACKEND_BASE_URL +visitor?.images[0]} className='cursor-pointer h-80' onClick={visitorHandler}/>   
  </div>
  {/* <div className='flex gap-2 pl-6 -mt-7 cursor-pointer'>
    <p className='text-lg text-white absolute top-80 pt-28 font-semibold'  onClick={visitorHandler}>{visitor.firstName} ,</p>
    <p className='text-lg text-white absolute top-80 pt-28 pl-20 font-semibold'  onClick={visitorHandler}>{age}</p>
  </div> */}
   <div className='flex gap-2 pl-6 -mt-16 cursor-pointer '>
    <p className='text-lg text-white font-semibold'  onClick={visitorHandler}>{visitor?.firstName} ,</p>
    <p className='text-lg text-white font-semibold'  onClick={visitorHandler}>{age}</p>   
  </div>
  {matchedLikeVisitorData?.firstName?<p className='text-lg text-white font-semibold pl-6 '  >Liked!</p>:null}
  {matchedSkipVisitorData?.firstName?<p className='text-lg text-white font-semibold pl-6 '  >Skipped</p>:null}
</div>

    </>
  )
}