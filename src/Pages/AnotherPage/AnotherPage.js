import React ,{useEffect} from 'react'
import { AnotherContent } from '../../Components/content/anotherContent'
// import { Header } from '../../Components/common/Header/Header'
import {  useDispatch } from 'react-redux'
// import { cityCartData } from '../../Redux/Slice/citySlice'
import { useSelector } from 'react-redux'
import { comparePhoneNumberAsync } from '../../Redux/Slice/comparePhoneNumberSlice/comparePhoneNumberSlice'
import { getAllLocalUserAsync } from '../../Redux/Slice/getAllLocalUserSlice/getAllLocalUserSlice'
import {Helmet} from 'react-helmet'
export const AnotherPage = () => {
  const dispatch=useDispatch()
  const obj={
    name:'join now'
  }
    const checkDataSelector=useSelector((state)=>state. comparePhoneNumber.comparePhoneNumberObj.compareArray)
    useEffect(()=>{
dispatch(comparePhoneNumberAsync(obj))
// dispatch(getAllLocalUserAsync())
    },[dispatch])
  return (
 <>
<Helmet>
            <title>ApnaPan - Another Content</title>
        </Helmet>
 <AnotherContent checkDataArray={checkDataSelector}/>
 </>
  )
}
