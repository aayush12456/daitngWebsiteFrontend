import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../Redux/Slice/modalSlice";
import { BACKEND_BASE_URL } from "../../../Services/api";
import { Outlet } from "react-router-dom";
export const Header = ({ add, photo, aboutMe, personalData, loginName }) => {
  const profileImage = sessionStorage.getItem("loginImage");
  console.log("profile", profileImage);
  const dispatch = useDispatch();
  const modalOpen = () => {
    console.log("open ");
    dispatch(modalActions.visibleToggle());
  };
  const profileClicHandler = () => {
    dispatch(modalActions.visibleToggle());
  };
  return (
    <>
      <div class="rounded overflow-hidden shadow-lg sticky top-0 z-50 bg-black text-white  ">
        <div class="px-6 py-4  ">
          <div className="flex justify-between">
            <p className="text-white">Date App</p>
            {personalData ? (
              <div className="flex">
                <img
                  src={
                    BACKEND_BASE_URL + (personalData.profile || profileImage) ||
                    BACKEND_BASE_URL + profileImage
                  }
                  className="w-20 rounded-full cursor-pointer h-16"
                  onClick={profileClicHandler}
                />
                <p className="pt-4 cursor-pointer pl-4" onClick={profileClicHandler}>
                  {personalData.name || loginName}
                </p>
              </div>
            ) : add || photo || aboutMe ? null : (
              <button
                class="bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
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
      <Outlet/>
      </div>
    </>
  );
};
