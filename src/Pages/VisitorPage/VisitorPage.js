import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getVisitorData } from '../../Redux/Slice/getVisitorSlice/getVisitorSlice'
import { ExtraSmallCard } from '../../Components/common/extraSmallCard/extraSmallCard'
import 'react-toastify/dist/ReactToastify.css';
import { getDeactivateUserAsync } from '../../Redux/Slice/getDeactivateUser/getDeactivateUser'
import animateImg from '../../assets/animateSpinner/colorSpinner.svg'
// import { getVisitorPlusLikeUserAsync } from '../../Redux/Slice/getVisitorPlusLikeUserSlice/getVisitorPlusLikeUserSlice'
// import { getVisitorPlusSkipUserAsync } from '../../Redux/Slice/getVisitorPlusSkipUserSlice/getVisitorPlusSkipUserSlice'
import {Helmet} from 'react-helmet'
export const VisitorPage = () => {
    const id=sessionStorage.getItem('userId')
    const [isLoading, setIsLoading] = useState(true);
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(getVisitorData(id))
    // dispatch(getVisitorPlusLikeUserAsync(id))
    // dispatch(getVisitorPlusSkipUserAsync(id))
    },[dispatch])
    
    const visitorSelector=useSelector((state)=>state.getVisitorData.getVisitorArray?.visitors)
    // const visitorData=useSelector((state)=>state.getVisitorData.data)
    // console.log('visitor data',visitorData)
    console.log('visitors is',visitorSelector)

    // const visitorSelectorData = visitorSelector?.filter((visitorData) => // array of obj  return hoga or ye obj common hoga jo ki selfOnlineLikeUserData and  userData dono present hoga
    // onlineLikeUserSelector?.some(( onlineLikeUser) =>  onlineLikeUser.firstName === visitorData.visitor.firstName))
    // console.log('visitor selector data is',visitorSelectorData)

    //className='grid grid-cols-6 ml-72 gap-20 mt-12'
    useEffect(() => {
      // Set timeout to hide loading image after 3 seconds
      const loadingTimeout = setTimeout(() => {
          setIsLoading(false);
      }, 500); // Adjust the duration as needed (e.g., 3000 ms = 3 seconds)
  
      return () => clearTimeout(loadingTimeout); // Cleanup timeout on component unmount
  }, []);
  
  return (
<>
<Helmet>
            <title>ApnaPan - Visitors</title>
        </Helmet>
{isLoading ? (
                <div className="flex justify-center items-center h-screen -mt-28 ">
                    <img src={animateImg} className="w-28" alt="Loading..." />
                </div>
            ) :

(<div>
{visitorSelector?.length>0 ?<div className='grid likeCard sm:grid-cols-3 gap-4 ml-2 mr-2 md:grid-cols-5 md:ml-72 md:gap-5 mt-12'>
{
    visitorSelector?.map((visitorItem,index)=>{
        return (
            <>
           <ExtraSmallCard visitor={visitorItem.visitor} visitorPart={visitorItem.visitor} visitorPlusPart={visitorItem.visitor} visitedTime={visitorItem}/>
            </>
        )
    })
}
</div>:
<p className='text-center pt-60 text-2xl font-semibold'>No Visitor is there</p>}
</div>)}



</>
  )
}