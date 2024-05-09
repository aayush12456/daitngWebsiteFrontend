import React from 'react'
import { VisitorProfile } from '../../Components/visitorProfile/visitorProfile'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getVisitorPlusLikeUserAsync } from '../../Redux/Slice/getVisitorPlusLikeUserSlice/getVisitorPlusLikeUserSlice'
import { passDataObjSliceAcions } from '../../Redux/Slice/passDataSliceObj/passDataSliceObj'
import { getMatchUserAsync } from '../../Redux/Slice/getMatchUserSlice/getMatchUserSlice'
import { getVisitorPlusSkipUserAsync } from '../../Redux/Slice/getVisitorPlusSkipUserSlice/getVisitorPlusSkipUserSlice'
export const VisitorProfilePage = () => {
  const id=sessionStorage.getItem('userId')
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getVisitorPlusLikeUserAsync(id))
    dispatch(passDataObjSliceAcions.passDataObj(matchedVisitorData))
    dispatch(getMatchUserAsync(id))
    dispatch(getVisitorPlusSkipUserAsync(id))
  },[dispatch])
  let visitor=useLocation()
  let visitorData=visitor.state
  console.log('likeUserVisitor',visitorData)
  const visitorLikeUser=useSelector((state)=>state. getVisitorPlusLikeUser.getVisitorPlusLikeUserArray.likeUser)
  console.log('visitor like data user',visitorLikeUser)
  const matchedVisitorData = visitorLikeUser?.find((likeUser) => likeUser.id === visitorData.id);
  console.log('mathed vsitor data',matchedVisitorData)

  const visitorSkipUser=useSelector((state)=>state. getVisitorSkipUser.getVisitorPlusSkipUserArray.skipUserData)
  console.log('visitor skip data user',visitorSkipUser)

  const matchedSkipVisitorData = visitorSkipUser?.find((skipUser) => skipUser.id === visitorData.visitor.id);
  console.log('mathes skip visitor data',matchedSkipVisitorData)

  const getMatchUser=useSelector((state)=>state.getMatchUser.getMatchUserObj.matchUser)
  console.log('get match user array',getMatchUser)

  const getMatchPersonUser=getMatchUser?.find((matchUser)=>matchUser?.id===visitorData?.likeUser?.id)
  console.log('get match person user',getMatchPersonUser)

  const anothergetMatchUser=useSelector((state)=>state.getMatchUser.getMatchUserObj.anotherMatchUser)
  console.log('another get match user',anothergetMatchUser)

  const anothergetMatchPersonUser=anothergetMatchUser?.find((matchUser)=>matchUser?.id===visitorData?.likeUser.id)
  console.log(' another get match person user',anothergetMatchPersonUser)

  return (
    <>
    <VisitorProfile visitor={visitorData.visitor} likeVisitorUser={matchedVisitorData} skipVisitorUser={matchedSkipVisitorData} likeUserPerson={visitorData.likeUser} getMatchUser={getMatchPersonUser} anotherGetMatchUser={ anothergetMatchPersonUser} visitorUser={visitorData.visitorPart} />
    </>
  )
}