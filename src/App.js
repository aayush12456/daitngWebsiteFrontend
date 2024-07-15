import { RouterProvider, createBrowserRouter} from 'react-router-dom';
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
import { BACKEND_BASE_URL } from './Services/api';
import { getLikeNotifyUserAsync } from './Redux/Slice/getLikeNotifySlice/getLikeNotifySlice';
import MatchPerson from './Components/common/matchPerson/matchPerson';
import VideoPage from './Pages/VideoPage/VideoPage';
import VideoUploadPage from './Pages/videoUploadPage/videoUploadPage';
import { SettingsPage } from './Pages/settingsPage/settingsPage';
import ForgotPasswordPage from './Pages/forgotPasswordPage/forgotPasswordPage';
import NewPasswordPage from './Pages/newPasswordPage/newPasswordPage';
import ForgotUpdatePasswordResult from './Components/forgotUpdatePasswordResult/forgotUpdatePasswordResult';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import PasswordProtectedRoute from './ProtectedRoute/passwordProtectedRoute';



function CustomToast({image,name}) {
  return (
    <>
    <div className='flex  text-center gap-4 '>
      {/* <img src={BACKEND_BASE_URL+image} className='w-12 h-12 ' /> */}
      <img src={image} className='w-12 h-12 ' />
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
      <img src={image} className='w-12 h-12 ' />
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
      <img src={image} className='w-12 h-12 ' />
      <p className='text-semibold'>{name} also likes you</p>

    </div>
    </>
  );
}
function App() {

  const dispatch = useDispatch();
  const id = sessionStorage.getItem('userId');
  const token =sessionStorage.getItem('loginToken')
  console.log('token is in app',token)
  useEffect(() => {
    dispatch(getNotifyUserAsync(id))
    dispatch(getLikeNotifyUserAsync(id))
  }, [dispatch]);

  const getNotifyUserResponse = useSelector((state) => state.getNotifyUser.getNotifyUser.data);
  console.log('get notify response', getNotifyUserResponse);

 const getLikeNotifyUserResponse=useSelector((state)=>state.getLikeNotifyUser.getLikeNotifyUser.data)
 console.log('get like notify response', getLikeNotifyUserResponse);

  const lastAnotherMatchObjUser=useSelector((state)=>state.getMatchUser.getMatchUserObj.lastAnotherMatchUser)
  console.log('last another match obj user',lastAnotherMatchObjUser)
 const resetObj={
  resetName:'Reset Password'
 }

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
    <div>
      <RouterProvider router={router} />
      <ToastContainer 
       position='top-center'
       theme='colored'
      hideProgressBar="true"
      autoClose="2000"
      icon={false}
      />
    <MatchPerson/>
  
    </div>
  );
}

export default App;
