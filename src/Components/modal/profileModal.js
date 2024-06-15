import React from 'react'
import { useNavigate } from 'react-router-dom'
import { modalData } from '../../utils/modalData'
import { useDispatch } from 'react-redux'
export const ProfileModal = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    // const logoutHandler=()=>{
    // navigate('/')
    // localStorage.clear()
    // }
    const modalProfile=(modalItem)=>{
    if( modalItem &&modalItem.title==='logout'){
      navigate('/')
      sessionStorage.clear()
      window.location.reload()
      
    }
    else if(modalItem && modalItem.title==='Profile'){
    navigate('/mainContent/personalProfile')
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
          <p className='text-center'>{modalItem.title}</p>
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
