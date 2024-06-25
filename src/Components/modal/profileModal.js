import React from 'react'
import { useNavigate } from 'react-router-dom'
import { modalData } from '../../utils/modalData'
import { useDispatch } from 'react-redux'
import { addPersonalProfileModalHeadingAsync } from '../../Redux/Slice/addPersonalProfileModalHeadingSlice/addPersonalProfileModalHeadingSlice'
import { headerModalActions } from '../../Redux/Slice/headerModalSlice'
export const ProfileModal = ({addColor}) => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const id=sessionStorage.getItem('userId')
    console.log('id is ',id)
    // const logoutHandler=()=>{
    // navigate('/')
    // localStorage.clear()
    // }ddf
    const modalProfile=(modalItem)=>{
      const personalProfileModalHeadingObj={
        id:id,
        PersonalProfileModalHeading:modalItem.title
      }
    if( modalItem &&modalItem.title==='logout'){
      navigate('/')
      sessionStorage.clear()
      window.location.reload()
      
    }
    else if(modalItem && modalItem.title==='Profile'){
    navigate('/mainContent/personalProfile')
    dispatch(addPersonalProfileModalHeadingAsync(personalProfileModalHeadingObj))
    dispatch(headerModalActions.headerVisibleToggle())
    window.location.reload()
    }
    }
  return (
 <>
 <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white   ">
  <div class="px-6 py-4">
    
  {/* <p className='cursor-pointer' onClick={logoutHandler} >Logout</p> */}
  <div className='flex gap-4 '>

  {
    modalData.map(modalItem=>{
      return (
        <>
        <div className='cursor-pointer' onClick={()=>modalProfile(modalItem)} >
          <img src={modalItem.img} className='w-7 ml-3'  />
          <p className={`text-center ${addColor?.PersonalProfileModalHeading===modalItem?.title?'text-[#5394e4]':'text-black'}`}>{modalItem.title}</p>
        </div>
        </>
      )
    })
  }
  </div>
  </div>
  
</div>
 </>
  )
}
// text-[#5394e4]