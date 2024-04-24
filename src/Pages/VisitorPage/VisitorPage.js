import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getVisitorData } from '../../Redux/Slice/getVisitorSlice/getVisitorSlice'
import Matches from '../../Components/matches/matches'
import { ExtraSmallCard } from '../../Components/common/extraSmallCard/extraSmallCard'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const VisitorPage = () => {
    const id=sessionStorage.getItem('userId')
    console.log('id is',id)
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(getVisitorData(id))
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
  return (
<>

{visitorSelector?.length>0?<div className='grid grid-cols-6 ml-72 gap-20 mt-12'>
{
    visitorSelector?.map(visitorItem=>{
        return (
            <>
           <ExtraSmallCard visitor={visitorItem}/>
            </>
        )
    })
}
</div>:
<p className='text-center pt-60 text-2xl font-semibold'>No Visitor is there</p>}

</>
  )
}
