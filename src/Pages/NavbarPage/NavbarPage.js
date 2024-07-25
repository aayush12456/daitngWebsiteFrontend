import React,{useEffect,useState} from 'react'
import { Header } from '../../Components/common/Header/Header'
import {  Modals } from '../../Components/modal/modal'
import {  useSelector } from 'react-redux'
import { Content } from '../../Components/content/content'
import { mainContentImages } from '../../utils/mainContentData'
import SubContent from '../../Components/subContent/subContent'
import SubContentMatch from '../../Components/subContentMatch/subContentMatch'
import DatingTips from '../../Components/datingTips/datingTips'
import Footer from '../../Components/footer/footer'
export const NavbarPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const modalSelector=useSelector((state)=>state.modal.visibleToggle)
    const profileSelector=useSelector((state)=>state.headerModal. headerModalToggle)
    console.log('modal selector',modalSelector)
    const profileImage=sessionStorage.getItem('loginImage')
   console.log('profile',profileImage)
   useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mainContentImages?.length);
    }, 30000); // 60000 ms = 1 minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
}, [mainContentImages]);

  return (
   <>
   <Header />
   <div className=" ">
   {mainContentImages && mainContentImages.length > 0 ? (
                     <Content mainContentImages={mainContentImages[currentIndex]} index={currentIndex}/>
                ) : (
                    <p className="text-center pt-60 text-2xl font-semibold">No matches is there</p>
                )}

   </div>
  <SubContent/>
  <SubContentMatch/>
  <DatingTips/>
  <Footer/>
   <div>
  {modalSelector && !profileSelector && <Modals match={modalSelector}/>}
  
   </div>
 
   </>
  )
}
