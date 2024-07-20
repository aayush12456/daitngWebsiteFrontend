import React,{useState} from 'react'
import { SmallCard } from '../../Components/common/smallCard/smallCard'
import {  useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getUserData } from '../../Redux/Slice/getUserSlice/getUserSlice'
import { useSelector } from 'react-redux'
import { passDataArraySliceAcions } from '../../Redux/Slice/passDataArraySlice/passDataArraySliice'
import { getOnlineLikeUserData } from '../../Redux/Slice/getOnlineLikeUserSlice/getOnlineLikeUserSlice'
import '../../../src/styles.css'
export const NewAndOnlinePage = () => {
    const dispatch=useDispatch()
    const [userArray,setUserArray]=useState([])
    const [signupuserArray,setSignupUserArray]=useState([])
    // const [selfOnlineLike,setSelfOnlineLike]=useState('')
    const getAllUserSelector=useSelector((state)=>state.userData.getUserArray.users)
    console.log('getUser',getAllUserSelector)
    const email=sessionStorage.getItem('email')
    const signupEmail=sessionStorage.getItem('signupEmail')
    console.log('signupemail',signupEmail)
    const id=sessionStorage.getItem('userId')
    console.log('id is',id)
    useEffect(()=>{
    dispatch(getUserData(id))
    dispatch(getOnlineLikeUserData(id))
    },[])
    const selfOnlineLikeUserSelector=useSelector((state)=>state.getOnlineLikeUser.getOnlineLikeUserObj.selfOnlineLikeUser)
    console.log('self online like user',selfOnlineLikeUserSelector)
    useEffect(() => {
        if (getAllUserSelector && getAllUserSelector.length > 0) {
            const filteredUsers = getAllUserSelector.filter(user => user.email !== email);
            const signupFilters=getAllUserSelector.filter(signupUser=>signupUser.email!==signupEmail)
            setUserArray(filteredUsers);
            setSignupUserArray(signupFilters)
        }
    }, [getAllUserSelector, email,signupEmail]);
    console.log('user Array is',userArray)
    console.log('signup user Array is',signupuserArray)
     dispatch(passDataArraySliceAcions.passData(userArray))

 
  return (
 <>
 <p className='text-center font-bold text-2xl pt-6 absolute new-Text  '>New and Online</p>
 <SmallCard userData={userArray} signupUserData={signupuserArray} email={email} signupEmail={signupEmail} selfOnlineLikeUserData={selfOnlineLikeUserSelector} />
 </>
  )
}
