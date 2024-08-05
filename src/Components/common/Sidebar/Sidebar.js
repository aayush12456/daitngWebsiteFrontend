import React, { useEffect, useState } from 'react';
import { sidebarData } from '../../../utils/sidebarData';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getVisitorData } from '../../../Redux/Slice/getVisitorSlice/getVisitorSlice';
import { getCounterUserAsync } from '../../../Redux/Slice/getCounterUserSlice/getCounterUserSlice';
import { deleteCounterUserAsync } from '../../../Redux/Slice/deleteCounterUserSlice/deleteCounterUserSlice';
import { getLikeCounterUserAsync } from '../../../Redux/Slice/getLikeCounterUserSlice/getLikeCounterUserSlice';
import { deleteLikeCounterUserAsync } from '../../../Redux/Slice/deleteLikeCounterUserSlice/deleteLikeCounterUserSlice';
import { addSidebarTitleColorAsync } from '../../../Redux/Slice/addSidebarTitleColorSlice/addSidebarTitleColorSlice';
import { getSidebarTitleColorAsync } from '../../../Redux/Slice/getSidebarTitleColorSlice/getSidebarTitleColorSlice';
import settings from '../../../assets/modalIcons/settings.svg'

import { useNavigate } from 'react-router-dom';
import { sidebarModalActions } from '../../../Redux/Slice/sidebarOpenSlice';

export const Sidebar = ({ sidebarOpen, personalDataProfile, loginName }) => {
  const [count, setCount] = useState(null);
  const [likeCount, setLikeCount] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const id = sessionStorage.getItem('userId');
  const profileImage = sessionStorage.getItem("loginImage");
  const signUpProfileImage=sessionStorage.getItem("profileImage")
  const personalData = JSON.parse(sessionStorage.getItem('loginObject'));
  const personalSignupData = JSON.parse(sessionStorage.getItem('signupObject'));

  // const visitorData = useSelector((state) => state.getVisitorData.getVisitorArray.data);
  const getCountUser = useSelector((state) => state.getCountUser.getCounterUser.getCount);
  const modalData = useSelector((state) => state.modal.visibleToggle);
  const deleteResponse = useSelector((state) => state.deleteCountUser.deleteCounterUser.message);
  //  const addCounterResponse=useSelector((state)=>state.addCountUser.addCounterUserData)
  //  console.log('add count response',addCounterResponse)
  const getLikeCountUser = useSelector((state) => state.getLikeCounterUser.getLikeCounterUser.getLikeCount)
  // console.log('get like count response', getLikeCountUser)
  const deleteLikeResponse = useSelector((state) => state.deleteLikeCounterUser.deleteLikeCounterUser.message)
  // console.log('delete like response', deleteLikeResponse)
  const addSidebarColorResponse = useSelector((state) => state.addSidebarTitleColor.addSidebarTitleColorData?.user)
  // console.log('add sidebar color response', addSidebarColorResponse)
  const getSidebarColorResponse = useSelector((state) => state.getSidebarTitleColor.getSidebarTitleColorObj.user)
  // console.log('get sidebar color response', getSidebarColorResponse)
  useEffect(() => {
    dispatch(getVisitorData(id));
    dispatch(getCounterUserAsync(id));
    dispatch(getLikeCounterUserAsync(id))
    dispatch(getSidebarTitleColorAsync(id))
  }, [dispatch, id]);

  useEffect(() => {
    setCount(getCountUser);
  }, [getCountUser]);

  useEffect(() => {
    setLikeCount(getLikeCountUser)
  }, [getLikeCountUser])


  const deleteCount = (title) => {
    if (title === 'Visitors') {
      dispatch(deleteCounterUserAsync(id));
    }
    else if (title === 'Likes You') {
      dispatch(deleteLikeCounterUserAsync(id))
    }
  };
  const addColor = (title, link) => {
    const sidebarColorObj = {
      id: id,
      sidebarTitle: title
    }
    dispatch(addSidebarTitleColorAsync(sidebarColorObj))

    setTimeout(() => {
      navigate(link);
      window.location.reload();
    }, 100);
    // navigate(link);

  }
  const personalProfileHandler=()=>{
    navigate('/mainContent/personalProfile')
    dispatch(sidebarModalActions.sidebarVisibleToggle())
  }
  const settingChangeHandler=()=>{
    navigate('/mainContent/settings')
    dispatch(sidebarModalActions.sidebarVisibleToggle())
  }
  return (
    <div className={`h-full ${sidebarOpen == true ? 'block' : 'hidden'} md:block`}>
      <div className={`transition-all duration-300 translate-x-0 w-64 ${sidebarOpen == true ? 'rounded-none' : 'rounded'} overflow-hidden shadow-lg h-screen fixed z-10  ${sidebarOpen == true ? 'mt-[3.51rem]' : 'mt-20'} bg-black text-white`}>
        <div className="flex justify-between">
          <div className='flex ml-3'>
            <img
              src={(personalData?.profile || profileImage) || profileImage || signUpProfileImage}
              // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s'
              className=" md:hidden w-16 rounded-full cursor-pointer h-16 mt-2"
              onClick={personalProfileHandler}
            />
            <p className="md:hidden  pt-4 cursor-pointer pl-4"   onClick={personalProfileHandler} >
              {personalData?.name || loginName || personalSignupData?.firstName}
            </p>
          </div>
          <div>

          <img src={settings} className='w-5 invert mr-7 mt-5 md:hidden'  onClick={settingChangeHandler} />
          </div>
        </div>
        <div className='px-6 py-4'>
          <div>
            {sidebarData.map((sidebar) => (
              <div key={sidebar.title} className='flex gap-4 mt-11 cursor-pointer '>
                <Link to={sidebar.link}>
                  <img
                    src={personalData?.gender === 'Male' || personalSignupData?.gender === 'Male' ? sidebar.image : sidebar.image1}
                    className='w-8 filter invert'
                    alt='Sidebar Icon'
                  />
                </Link>
                <div className='flex gap-3'>
                  <Link >
                    <p className={`text-lg hover:text-[#5394e4]  ${getSidebarColorResponse?.sidebarTitle === sidebar?.title ? 'text-[#5394e4]' : 'text-white'}`} onClick={() => { deleteCount(sidebar.title); addColor(sidebar.title, sidebar.link); }}>{sidebar.title}</p>
                  </Link>
                  <div className='flex'>
                    {(sidebar.title === 'Visitors' && getCountUser && !deleteResponse) &&
                      <div className='rounded-full bg-[red] w-7 h-7'>
                        <p className='text-white text-center'>{count}</p>
                      </div>
                    }
                    {(sidebar.title === 'Likes You' && getLikeCountUser && !deleteLikeResponse) &&

                      <div className='rounded-full bg-[red] w-7 h-7'>
                        <p className='text-white text-center'>{likeCount}</p>
                      </div>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-0  md:bg-opacity-0"></div>
      )} */}
    </div>
  );
};
