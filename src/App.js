import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
      element: <AddiotionalPage />
    },
    {
      path: '/step2',
      element: <AboutMePage />
    },
    {
      path: '/step3',
      element: <VideoPage />
    },
    {
      path: '/step4',
      element:<VideoUploadPage/>
    },
    {
      path: '/step5',
      element: <PhotoInfoPage />
    },
   
    
    {
      path: '/mainContent',
      element: <MainPage />,
      children: [
        { path: '', element: <NewAndOnlinePage /> },
        { path: 'personalProfile', element: <PersonalProfilePage /> },
        { path: 'matches', element: <MatchPage /> },
        { path: 'matchesMainContent', element: <MatchesMainContentPage /> },
        { path: 'visitors', element: <VisitorPage /> },
        { path: 'visitorProfile', element: <VisitorProfilePage /> },
        { path: 'likeMe', element: <LikePage /> },
        { path: 'search', element: <SearchPage /> },
        { path: 'newMainContent', element: <NewAndOnlinePageContent /> },
        { path: 'allMessages', element: <MessagePage /> },
        { path: 'messageDetail', element: <MessageDetailPage /> },
        { path: 'settings', element:<SettingsPage/> },
        { path: 'accountSettings', element:<SettingsPage/> }
      ]
    }
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
