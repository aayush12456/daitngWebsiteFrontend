import matches from '../assets/sidebarIcons/profileMatch.png'
import girl from '../assets/sidebarIcons/girl.png'
import boy from '../assets/sidebarIcons/boy.png'
import search from '../assets/sidebarIcons/search.svg'
// import rocket from '../assets/sidebarIcons/rocket.png'
import heart from '../assets/sidebarIcons/heart.png'
import messages from '../assets/sidebarIcons/messenger.png'
import eye from '../assets/sidebarIcons/interest.png'

export const sidebarData=[
    {id:'1',image:matches,title:'Matches' ,link:'/mainContent/matches',image1:matches},
    {id:'2',image:girl,title:'New and Online',link:'/mainContent',image1:boy},
    {id:'3',image:search,title:'Search',image1:search,link:'/mainContent/search'},
    // {id:'4',image:rocket,title:'Interest Booster',image1:rocket},
    {id:'4',image:heart,title:'Likes You',image1:heart,link:'/mainContent/likeMe'},
    {id:'5',image:messages,title:'Messages',image1:messages,link:'/mainContent/allMessages'},
    {id:'6',image:eye,title:'Visitors',image1:eye,link:'/mainContent/visitors'},    
]