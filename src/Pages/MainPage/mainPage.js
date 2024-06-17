import React, { useEffect } from "react";
import { Header } from "../../Components/common/Header/Header";
import { Sidebar } from "../../Components/common/Sidebar/Sidebar";
import { ProfileModal } from "../../Components/modal/profileModal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const MainPage = () => {
  const Name = sessionStorage.getItem("name");
  const profileImage = sessionStorage.getItem("profileImage");
  const loginToken = sessionStorage.getItem("loginToken");
  const registerToken = sessionStorage.getItem("registerToken");
  // const loginemail = sessionStorage.getItem("email");
  // const loginNameWithNumbers = loginemail?.split("@")[0];
  // const loginName=loginNameWithNumbers.replace(/\d+/g, '')
  console.log("login token", loginToken);
  console.log("register token", registerToken);
  const loginObj=JSON.parse(sessionStorage.getItem('loginObject'))
  const loginName=loginObj?.firstName
  const personalProfile = {
    name: Name,
    profile: profileImage,
  };
  const profileSelector=useSelector((state)=>state.headerModal. headerModalToggle)
  const navigate = useNavigate();
  //  useEffect(() => { // token is not available then navigate to('/')
  //   if (!loginToken) {
  //     navigate('/');
  //   }
  // }, [loginToken]);
  const personalSignupData = sessionStorage.getItem("signupObject");
  const personalSignUpDataObject = JSON.parse(personalSignupData);
  console.log("personal signup", personalSignUpDataObject);
  // const visitorSelector = useSelector(
  //   (state) => state.getVisitorData.getVisitorArray.getVisitors
  // );
  // const sliderData = useSelector(
  //   (state) => state.passData.passDataArray
  // );
  // const likeSelector = useSelector(
  //   (state) => state.getlikeUser.getLikeUserArray.likeUser
  // );
  // const matchesData = useSelector(
  //   (state) => state.matchData.getMatchesArray.interestUsers
  // );
  return (
    <>
      <div className="flex  ">
        <div className='h-full'>
          <Sidebar />
        </div>
        <div className="w-full">
          <Header personalData={personalProfile} loginName={loginName} />
          <div className="flex justify-end z-10">
          <div
 
    className="fixed top-20 right-0 z-50"
>
  {profileSelector && <ProfileModal />}
</div>
          </div>
        </div>
      </div>
    </>
  );
};
