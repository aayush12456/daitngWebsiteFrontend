
import React from 'react'
import { VisitorProfile } from '../../Components/visitorProfile/visitorProfile'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getVisitorPlusLikeUserAsync } from '../../Redux/Slice/getVisitorPlusLikeUserSlice/getVisitorPlusLikeUserSlice'
// import { passDataObjSliceAcions } from '../../Redux/Slice/passDataSliceObj/passDataSliceObj'
import { getMatchUserAsync } from '../../Redux/Slice/getMatchUserSlice/getMatchUserSlice'
import { getVisitorPlusSkipUserAsync } from '../../Redux/Slice/getVisitorPlusSkipUserSlice/getVisitorPlusSkipUserSlice'
// import MatchPerson from '../../Components/common/matchPerson/matchPerson'

export const VisitorProfilePage = () => {
  const id=sessionStorage.getItem('userId')
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getVisitorPlusLikeUserAsync(id))
    dispatch(getMatchUserAsync(id))
    dispatch(getVisitorPlusSkipUserAsync(id))
  },[dispatch])
  let visitor=useLocation()
  let visitorData=visitor.state
  console.log('likeUserVisitor',visitorData)
  const visitorLikeUser=useSelector((state)=>state. getVisitorPlusLikeUser.getVisitorPlusLikeUserArray.likeUser)
  console.log('visitor like data user',visitorLikeUser)
 

  const visitorSkipUser=useSelector((state)=>state. getVisitorSkipUser.getVisitorPlusSkipUserArray.skipUserData)
  console.log('visitor skip data user',visitorSkipUser)



  const getMatchUser=useSelector((state)=>state.getMatchUser.getMatchUserObj.matchUser)
  console.log('get match user array',getMatchUser)

  
  const matchedUser = getMatchUser?.some(user => user?.id === visitorData?.likeUser?.id);
  console.log('matched user is',matchedUser)

  const anothergetMatchUser=useSelector((state)=>state.getMatchUser.getMatchUserObj.anotherMatchUser)
  console.log('another get match user',anothergetMatchUser)



  const anotherMatchDataResponse=useSelector((state)=>state.getMatchUser.getMatchUserObj.anotherMatchUserData)
  console.log('another match data response',anotherMatchDataResponse)


  return (
    <>
     
    <VisitorProfile visitor={visitorData.visitor} likeUserPerson={visitorData.likeUser} visitorUser={visitorData.visitorPart} matchedUser={matchedUser}/>

    {/* <MatchPerson/> */}
    </>
  )
}
