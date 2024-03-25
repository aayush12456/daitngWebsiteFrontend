import React ,{useEffect} from 'react'
import { AnotherContent } from '../../Components/content/anotherContent'
// import { Header } from '../../Components/common/Header/Header'
import {  useDispatch } from 'react-redux'
// import { cityCartData } from '../../Redux/Slice/citySlice'
export const AnotherPage = () => {
    // const dispatch=useDispatch()
    useEffect(()=>{
    //  dispatch(cityCartData())
     },[])
  return (
 <>

 <AnotherContent/>
 </>
  )
}
