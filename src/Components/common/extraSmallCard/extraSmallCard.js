import React,{useEffect,useState} from 'react'
import { BACKEND_BASE_URL } from '../../../Services/api'
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { loginObjectSliceAcions } from '../../../Redux/Slice/loginObjectSlice/loginObjectSlice';
import { useSelector } from 'react-redux';
import { getVisitorPlusLikeUserAsync } from '../../../Redux/Slice/getVisitorPlusLikeUserSlice/getVisitorPlusLikeUserSlice';
import { getMatchUserAsync } from '../../../Redux/Slice/getMatchUserSlice/getMatchUserSlice';
import { getVisitorPlusSkipUserAsync } from '../../../Redux/Slice/getVisitorPlusSkipUserSlice/getVisitorPlusSkipUserSlice';
import { getDeactivateUserAsync } from '../../../Redux/Slice/getDeactivateUser/getDeactivateUser';
export const ExtraSmallCard = ({visitor,likePerson,visitorPart, visitorPlusPart,visitedTime,likeUserPerson}) => {
  console.log('visitor card',visitor)
  console.log('like data',likePerson)
  console.log('online like data',likeUserPerson)
  const [user,setUser]=useState('true')
  const [likeUser,setLikeUser]=useState('false')
  const [skipUser,setSkipUser]=useState('false')
  const [watchVideo,setWatchVideo]=useState(true)
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
  visitorPart:visitorPart,
  onlineLikeUser:likeUserPerson

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
  dispatch(getDeactivateUserAsync(id))
  },[dispatch])

  
  const visitorLikeUser=useSelector((state)=>state. getVisitorPlusLikeUser.getVisitorPlusLikeUserArray.likeUser)
  console.log('visitor like data user',visitorLikeUser)


  
  const visitorSkipUser=useSelector((state)=>state. getVisitorSkipUser.getVisitorPlusSkipUserArray.skipUserData)
  console.log('visitor skip data user',visitorSkipUser)


 
  const getMatchUser=useSelector((state)=>state.getMatchUser.getMatchUserObj.matchUser)
  console.log('get match user array',getMatchUser)

  const anothergetMatchUser=useSelector((state)=>state.getMatchUser.getMatchUserObj.anotherMatchUser)
  console.log('another get match user',anothergetMatchUser)


  const anotherMatchDataResponse=useSelector((state)=>state.getMatchUser.getMatchUserObj.anotherMatchUserData)
  console.log('another match data response',anotherMatchDataResponse)

  useEffect(() => {
  
    const anothermatched = anothergetMatchUser?.some(
      (anothermatchUser) => anothermatchUser?.firstName === visitor?.firstName
    );
    if ( anothermatched) {
      setUser(false);
    }
  }, [visitor,anothergetMatchUser]);

  useEffect(() => {
       
    const anothermatchedWatch = anothergetMatchUser?.some(
      (anothermatchUser) => anothermatchUser?.firstName === visitor?.firstName
    );
    if (anothermatchedWatch) {
    setWatchVideo(false)
    }

  }, [anothergetMatchUser,visitor]);

  useEffect(() => {
  
    const Liked = visitorLikeUser?.some(
      (like) => like?.firstName === visitor?.firstName
    );
    if (Liked) {
      setLikeUser(true);
    }
  }, [visitor,visitorLikeUser]);
  useEffect(() => {
  
    const Skipped = visitorSkipUser?.some(
      (skip) => skip?.firstName === visitor?.firstName
    );
    const likeSkipUser=visitorSkipUser?.some((likeSkipData)=>likeSkipData?.firstName===likePerson?.firstName)
    // const onlineLikeSkipUser=visitorSkipUser?.some((onlineLikeSkipData)=>onlineLikeSkipData?.firstName===likeUserPerson?.firstName)
    if (Skipped || likeSkipUser ) {
      setSkipUser(true);
    }
  }, [visitor,visitorSkipUser,likePerson]);

  // useEffect(() => {
  
  //   const matchedUser = getMatchUser?.some(
  //     (matchUser) => matchUser?.firstName === likeUserPerson?.firstName
  //   );
  //   if ( matchedUser) {
  //     setUser(false);
  //   }
  // }, [getMatchUser,likeUserPerson]);
  return (
    <>
  { <div class="sm:w-52 sm:h-80 h-72   rounded-2xl overflow-hidden shadow-lg ">
  <div>
  {/* <img src={BACKEND_BASE_URL +visitor?.images[0]} className='cursor-pointer h-80' onClick={visitorHandler}/>   */}
  <img src={visitor?.images[0]} className='w-full cursor-pointer h-72 sm:h-80' onClick={visitorHandler}/>  
  </div>
  {/* <div className='flex gap-2 pl-6 -mt-7 cursor-pointer'>
    <p className='text-lg text-white absolute top-80 pt-28 font-semibold'  onClick={visitorHandler}>{visitor.firstName} ,</p>
    <p className='text-lg text-white absolute top-80 pt-28 pl-20 font-semibold'  onClick={visitorHandler}>{age}</p>
  </div> */}
   <div  className={`flex gap-2 pl-4 ${
    (likeUser && likeUser === 'false') && (skipUser && skipUser === 'false')
      ? '-mt-16'
      : '-mt-20'
  }  cursor-pointer`}>
    <p className='text-lg text-white font-semibold'  onClick={visitorHandler}>{visitor?.firstName} ,</p>
    <p className='text-lg text-white font-semibold'  onClick={visitorHandler}>{age}</p>
  </div>
   {visitedTime && user==='true' ?<p className='text-md text-white font-semibold pl-4'>Visited {visitedTime.visitedAt}</p>:null}
  <div>

      {/* {anotherMatchPersonResponse?.firstName===visitor.firstName&&  <p className='text-lg text-black font-semibold pl-6'>Paired</p>} */}
      {
  getMatchUser?.map(matchUser=>{
   return (
    <>
    {matchUser?.firstName===likePerson?.firstName &&  <p className='text-md text-white font-semibold pl-6'>Paired</p>}
    </>
   )
  })
 }
{/* {
  getMatchUser?.map(matchUser=>{
   return (
    <>
    {matchUser?.firstName===likeUserPerson?.firstName &&  <p className='text-md text-white font-semibold pl-6'>Paired</p>}
    </>
   )
  })
 } */}
{
anothergetMatchUser?.map(anotherMatchUser=>{
   return (
    <>
    {anotherMatchUser?.firstName===likePerson?.firstName &&  <p className='text-md text-white font-semibold pl-6'>Paired</p>}
    </>
   )
  })
 }

{
    visitorSkipUser?.map(visitorSkip=>{
      return(
        <>
        {visitorSkip?.firstName===visitorPart?.firstName  &&<p className='text-md text-white font-semibold pl-6'>Skipped</p>}
        </>
      )
    })
   }
{/* {
    visitorSkipUser?.map(visitorSkipData=>{
      return(
        <>
        {visitorSkipData?.firstName===likePerson?.firstName  &&<p className='text-md text-white font-semibold pl-6'>Skipped</p>}
        </>
      )
    })
   } */}
{
    visitorSkipUser?.map(visitorSkipData=>{
      return(
        <>
        {visitorSkipData?.firstName===likeUserPerson?.firstName  &&<p className='text-md text-white font-semibold pl-6'>Skipped</p>}
        </>
      )
    })
   }
{
visitorLikeUser?.map(visitorLike=>{
  
   return (
    <>
    
   { visitorLike?.firstName===visitorPart?.firstName && watchVideo &&<p className='text-md text-white font-semibold pl-4 '>Liked!</p>}
    </>
   )
  })
 }

{
anothergetMatchUser?.map(anotherMatchUserData=>{
   return (
    <>
    {anotherMatchUserData?.firstName===visitorPart?.firstName &&  <p className='text-md text-white font-semibold pl-6'>Paired</p>}
    </>
   )
  })
 }

  </div>

</div>}
    </>
  )
}