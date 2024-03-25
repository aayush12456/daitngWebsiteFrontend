import React from 'react'
import { sidebarData } from '../../../utils/sidebarData'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const Sidebar = () => {
  const personalData=sessionStorage.getItem('loginObject')
  const personalDataObject=JSON.parse(personalData)
  const personalSignupData=sessionStorage.getItem('signupObject')
  const personalSignupDataObject=JSON.parse(personalSignupData)
   const sliderData = useSelector(
    (state) => state.passData.passDataArray
  );
  return (
<>
<div className='h-full'>

<div className=" w-64 rounded overflow-hidden shadow-lg h-screen fixed z-10 mt-20 bg-black text-white">
  <div className="px-6 py-4">
   <div className=''>
    {
        sidebarData.map(sidebar=>{
            return (
                <>
                <div className='flex gap-4 mt-11 cursor-pointer '>
                   <Link to={sidebar.link}><img src={personalDataObject?.gender==='Male'|| personalSignupDataObject?.gender==='Male'?sidebar.image:sidebar.image1} className='w-8 filter invert' /></Link> 
                   <Link to={sidebar.link}> <p className='text-lg'>{sidebar.title}</p></Link>
                </div>
                </>
            )
        })
    }
   </div>
  </div>
 
</div>
</div>
</>
  )
}
