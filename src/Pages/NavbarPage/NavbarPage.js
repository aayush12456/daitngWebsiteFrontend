import React from 'react'
import { Header } from '../../Components/common/Header/Header'
import {  Modals } from '../../Components/modal/modal'
import {  useSelector } from 'react-redux'
import { Content } from '../../Components/content/content'
export const NavbarPage = () => {
    const modalSelector=useSelector((state)=>state.modal.visibleToggle)
    const profileSelector=useSelector((state)=>state.headerModal. headerModalToggle)
    console.log('modal selector',modalSelector)
    const profileImage=sessionStorage.getItem('loginImage')
   console.log('profile',profileImage)
  
  return (
   <>
   <Header />
   <Content/>
   <div>
  {modalSelector && !profileSelector && <Modals match={modalSelector}/>}
  
   </div>
 
   </>
  )
}
