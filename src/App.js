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
import { useEffect,useRef } from 'react';
import { getNotifyUserAsync } from './Redux/Slice/getNotifySlice/getNotifySlice';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from "socket.io-client";
// import { BACKEND_BASE_URL } from './Services/api';
import { getLikeNotifyUserAsync } from './Redux/Slice/getLikeNotifySlice/getLikeNotifySlice';
// import MatchPerson from './Components/common/matchPerson/matchPerson';
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
import AdminLoginUserPage from './Pages/adminLoginUserPage/adminLoginUserPage';





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
  const socketRef = useRef(null);
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
   // pehla connection hai socket ka
//    const socket = io.connect("http://localhost:4000");

//    useEffect(() => {
//     // Emit "setup" event to the server to establish the connection with the user's id
//     socket.emit("setup", id);

//     // Listen for "connected" event from the server
//     socket.on("connected", () => {
//         console.log('Socket is connected');
//     });

//     // Clean up function to disconnect the socket on component unmount
//     return () => {
//         socket.disconnect();
//     };
// }, [id]);

// ye dusra hai jo mene use kara hai 
// useEffect(() => {
//   const socket = io('http://localhost:4000', {
//       reconnection: true,           // Ensure reconnection is enabled
//       reconnectionAttempts: 10,     // Number of reconnection attempts before giving up
//       reconnectionDelay: 1000,      // Initial delay before first reconnection attempt
//       reconnectionDelayMax: 5000,   // Maximum delay between reconnection attempts
//       randomizationFactor: 0.5,      // Randomization factor for reconnection delay
//       timeout: 20000, // Increase the connection timeout to 20 seconds
//       transports: ['websocket'], // Force WebSocket transport only
//       pingTimeout: 60000, // Same timeout as server
//     pingInterval: 25000, // Same interval as server
//     // pingTimeout: 120000, // Same as server
//     // pingInterval: 10000, // Same as server
//   });

//   // Emit "setup" event to the server to establish the connection with the user's id
//   socket.emit("setup", id);

//   // Listen for connection
//   socket.on('connect', () => {
//       console.log('Connected to server');
//       console.log('Socket ID:', socket.id);
//   });

//   // Listen for disconnection
//   socket.on('disconnect', () => {
//       console.log('Disconnected from server');
//   });

//   // Additional events you might have
//   socket.on("connected", () => {
//       console.log('Socket is connected');
//   });

//   // Clean up function to disconnect the socket on component unmount
//   return () => {
//       socket.disconnect();
//   };
// }, [id]);

useEffect(() => {
  if (!socketRef.current) {
    // Initialize the socket only once
    // socketRef.current = io('http://localhost:4000', {
    //   reconnection: true,           // Ensure reconnection is enabled
    //   reconnectionAttempts: 10,     // Number of reconnection attempts before giving up
    //   reconnectionDelay: 1000,      // Initial delay before first reconnection attempt
    //   reconnectionDelayMax: 5000,   // Maximum delay between reconnection attempts
    //   randomizationFactor: 0.5,     // Randomization factor for reconnection delay
    //   timeout: 20000,               // Increase the connection timeout to 20 seconds
    //   transports: ['websocket'],    // Force WebSocket transport only
    //   pingTimeout: 60000,           // Same timeout as server
    //   pingInterval: 25000,          // Same interval as server
    // });
    socketRef.current = io('https://apnapanbackend.onrender.com', {
      reconnection: true,           // Ensure reconnection is enabled
      reconnectionAttempts: 10,     // Number of reconnection attempts before giving up
      reconnectionDelay: 1000,      // Initial delay before first reconnection attempt
      reconnectionDelayMax: 5000,   // Maximum delay between reconnection attempts
      randomizationFactor: 0.5,     // Randomization factor for reconnection delay
      timeout: 20000,               // Increase the connection timeout to 20 seconds
      transports: ['websocket'],    // Force WebSocket transport only
      pingTimeout: 60000,           // Same timeout as server
      pingInterval: 25000,          // Same interval as server
    });

    // Emit "setup" event to the server to establish the connection with the user's id
    socketRef.current.emit("setup", id);

    // Listen for connection
    socketRef.current.on('connect', () => {
      console.log('Connected to server');
      console.log('Socket ID:', socketRef.current.id);  // Log the socket ID
    });

    // Listen for disconnection
    socketRef.current.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Additional events you might have
    socketRef.current.on("connected", () => {
      console.log('Socket is connected');
    });
  }

  // Clean up function to disconnect the socket on component unmount
  return () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
  };
}, [id]);  // Only re-run if the `id` changes

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
        { path: 'allMessages', element:<ProtectedRoute element={<MessagePage/>} /> },
        { path: 'messageDetail', element:<ProtectedRoute element={<MessageDetailPage />} />},
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
        { path: 'allDetails', element:<ProtectedRoute element={<MoreAllUserInfoDetailsPage/>}/> },
        { path: 'loginUser', element:<ProtectedRoute element={<AdminLoginUserPage/>}/> }
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
    {/* <MatchPerson/> */}
    {/* { sidebarOpenSelector && (
        <div className="fixed inset-0 bg-transparent z-40" onClick={overlayClickHandler}></div>
      )} */}
    </div>
  );
}

export default App;
