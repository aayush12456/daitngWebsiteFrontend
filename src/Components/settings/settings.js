import React, { useEffect, useState } from 'react';
import rightArrow from '../../assets/personalProfileIcons/rightArrow.svg';
import SkipBlockModal from '../skipBlockModal/skipBlockModal';
import { useSelector } from 'react-redux';
import AccountSettingsModal from '../accountSettingsModal/accountSettingsModal';
import ChangePasswordModal from '../changePasswordModal/changePasswordModal';
import ManageAccountModal from '../manageAccountModal/maangeAccountModal';
import SubManageAccountModal from '../subManageAccountModal/SubManageAccountModal';
import DeactivatePlusDeleteModal from '../deactivatePlusDeleteModal/deactivatePlusDeleteModal';

export const Settings = () => {
  const [skipModalData, setSkipModalData] = useState(false);
  const [accountSettingsModalData, setAccountSettingsModalData] = useState(false);
  const [skipProfileData, setSkipProfileData] = useState({});
  const [accountSettingsData, setAccountSettingsData] = useState({});
  const skipFilterUser = useSelector((state) => state.getSkipProfile.getSkipProfileUserObj.skipFilterUser || []);
  const onlineSkipUser = useSelector((state) => state.getSkipProfile.getSkipProfileUserObj.onlineSkipUser || []);
  const skipUser = useSelector((state) => state.getSkipProfile.getSkipProfileUserObj.skipUser || []);
  // const openChangePasswordModal = useSelector((state) => state.accountSettingModal.accountSettingModalToggle);
  const [changePasswordModalData, setChangePasswordModalData] = useState(false);
  const [manageAccountModalData, setManageAccountModalData] = useState(false);
  const [subManageAccountModalData, setSubManageAccountModalData] = useState(false);
  const [deleteAccountModalData, setDeleteAccountModalData] = useState(false);
  // console.log('open change password modal', openChangePasswordModal);
  const skipProfileUser = [...skipFilterUser, ...onlineSkipUser, ...skipUser];
  console.log('skip profile user', skipProfileUser);
  const skipData = { title: 'Skipped Profiles', skipProfile: skipProfileUser };

  const skipProfile = () => {
    setSkipModalData(true);
    setSkipProfileData(skipData);
  };
  const skipCloseProfile = () => {
    setSkipModalData(false);
  };
  const accountSettings = () => {
    setAccountSettingsModalData(true);
  };
  const accountCloseSettings = () => {
    setAccountSettingsModalData(false);
  };

  const closeChangePassword = () => {
    setChangePasswordModalData(false);
  };

  const openChangePassword = () => {
    setChangePasswordModalData(true);
  };
  const manageAccountModal=()=>{
    setManageAccountModalData(true)
  }
  const closeManageAccountModal=()=>{
    setManageAccountModalData(false)
  }
  const subManageAccountModal=()=>{
    setSubManageAccountModalData(true)
  }
  const closeSubManageAccountModal=()=>{
    setSubManageAccountModalData(false)
  }
  const deletePlusDeactivateAccountModal=()=>{
    setDeleteAccountModalData(true)
  }
  const closeDeletePlusDeactivateAccountModal=()=>{
    setDeleteAccountModalData(false)
  }
  return (
    <>
      <div className="absolute pt-16 ">
        <div className="flex gap-8 text-lg text-[#838ca8] cursor-pointer">
          <p>Account</p>
          <p>My orders</p>
        </div>
      </div>
      <div className="flex justify-center mt-32">
        <div className="w-[45rem] h-[18rem] rounded overflow-hidden shadow-lg">
          <p className="text-lg text-[#757575] pl-4 pt-7 font-semibold">Skip / Blocked Profiles</p>
          <div className='w-[42rem] bg-[#f3f4f9] ml-4 mt-2 h-20 '>
            <div className="flex justify-between ">
              <p className='pl-3 pt-2 border-slate-300 cursor-pointer' onClick={skipProfile}>Skipped Profiles</p>
              <img src={rightArrow} className='w-3 mr-4 mt-2' />
            </div>
            <div className="flex justify-between ">
              <p className='pl-3 pt-2 border-slate-300 cursor-pointer'>Blocked Users</p>
              <img src={rightArrow} className='w-3 mr-4 mt-2' />
            </div>
          </div>
          <p className="text-lg text-[#757575] pl-4 pt-7 font-semibold cursor-pointer">Account</p>
          <div className='w-[42rem] bg-[#f3f4f9] ml-4 mt-2 h-10 '>
            <div className="flex justify-between ">
              <p className='pl-3 pt-2 border-slate-300 cursor-pointer' onClick={accountSettings}>Account Settings</p>
              <img src={rightArrow} className='w-3 mr-4 mt-2' />
            </div>
          </div>
        </div>
      </div>
      <SkipBlockModal skipModal={skipModalData} skipCloseModal={skipCloseProfile} skipProfile={skipProfileData} />
      <AccountSettingsModal
        accountSettingModal={accountSettingsModalData}
        accountCloseSettingModal={accountCloseSettings}
        openChangePassword={openChangePassword} // Pass the function here
        manageAccountModal={ manageAccountModal}
      />
      <ChangePasswordModal changePasswordModal={changePasswordModalData} closeChangePasswordModal={closeChangePassword} />
      <ManageAccountModal ManageAccountModal={manageAccountModalData} closeManageAccountModal={ closeManageAccountModal} openSubManageAccountModal={subManageAccountModal}deletePlusDeactivateAccountModal={ deletePlusDeactivateAccountModal}/>
      <SubManageAccountModal subManageAccountModal={subManageAccountModalData} closeSubManageAccountModal={closeSubManageAccountModal} />
      <DeactivatePlusDeleteModal deletePlusDeactivateAccountModal={deleteAccountModalData} closeDeletePlusDeactivateAccountModal={closeDeletePlusDeactivateAccountModal}/>
    </>
  );
};
