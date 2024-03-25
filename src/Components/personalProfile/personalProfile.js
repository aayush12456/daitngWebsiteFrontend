import React, { useState } from "react";
import { BACKEND_BASE_URL } from "../../Services/api";
import leftArrow from "../../assets/personalProfileIcons/leftArrow.svg";
import rightArrow from "../../assets/personalProfileIcons/rightArrow.svg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,

  p: 4,
};
export const PersonalProfile = ({
  personalProfile,
  personalSignupProfile,
  matchesMainContent,
}) => {
  const getProfile = () =>
    personalProfile ||
    personalSignupProfile ||
    matchesMainContent ||

    {};
  const dob = getProfile().DOB;
  const dobBreak = dob?.split("/");
  const year = dobBreak?.[2];
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  const age = year ? currentYear - parseInt(year) : "";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? getProfile().images?.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (getProfile().images?.length || 0) - 1 ? 0 : prevIndex + 1
    );
  };

  const getImageUrl = () => {
    return BACKEND_BASE_URL + (getProfile().images?.[currentImageIndex] || "");
  };
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
   
  };
  return (
    <>
      <div className="flex justify-center mt-10">
        <div class=" w-[50rem] rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4  ">
            <div className="flex justify-between bg-black">
              <img
                src={leftArrow}
                className="w-5 filter invert cursor-pointer "
                onClick={handleLeftArrowClick}
              />
              <div className=" flex justify-center ">
                <img src={getImageUrl()} className="w-48 cursor-pointer"  onClick={handleOpen} />
              </div>
              <img
                src={rightArrow}
                className="w-5 filter invert cursor-pointer"
                onClick={handleRightArrowClick}
              />
            </div>
            <div className="flex gap-0">
              <p className="pl-5 pt-4 text-lg font-semibold">
                {personalProfile && personalProfile.firstName
                  ? personalProfile.firstName
                  : personalSignupProfile && personalSignupProfile.firstName
                  ? personalSignupProfile.firstName
                  : matchesMainContent && matchesMainContent.firstName
                  ? matchesMainContent.firstName
                  : null}
                ,
              </p>
              <p className="pl-3 pt-4 text-lg text-[#333] font-semibold ">
                {age},
              </p>
              <p className="text-lg pt-4 pl-3 text-[#333] font-semibold">
                {personalProfile && personalProfile.city
                  ? personalProfile.city
                  : personalSignupProfile && personalSignupProfile.city
                  ? personalSignupProfile.city
                  : matchesMainContent && matchesMainContent.city
                  ? matchesMainContent.city
                  : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Relationship status</p>
              <p className="text-lg pt-1 font-semibold">
                {personalProfile && personalProfile.relationship
                  ? personalProfile.relationship
                  : personalSignupProfile && personalSignupProfile.relationship
                  ? personalSignupProfile.relationship
                  : matchesMainContent && matchesMainContent.relationship
                  ? matchesMainContent.relationship
                  : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">I'm looking for</p>
              <p className="text-lg pt-1 font-semibold">
                {personalProfile && personalProfile.looking
                  ? personalProfile.looking
                  : personalSignupProfile && personalSignupProfile.looking
                  ? personalSignupProfile.looking
                  : matchesMainContent && matchesMainContent.looking
                  ? matchesMainContent.looking
                  : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Interests</p>
              <div className="flex gap-4  ">
                {personalProfile
                  ? personalProfile.interest.map((personalInterest) => {
                      return (
                        <>
                          <div className="bg-slate-200 rounded mt-3">
                            <p className="text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575] ">
                              {personalInterest}
                            </p>
                          </div>
                        </>
                      );
                    })
                  : null}
                {personalSignupProfile
                  ? personalSignupProfile.interest.map((personalInterest) => {
                      return (
                        <>
                          <div className="bg-slate-200 rounded mt-3">
                            <p className="text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575] ">
                              {personalInterest}
                            </p>
                          </div>
                        </>
                      );
                    })
                  : null}

                {matchesMainContent
                  ? matchesMainContent.interest.map((mainContentInterest) => {
                      return (
                        <>
                          <div className="bg-slate-200 rounded mt-3">
                            <p className="text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575] ">
                              {mainContentInterest}
                            </p>
                          </div>
                        </>
                      );
                    })
                  : null}
              </div>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575] ">About me</p>
              <p className="text-lg pt-1 text-black font-semibold">
                {personalProfile && personalProfile.aboutUser
                  ? personalProfile.aboutUser
                  : personalSignupProfile && personalSignupProfile.aboutUser
                  ? personalSignupProfile.aboutUser
                  : matchesMainContent && matchesMainContent.aboutUser
                  ? matchesMainContent.aboutUser
                  : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Education</p>
              <p className="text-lg pt-1 font-semibold">
                {personalProfile && personalProfile.education
                  ? personalProfile.education
                  : personalSignupProfile && personalSignupProfile.education
                  ? personalSignupProfile.education
                  : matchesMainContent && matchesMainContent.education
                  ? matchesMainContent.education
                  : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Profession</p>
              <p className="text-lg pt-1 font-semibold">
                {personalProfile && personalProfile.profession
                  ? personalProfile.profession
                  : personalSignupProfile && personalSignupProfile.profession
                  ? personalSignupProfile.profession
                  : matchesMainContent && matchesMainContent.profession
                  ? matchesMainContent.profession
                  : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Drinking</p>
              <p className="text-lg pt-1 font-semibold">
                {personalProfile && personalProfile.drinking
                  ? personalProfile.drinking
                  : personalSignupProfile && personalSignupProfile.drinking
                  ? personalSignupProfile.drinking
                  : matchesMainContent && matchesMainContent.drinking
                  ? matchesMainContent.drinking
                  : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Smoking</p>
              <p className="text-lg pt-1 font-semibold">
                {personalProfile && personalProfile.smoking
                  ? personalProfile.smoking
                  : personalSignupProfile && personalSignupProfile.smoking
                  ? personalSignupProfile.smoking
                  : matchesMainContent && matchesMainContent.smoking
                  ? matchesMainContent.smoking
                  : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Eating</p>
              <p className="text-lg pt-1 font-semibold">
                {personalProfile && personalProfile.eating
                  ? personalProfile.eating
                  : personalSignupProfile && personalSignupProfile.eating
                  ? personalSignupProfile.eating
                  : matchesMainContent && matchesMainContent.eating
                  ? matchesMainContent.eating
                  : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">Zodiac sign</p>
              <p className="text-lg pt-1 font-semibold">
                {personalProfile && personalProfile.zodiac
                  ? personalProfile.zodiac
                  : personalSignupProfile && personalSignupProfile.zodiac
                  ? personalSignupProfile.zodiac
                  : matchesMainContent && matchesMainContent.zodiac
                  ? matchesMainContent.zodiac
                  : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <p className="text-lg text-[#757575]">languages I know</p>
              <p className="text-lg pt-1 font-semibold">
                {personalProfile && personalProfile.language
                  ? personalProfile.language
                  : personalSignupProfile && personalSignupProfile.language
                  ? personalSignupProfile.language
                  : matchesMainContent && matchesMainContent.language
                  ? matchesMainContent.language
                  : null}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="flex justify-center">
                <img src={getImageUrl()}  />
              </div>
  
              </Box>
          </Modal>
    </>
  );
};
