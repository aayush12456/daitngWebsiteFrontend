import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import rightArrow from '../../assets/personalProfileIcons/rightArrow.svg';
import { useDispatch } from "react-redux";


const AccountSettingsModal = ({ accountSettingModal, accountCloseSettingModal, openChangePassword,manageAccountModal, deletePlusDeactivateAccountModal }) => {
  const email = sessionStorage.getItem('email');
  const signupEmail = sessionStorage.getItem('signupEmail');
  const loginData = JSON.parse(sessionStorage.getItem('loginObject'));
  const signupData = JSON.parse(sessionStorage.getItem('signupObject'));

  const style = {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    animation: 'dropDown 1s ease-out',
    '@media (min-width: 300px) and (max-width: 350px)': {
      width: 300,
      left:"50%",
      top:"45%",
 
    },
    '@media (min-width: 350px) and (max-width: 400px)': {
      width: 350,
      left:"50%",
      top:"45%"
    },
    '@media (min-width: 400px) and (max-width: 500px)': {
      width: 400,
      left:"50%",
      top:"45%"
    },
  };

  const changePassword = () => {
    openChangePassword();
 
    accountCloseSettingModal()
  };
const manageAccount=()=>{
  manageAccountModal()
  accountCloseSettingModal()
}
  return (
    <>
      <Modal
        open={accountSettingModal}
        onClose={accountCloseSettingModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center font-semibold text-xl text-[#333]">Account Settings</p>
          <p className="pt-3 text-[#757575] text-md">My Account details</p>
          <div className="w-full rounded overflow-hidden shadow-lg mt-4">
            <div>
              <p className="pt-5 pl-2 sm:pl-5 text-md"><span className="text-[#000000]">Email:</span> <span className="pl-0 sm:pl-5">{email||signupEmail}</span></p>
              <p className="pt-5 pl-5 text-md pb-4"><span className="text-[#000000]">Mobile:</span> <span className="pl-5">{loginData?.phone|| signupData?.phone}</span></p>
            </div>
          </div>
          <p className="pt-5 text-[#757575] text-md">Account</p>
          <div className="w-full rounded overflow-hidden shadow-lg mt-4 mb-4">
            <div className="flex justify-between">
              <p className='pl-3 pt-2 border-slate-300 cursor-pointer' onClick={changePassword}>Change Password</p>
              <img src={rightArrow} className='w-3 mr-4 mt-2' alt="right-Arrow" />
            </div>
            <div className="flex justify-between mt-4 mb-4">
              <p className='pl-3 pt-2 border-slate-300 cursor-pointer' onClick={manageAccount}>Manage Account</p>
              <img src={rightArrow} className='w-3 mr-4 mt-2' alt="right-Arrow" />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AccountSettingsModal;
