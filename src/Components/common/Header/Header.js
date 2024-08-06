import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../Redux/Slice/modalSlice";
import { Outlet } from "react-router-dom";
import { headerModalActions } from "../../../Redux/Slice/headerModalSlice";
import hamburger from "../../../assets/HeaderIcons/hamburger.png"
import { sidebarModalActions } from "../../../Redux/Slice/sidebarOpenSlice";
import '../../../../src/styles.css'
import holdingHands from '../../../assets/HeaderIcons/holdingHands.png'
import love from '../../../assets/HeaderIcons/love.png'
export const Header = ({ add, photo, aboutMe, personalData, loginName ,VideoUploadDatas,videoRecord,forgot,reset,error }) => {
  const profileImage = sessionStorage.getItem("loginImage");
  const token =sessionStorage.getItem('loginToken')
  const registerToken =sessionStorage.getItem('registerToken')
  // console.log("profile", profileImage);
  // console.log('personal data', personalData);
  
  const dispatch = useDispatch();

  const modalOpen = () => {
    // console.log("open ");
    dispatch(modalActions.visibleToggle());
  };

  const profileClickHandler = () => {
    dispatch(headerModalActions.headerVisibleToggle());
  };
 const hamburgerClickHandler=()=>{
dispatch(sidebarModalActions.sidebarVisibleToggle())
 }
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg sticky top-0 z-50 bg-black text-white">
        <div className="px-6 py-4">
          <div className="flex justify-between">
           {token || registerToken? <img src={hamburger} className="w-5 invert md:hidden" onClick={hamburgerClickHandler} alt="hamburger"/>:null}
           <p className="text-white text-2xl flex items-center space-x-1 heading">
  <span>Apna</span>
  <div className="flex flex-col items-center ">
    <img src={holdingHands} className="w-5   " alt="Holding Hands" /> 
    <img src={love} className="w-4" alt="love" />
  </div>
  <span>Pan</span>
</p>
{/* <div className="flex">
<div>
<img src={holdingHands} className="w-9 mt-4" alt="Holding Hands" /> 
    <img src={love} className="w-6" alt="love" />
</div>
<p className="text-white text-2xl flex items-center space-x-1 ">ApnaPan</p>
</div> */}


            {personalData ? (
              <div className="flex">
                <img
                  src={(personalData.profile || profileImage) || profileImage}
                  className="hidden md:block w-20 rounded-full cursor-pointer h-16"
                  onClick={profileClickHandler}
                  alt="profile"
                />
                <p className="hidden md:block pt-4 cursor-pointer pl-4" onClick={profileClickHandler}>
                  {personalData.name || loginName}
                </p>
              </div>
            ) : (add || photo || aboutMe || VideoUploadDatas || videoRecord || forgot || reset || error) ? null : (
              <button
                className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
                onClick={modalOpen}
                type="button"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </>
  );
};
