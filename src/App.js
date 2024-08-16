import { Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom';
import { NavbarPage } from './Pages/NavbarPage/NavbarPage';
import { AnotherPage } from './Pages/AnotherPage/AnotherPage';
import { AddiotionalPage } from './Pages/AdditionalPage/AddiotionalPage';
import PhotoInfoPage from './Pages/PhotoInfo/PhotoInfoPage';
import AboutMePage from './Pages/AboutMePage/aboutMePage';
import { MainPage } from './Pages/MainPage/mainPage';
import { NewAndOnlinePage } from './Pages/NewAndOnlinePage/NewAndOnlinePage';
import { PersonalProfilePage } from './Pages/PersonalProfilePage/PersonalProfilePage';
import MatchPage from './Pages/MatchPage/MatchPage';
import { MatchesMainContentPage } from './Pages/MatchesMainContentPage/MatchesMainContentPage';
import { VisitorPage } from './Pages/VisitorPage/VisitorPage';
import { VisitorProfilePage } from './Pages/VisitorProfilePage/VistorProfilePage';
import { LikePage } from './Pages/LikePage/LikePage';
import { SearchPage } from './Pages/SearchPage/SearchPage';
import { NewAndOnlinePageContent } from './Components/NewAndOnlinePageContent.js/NewAndOnlinePageContent';
import MessagePage from './Pages/MessagePage/MessagePage';
import MessageDetailPage from './Pages/MessageDetailPage/MessageDetailPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNotifyUserAsync } from './Redux/Slice/getNotifySlice/getNotifySlice';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { BACKEND_BASE_URL } from './Services/api';
import { getLikeNotifyUserAsync } from './Redux/Slice/getLikeNotifySlice/getLikeNotifySlice';
import MatchPerson from './Components/common/matchPerson/matchPerson';
import VideoPage from './Pages/VideoPage/VideoPage';
import VideoUploadPage from './Pages/videoUploadPage/videoUploadPage';
import { SettingsPage } from './Pages/settingsPage/settingsPage';
import ForgotPasswordPage from './Pages/forgotPasswordPage/forgotPasswordPage';
import NewPasswordPage from './Pages/newPasswordPage/newPasswordPage';
// import ForgotUpdatePasswordResult from './Components/forgotUpdatePasswordResult/forgotUpdatePasswordResult';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import PasswordProtectedRoute from './ProtectedRoute/passwordProtectedRoute';
// import { sidebarModalActions } from './Redux/Slice/sidebarOpenSlice';
import PageNotFoundPage from './Pages/pageNotFoundPage/pageNotFoundPage';
import AdminPage from './Pages/adminPage/adminPage';
import ManageUserPage from './Pages/manageUserPage/manageUserPage';
import AdminLoginPage from './Pages/adminLoginPage/adminLoginPage';
import AdminRegistersPage from './Pages/AdminRegistersPage/AdminRegistersPage';
import MoreAllUserInfoDetailsPage from './Pages/moreAllUserInfoDetailsPage/moreAllUserInfoDetailsPage';





function CustomToast({image,name}) {
  return (
    <>
    <div className='flex  text-center gap-4 '>
      {/* <img src={BACKEND_BASE_URL+image} className='w-12 h-12 ' /> */}
      <img src={image} className='w-12 h-12 ' alt="visitorUser" />
      <p className='text-semibold'>{name} visited you</p>

    </div>
      <p className='pl-16 mt-[-1.45rem]'>Check out your visitors</p>
    </>
  );
}

function CustomLikeToast({image,name}) {
  return (
    <>
    <div className='flex  text-center gap-4 '>
      {/* <img src={BACKEND_BASE_URL+image} className='w-12 h-12 ' /> */}
      <img src={image} className='w-12 h-12 ' alt='likeUser'/>
      <p className='text-semibold'>{name} likes you</p>

    </div>
      <p className='pl-16 mt-[-1.45rem]'>Check out your Likes</p>
    </>
  );
}

function AnotherCustomLikeToast({image,name}) {
  return (
    <>
    <div className='flex  text-center gap-4 '>
      {/* <img src={BACKEND_BASE_URL+image} className='w-12 h-12 ' /> */}
      <img src={image} className='w-12 h-12 ' alt='anotherLikeUser' />
      <p className='text-semibold'>{name} also likes you</p>

    </div>
    </>
  );
}
function App() {

  const dispatch = useDispatch();
  const id = sessionStorage.getItem('userId');
  // const token =sessionStorage.getItem('loginToken')
  // console.log('token is in app',token)
useEffect(() => {
  if (id) {
    dispatch(getNotifyUserAsync(id));
    dispatch(getLikeNotifyUserAsync(id));
  }
}, [dispatch, id]);
  const getNotifyUserResponse = useSelector((state) => state.getNotifyUser.getNotifyUser.data);
  // console.log('get notify response', getNotifyUserResponse);

 const getLikeNotifyUserResponse=useSelector((state)=>state.getLikeNotifyUser.getLikeNotifyUser.data)
//  console.log('get like notify response', getLikeNotifyUserResponse);

  const lastAnotherMatchObjUser=useSelector((state)=>state.getMatchUser.getMatchUserObj.lastAnotherMatchUser)
  // console.log('last another match obj user',lastAnotherMatchObjUser)

  // const sidebarOpenSelector=useSelector((state)=>state.  sidebarOpen.sidebarModalToggle)
 const resetObj={
  resetName:'Reset Password'
 }
//  const overlayClickHandler = () => {
//   dispatch(sidebarModalActions.   sidebarVisibleToggle());
// };
  useEffect(() => {
    if (getNotifyUserResponse) {
      toast.error(<CustomToast image={getNotifyUserResponse?.images[0]}  name={getNotifyUserResponse?.firstName}/>,
      {
        autoClose: 5000, // Auto close the toast after 5 seconds,
       icon:false
      }
      );
    }
  }, [getNotifyUserResponse]);

  // useEffect(() => {
  //   if (lastAnotherMatchObjUser) {
  //     toast.error(
  //       <AnotherCustomLikeToast 
  //         image={lastAnotherMatchObjUser?.images[0]}  
  //         name={lastAnotherMatchObjUser?.firstName}
  //       />,
  //       {
  //         autoClose: 5000, // Auto close the toast after 5 seconds,
  //         icon: false
  //       }
  //     );
  //   } else if (!lastAnotherMatchObjUser && getLikeNotifyUserResponse) {
  //     toast.error(
  //       <CustomLikeToast 
  //         image={getLikeNotifyUserResponse?.images[0]}  
  //         name={getLikeNotifyUserResponse?.firstName}
  //       />,
  //       {
  //         autoClose: 5000, // Auto close the toast after 5 seconds,
  //         icon: false
  //       }
  //     );
  //   }
  // }, [lastAnotherMatchObjUser, getLikeNotifyUserResponse]);
  useEffect(()=>{
   if(getLikeNotifyUserResponse){
    toast.error(
      <CustomLikeToast 
        image={getLikeNotifyUserResponse?.images[0]}  
        name={getLikeNotifyUserResponse?.firstName}
      />,
      {
        autoClose: 5000, // Auto close the toast after 5 seconds,
        icon: false
      }
    );
   }
  },[getLikeNotifyUserResponse])

  useEffect(()=>{
    if(lastAnotherMatchObjUser){
      toast.error(
        <AnotherCustomLikeToast 
          image={lastAnotherMatchObjUser?.images[0]}  
          name={lastAnotherMatchObjUser?.firstName}
        />,
        {
          autoClose: 5000, // Auto close the toast after 5 seconds,
          icon: false
        }
      );
    }
   },[lastAnotherMatchObjUser])

  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavbarPage />
    },
    {
      path: '/anotherContent',
      element: <AnotherPage />,
      children: []
    },
    {
      path: '/step1',
      element: <AddiotionalPage resetObj={resetObj} />
    },
    {
      path: '/step2',
      element: <AboutMePage resetObj={resetObj} />
    },
    {
      path: '/step3',
      element: <VideoPage resetObj={resetObj} />
    },
    {
      path: '/step4',
      element:<VideoUploadPage  resetObj={resetObj} />
    },
    {
      path: '/step5',
      element: <PhotoInfoPage  resetObj={resetObj} />
    },
    { path: '/forgotPassword',
    element:<ForgotPasswordPage resetObj={resetObj}/>},
    { path: '/newPassword',
    element:<PasswordProtectedRoute element={<NewPasswordPage />} />},
    {path:'/data',element:<PageNotFoundPage/>},
    {
      path: '*',
      element: <Navigate to="/data" /> // Redirect to ErrorPage for unmatched paths
    },
 
    {
      path: '/mainContent',
      element: <ProtectedRoute element={<MainPage />} />,
      children: [
        { path: '', element:<NewAndOnlinePage /> },
        { path: 'personalProfile', element: <ProtectedRoute element={<PersonalProfilePage />} /> },
        { path: 'matches', element: <ProtectedRoute element={<MatchPage />} /> },
        { path: 'matchesMainContent', element: <MatchesMainContentPage /> },
        { path: 'visitors', element:<ProtectedRoute element={<VisitorPage />} />  },
        { path: 'visitorProfile', element: <ProtectedRoute element={<VisitorProfilePage />} />},
        { path: 'likeMe', element:<ProtectedRoute element={<LikePage />} />},
        { path: 'search', element:  <ProtectedRoute element={<SearchPage />} /> },
        { path: 'newMainContent', element: <ProtectedRoute element={<NewAndOnlinePageContent />} /> },
        { path: 'allMessages', element: <MessagePage /> },
        { path: 'messageDetail', element: <MessageDetailPage /> },
        { path: 'settings', element:<ProtectedRoute element={<SettingsPage />} /> },
        { path: 'accountSettings', element:<SettingsPage/> }
      ]
    },
    {
   path:'/admin/login',element:<AdminLoginPage/>
    },
    {
      path:'/admin/register',element:<AdminRegistersPage/>
       },
    {
      path: '/admin',
      element:<ProtectedRoute element={<AdminPage />}/> ,
      children:[
        { path: '', element:<ProtectedRoute element={<ManageUserPage />}/> },
        { path: 'allDetails', element:<ProtectedRoute element={<MoreAllUserInfoDetailsPage/>}/> }
      ]
     
    },
    // {
    //   path: '/mainContent',
    //   element: <MainPage />,
    //   children: [
    //     { path: '', element:<NewAndOnlinePage /> },
    //     { path: 'personalProfile', element:<PersonalProfilePage /> },
    //     { path: 'matches', element: <MatchPage /> },
    //     { path: 'matchesMainContent', element: <MatchesMainContentPage /> },
    //     { path: 'visitors', element:<VisitorPage />  },
    //     { path: 'visitorProfile', element:<VisitorProfilePage />},
    //     { path: 'likeMe', element:<LikePage />},
    //     { path: 'search', element: <SearchPage /> },
    //     { path: 'newMainContent', element:<NewAndOnlinePageContent /> },
    //     { path: 'allMessages', element: <MessagePage /> },
    //     { path: 'messageDetail', element: <MessageDetailPage /> },
    //     { path: 'settings', element:<SettingsPage /> },
    //     { path: 'accountSettings', element:<SettingsPage/> }
    //   ]
    // },
  ]);
  // const MatchPerson = () => (
  //   <motion.div
  //     initial={{ opacity: 0, scale: 0 }}
  //     animate={{ opacity: 1, scale: 1 }}
  //     transition={{
  //       duration: 1.5,
  //       ease: "easeInOut",
  //       repeat: Infinity,
  //       repeatType: "reverse",
  //     }}
  //     style={{
  //       position: "fixed",
  //       top: "10%",
  //       left: "10%",
  //       width: 100,
  //       height: 100,
  //       borderRadius: "50%",
  //       backgroundColor: "rgba(0, 150, 255, 0.5)",
  //       zIndex: 10,
  //     }}
  //   />
  // );

  return (
    <div >
      <RouterProvider router={router} />
      <ToastContainer 
       position='top-center'
       theme='colored'
      hideProgressBar="true"
      autoClose="2000"
      icon={false}
      />
    <MatchPerson/>
    {/* { sidebarOpenSelector && (
        <div className="fixed inset-0 bg-transparent z-40" onClick={overlayClickHandler}></div>
      )} */}
    </div>
  );
}

export default App;
