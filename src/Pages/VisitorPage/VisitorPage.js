import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getVisitorData } from '../../Redux/Slice/getVisitorSlice/getVisitorSlice'
import { ExtraSmallCard } from '../../Components/common/extraSmallCard/extraSmallCard'
import 'react-toastify/dist/ReactToastify.css';
import { getVisitorPlusLikeUserAsync } from '../../Redux/Slice/getVisitorPlusLikeUserSlice/getVisitorPlusLikeUserSlice'
import { getVisitorPlusSkipUserAsync } from '../../Redux/Slice/getVisitorPlusSkipUserSlice/getVisitorPlusSkipUserSlice'
export const VisitorPage = () => {
    const id=sessionStorage.getItem('userId')
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(getVisitorData(id))
    dispatch(getVisitorPlusLikeUserAsync(id))
    dispatch(getVisitorPlusSkipUserAsync(id))
    },[dispatch])
    
    const visitorSelector=useSelector((state)=>state.getVisitorData.getVisitorArray.getVisitors)
    const visitorData=useSelector((state)=>state.getVisitorData.data)
    const showData=useSelector((state)=>state.modal.modalToggle)
    console.log('visitor data',visitorData)
    console.log('visitors is',visitorSelector)
    console.log('modal',showData)
    // if(visitorData){
    //   toast.success('Visitor data updated!', {
    //     position: 'top-right',
    //     autoClose: 3000, // Close the toast after 3 seconds
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // }
    // const visitorLikeUser=useSelector((state)=>state. getVisitorPlusLikeUser.getVisitorPlusLikeUserArray.likeUser)
    // console.log('visitor like data user',visitorLikeUser)

//     const matchedVisitors = visitorSelector?.filter((visitor) =>
//     visitorLikeUser?.some((likeUser) => likeUser.id === visitor.id)
// );
// console.log('matches won data',matchedVisitors)
// const passMatchData=useSelector((state)=>state.passDataObj. passDataObj)
// console.log('pass data match',passMatchData)

  return (
<>

{visitorSelector?.length>0 ?<div className='grid grid-cols-6 ml-72 gap-20 mt-12'>
{
    visitorSelector?.map((visitorItem,index)=>{
    //  const likeUser=matchedVisitors[index]
    //   console.log('like data user',likeUser)
        return (
            <>
           <ExtraSmallCard visitor={visitorItem} />
            </>
        )
    })
}
</div>:
<p className='text-center pt-60 text-2xl font-semibold'>No Visitor is there</p>}


</>
  )
}
