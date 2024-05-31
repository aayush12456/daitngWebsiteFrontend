import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { BACKEND_BASE_URL } from "../../Services/api";
import { useState } from "react";
import leftArrow from "../../assets/personalProfileIcons/leftArrow.svg";
import rightArrow from "../../assets/personalProfileIcons/rightArrow.svg";

const MatchesModal = ({ modalData, match, handleCloses }) => {
  console.log('modal data', modalData)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };

  const getProfile = () =>
    modalData || {};

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

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const dob = getProfile().DOB;
  const dobBreak = dob?.split("/");
  const year = dobBreak?.[2];
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  const age = year ? currentYear - parseInt(year) : "";

  return (
    <>
      <Modal
        open={match}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between bg-black">
            <img
              src={leftArrow}
              className="w-5 filter invert cursor-pointer"
              onClick={handleLeftArrowClick}
            />
            <div className="flex justify-center">
              <img
                src={getImageUrl()}
                className="w-48 h-48 object-cover cursor-pointer"
              />
            </div>
            <img
              src={rightArrow}
              className="w-5 filter invert cursor-pointer"
              onClick={handleRightArrowClick}
            />
          </div>
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            <div className="flex justify-between">
              <div className="flex gap-0">
                <p className="pl-5 pt-4 text-lg font-semibold">
                  {modalData?.firstName},
                </p>
                <p className="pl-3 pt-4 text-lg text-[#333] font-semibold">
                  {age},
                </p>
                <p className="text-lg pt-4 pl-3 text-[#333] font-semibold">
                  {modalData?.city}
                </p>
              </div>
            </div>
            <div className="pl-5 pt-3">
              <p className="text-lg text-[#757575]">Relationship status</p>
              <p className="text-lg pt-1 font-semibold">
                {modalData?.relationship}
              </p>
            </div>
            <div className="pl-5 pt-3">
              <p className="text-lg text-[#757575]">I'm looking for</p>
              <p className="text-lg pt-1 font-semibold">
                {modalData?.looking}
              </p>
            </div>
            <div className="pl-5 pt-3">
              <p className="text-lg text-[#757575]">Interests</p>
              <div className="grid grid-cols-5 gap-3">
                {modalData.interest?.map(modalInterest => {
                  return (
                    <div className="bg-slate-200 rounded mt-3" key={modalInterest}>
                      <p className="text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575]">
                        {modalInterest}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pl-5 pt-3">
              <p className="text-lg text-[#757575]">About me</p>
              <p className="text-lg pt-1 font-semibold">
                {modalData?.aboutUser}
              </p>
            </div>
            <div className="pl-5 pt-3">
              <p className="text-lg text-[#757575]">Education</p>
              <p className="text-lg pt-1 font-semibold">
                {modalData?.education}
              </p>
            </div>
            <div className="pl-5 pt-3">
              <p className="text-lg text-[#757575]">Profession</p>
              <p className="text-lg pt-1 font-semibold">
                {modalData?.profession}
              </p>
            </div>
            <div className="pl-5 pt-3">
              <p className="text-lg text-[#757575]">Drinking</p>
              <p className="text-lg pt-1 font-semibold">
                {modalData?.drinking}
              </p>
            </div>
            <div className="pl-5 pt-3">
              <p className="text-lg text-[#757575]">Smoking</p>
              <p className="text-lg pt-1 font-semibold">
                {modalData?.smoking}
              </p>
            </div>
            <div className="pl-5 pt-3">
              <p className="text-lg text-[#757575]">Eating</p>
              <p className="text-lg pt-1 font-semibold">
                {modalData?.eating}
              </p>
            </div>
            <div className="pl-5 pt-3">
              <p className="text-lg text-[#757575]">Zodiac sign</p>
              <p className="text-lg pt-1 font-semibold">
                {modalData?.zodiac}
              </p>
            </div>
            <div className="pl-5 pt-3">
              <p className="text-lg text-[#757575]">Languages I know</p>
              <p className="text-lg pt-1 font-semibold">
                {modalData?.language}
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default MatchesModal;
