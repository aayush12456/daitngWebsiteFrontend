import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getVisitorData } from '../../Redux/Slice/getVisitorSlice/getVisitorSlice'
import { ExtraSmallCard } from '../../Components/common/extraSmallCard/extraSmallCard'
import 'react-toastify/dist/ReactToastify.css';
// import { getVisitorPlusLikeUserAsync } from '../../Redux/Slice/getVisitorPlusLikeUserSlice/getVisitorPlusLikeUserSlice'
// import { getVisitorPlusSkipUserAsync } from '../../Redux/Slice/getVisitorPlusSkipUserSlice/getVisitorPlusSkipUserSlice'
export const VisitorPage = () => {
    const id=sessionStorage.getItem('userId')
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
  
  return (
<>

{visitorSelector?.length>0 ?<div className='grid grid-cols-6 ml-72 gap-20 mt-12'>
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


</>
  )
}