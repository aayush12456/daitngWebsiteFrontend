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
function CustomToast({image,name}) {
  return (
    <>
    <div className='flex  text-center gap-4 '>
      <img src={BACKEND_BASE_URL+image} className='w-12 h-12 ' />
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
      <img src={BACKEND_BASE_URL+image} className='w-12 h-12 ' />
      <p className='text-semibold'>{name} likes you</p>

    </div>
      <p className='pl-16 mt-[-1.45rem]'>Check out your Likes</p>
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

  useEffect(() => {
    if (getLikeNotifyUserResponse) {
      toast.error(<CustomLikeToast image={getLikeNotifyUserResponse?.images[0]}  name={getLikeNotifyUserResponse?.firstName}/>,
      {
        autoClose: 5000, // Auto close the toast after 5 seconds,
       icon:false
      }
      );
    }
  }, [getLikeNotifyUserResponse]);

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
        { path: 'messageDetail', element: <MessageDetailPage /> }
      ]
    }
  ]);

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
    
    </div>
  );
}

export default App;
