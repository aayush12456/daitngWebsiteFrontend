import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  useDispatch } from 'react-redux'
import { comparePhoneNumberAsync } from '../../Redux/Slice/comparePhoneNumberSlice/comparePhoneNumberSlice'
export const Content = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const registerNow=()=>{
      
      dispatch(comparePhoneNumberAsync('joinNow'))
    navigate('/anotherContent')
    }
  return (
<>
<div className='ml-10 mt-12'>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={registerNow}>
Join Now
</button>
</div>
</>
  )
}
