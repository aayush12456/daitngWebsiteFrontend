import React,{useEffect} from 'react'
import { BACKEND_BASE_URL } from '../../../Services/api'
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { loginObjectSliceAcions } from '../../../Redux/Slice/loginObjectSlice/loginObjectSlice';
import { useSelector } from 'react-redux';
import { getVisitorPlusLikeUserAsync } from '../../../Redux/Slice/getVisitorPlusLikeUserSlice/getVisitorPlusLikeUserSlice';
import { getMatchUserAsync } from '../../../Redux/Slice/getMatchUserSlice/getMatchUserSlice';
import { getVisitorPlusSkipUserAsync } from '../../../Redux/Slice/getVisitorPlusSkipUserSlice/getVisitorPlusSkipUserSlice';
export const ExtraSmallCard = ({visitor,likePerson,visitorPart}) => {
  console.log('visitor card',visitor)
  const id=sessionStorage.getItem('userId')
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const getProfile = () =>visitor|| {};
  const dob = getProfile().DOB;
  const dobBreak = dob?.split("/");
  const year = dobBreak?.[2];
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  const age = year ? currentYear - parseInt(year) : "";
 const obj={
  visitor:visitor,
  likeUser:likePerson,
  visitorPart:visitorPart
 }
  const visitorHandler=()=>{
    sessionStorage.setItem('visitor',visitor)

  navigate('/mainContent/visitorProfile',{state:obj})
  }
  useEffect(()=>{
  dispatch(loginObjectSliceAcions.loginObjectData(visitor))
  dispatch(getVisitorPlusLikeUserAsync(id))
  dispatch(getMatchUserAsync(id))
  dispatch(getVisitorPlusSkipUserAsync(id))
  },[dispatch])

  
  const visitorLikeUser=useSelector((state)=>state. getVisitorPlusLikeUser.getVisitorPlusLikeUserArray.likeUser)
  console.log('visitor like data user',visitorLikeUser)

  const matchedLikeVisitorData = visitorLikeUser?.find((likeUser) => likeUser.id === visitor.id);
  console.log('mathes like visitor data',matchedLikeVisitorData)
  
  const visitorSkipUser=useSelector((state)=>state. getVisitorSkipUser.getVisitorPlusSkipUserArray.skipUserData)
  console.log('visitor skip data user',visitorSkipUser)

 const matchedSkipVisitorData = visitorSkipUser?.find((skipUser) => skipUser.id === visitor.id);
  console.log('mathes skip visitor data',matchedSkipVisitorData)
 
  const getMatchUser=useSelector((state)=>state.getMatchUser.getMatchUserObj.matchUser)
  console.log('get match user array',getMatchUser)

  const anothergetMatchUser=useSelector((state)=>state.getMatchUser.getMatchUserObj.anotherMatchUser)
  console.log('another get match user',anothergetMatchUser)

  const getMatchPersonUser=getMatchUser?.find((matchUser)=>matchUser?.id===likePerson?.id)
  console.log('get match person user',getMatchPersonUser)

  const anothergetMatchPersonUser=anothergetMatchUser?.find((matchUser)=>matchUser?.id===likePerson?.id)
  console.log(' another get match person user',anothergetMatchPersonUser)


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
  <div>
  {/* {matchedLikeVisitorData &&matchedLikeVisitorData?.firstName &&!getMatchPersonUser?.firstName && !anothergetMatchPersonUser?.firstName&& <p className='text-lg text-white font-semibold pl-6'>Liked!</p>} */}
       {/* {matchedSkipVisitorData?.firstName && !getMatchPersonUser?.firstName && !anothergetMatchPersonUser?.firstName &&<p className='text-lg text-black font-semibold pl-6'>Skipped</p>} */}
      {getMatchPersonUser && getMatchPersonUser?.firstName  && !visitorPart &&  <p className='text-lg text-black font-semibold pl-6'>Paired</p>} 
      {anothergetMatchPersonUser && anothergetMatchPersonUser?.firstName  && !visitorPart && <p className='text-lg text-black font-semibold pl-6'>Paired</p>}   
      {matchedSkipVisitorData?.firstName &&<p className='text-lg text-black font-semibold pl-6'>Skipped</p>}
   
  </div>

</div>

    </>
  )
}