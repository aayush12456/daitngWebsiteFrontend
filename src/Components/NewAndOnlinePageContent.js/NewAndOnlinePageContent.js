import React from 'react'
import { useLocation } from 'react-router-dom'
import { VisitorProfile } from '../visitorProfile/visitorProfile'
import { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { getOnlineLikeUserData } from '../../Redux/Slice/getOnlineLikeUserSlice/getOnlineLikeUserSlice'
export const NewAndOnlinePageContent = () => {
    let newData=useLocation()
    const dispatch =useDispatch()
    const id=sessionStorage.getItem('userId')
    let newAndOnlineContentData=newData.state
    // console.log('new data is',newAndOnlineContentData)
    useEffect(()=>{
      if(id){
        dispatch(getOnlineLikeUserData(id))
      }
    },[dispatch,id])
  return (
  <>
<VisitorProfile OnlineContent={newAndOnlineContentData}/>
  </>
  )
}
