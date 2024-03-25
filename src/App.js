
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NavbarPage } from './Pages/NavbarPage/NavbarPage';
import { AnotherPage } from './Pages/AnotherPage/AnotherPage';
import { AddiotionalPage } from './Pages/AdditionalPage/AddiotionalPage';
import PhotoInfoPage from './Pages/PhotoInfo/PhotoInfoPage';
import AboutMePage from './Pages/AboutMePage/aboutMePage';
import { MainPage } from './Pages/MainPage/mainPage';
import {NewAndOnlinePage } from './Pages/NewAndOnlinePage/NewAndOnlinePage';
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
function App() {

  const router= createBrowserRouter([
   {
       
    path:'/',element:<NavbarPage/>
   },
   {
       
    path:'/anotherContent',element:<AnotherPage/>,children:[
    ]
   },
   {
    path:'/step1',element:<AddiotionalPage/>
  },
  {
    path:'/step2',element:<AboutMePage/>
  },
  {
    path:'/step3',element:<PhotoInfoPage/>
  },
  {
    path:'/mainContent',
    element:<MainPage/>,
    children:[
      {path:'', element:<NewAndOnlinePage/>},
      {path:'personalProfile', element:<PersonalProfilePage/>},
      // Other child routes can be added here
      {path:'matches', element:<MatchPage/>},
      {path:'matchesMainContent',element:<MatchesMainContentPage/>},
      {path:'visitors',element:<VisitorPage/>},
      {path:'visitorProfile',element:<VisitorProfilePage/>},
      {path:'likeMe',element:<LikePage/>},
      {path:'search',element:<SearchPage/>},
      {path:'newMainContent',element:<NewAndOnlinePageContent/>},
      {path:'allMessages',element:<MessagePage/>},
      {path:'messageDetail',element:<MessageDetailPage/>}
    ]
  }


  ])
   return (
     <div>
         <RouterProvider router={router}/>
     </div>
   
   );
 }
 

export default App;
