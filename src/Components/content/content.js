import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Content = () => {
    const navigate=useNavigate()
    const registerNow=()=>{
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
