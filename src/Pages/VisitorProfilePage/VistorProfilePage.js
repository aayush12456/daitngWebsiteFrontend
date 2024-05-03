import React from 'react'
import { VisitorProfile } from '../../Components/visitorProfile/visitorProfile'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getVisitorPlusLikeUserAsync } from '../../Redux/Slice/getVisitorPlusLikeUserSlice/getVisitorPlusLikeUserSlice'
import { passDataObjSliceAcions } from '../../Redux/Slice/passDataSliceObj/passDataSliceObj'
export const VisitorProfilePage = () => {
  const id=sessionStorage.getItem('userId')
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getVisitorPlusLikeUserAsync(id))
    dispatch(passDataObjSliceAcions.passDataObj(matchedVisitorData))
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

  const matchedSkipVisitorData = visitorSkipUser?.find((skipUser) => skipUser.id === visitorData.id);
  console.log('mathes skip visitor data',matchedSkipVisitorData)
  return (
    <>
    <VisitorProfile visitor={visitorData} likeVisitorUser={matchedVisitorData} skipVisitorUser={matchedSkipVisitorData} />
    </>
  )
}

