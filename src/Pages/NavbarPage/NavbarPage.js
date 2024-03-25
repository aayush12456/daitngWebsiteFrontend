import React from 'react'
import { Header } from '../../Components/common/Header/Header'
import { Modal } from '../../Components/modal/modal'
import {  useSelector } from 'react-redux'
import { Content } from '../../Components/content/content'
export const NavbarPage = () => {
    const modalSelector=useSelector((state)=>state.modal.visibleToggle)
    console.log('modal selector',modalSelector)
    const profileImage=sessionStorage.getItem('loginImage')
   console.log('profile',profileImage)
  
  return (
   <>
   <Header />
   <Content/>
   <div>
  {modalSelector && <Modal/>}
  
   </div>
 
   </>
  )
}
