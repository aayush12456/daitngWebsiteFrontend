import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../Redux/Slice/modalSlice";
import { Outlet } from "react-router-dom";
import { headerModalActions } from "../../../Redux/Slice/headerModalSlice";

export const Header = ({ add, photo, aboutMe, personalData, loginName ,VideoUploadDatas,videoRecord }) => {
  const profileImage = sessionStorage.getItem("loginImage");
  console.log("profile", profileImage);
  console.log('personal data', personalData);
  const dispatch = useDispatch();

  const modalOpen = () => {
    console.log("open ");
    dispatch(modalActions.visibleToggle());
  };

  const profileClickHandler = () => {
    dispatch(headerModalActions.headerVisibleToggle());
  };

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg sticky top-0 z-50 bg-black text-white">
        <div className="px-6 py-4">
          <div className="flex justify-between">
            <p className="text-white">Date App</p>
            {personalData ? (
              <div className="flex">
                <img
                  src={(personalData.profile || profileImage) || profileImage}
                  className="w-20 rounded-full cursor-pointer h-16"
                  onClick={profileClickHandler}
                />
                <p className="pt-4 cursor-pointer pl-4" onClick={profileClickHandler}>
                  {personalData.name || loginName}
                </p>
              </div>
            ) : (add || photo || aboutMe || VideoUploadDatas || videoRecord) ? null : (
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
