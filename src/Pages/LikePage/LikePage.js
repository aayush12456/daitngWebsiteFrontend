import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getLikeUserAsync } from '../../Redux/Slice/getLikeUser/getLikeUser'
import { ExtraSmallCard } from '../../Components/common/extraSmallCard/extraSmallCard'

export const LikePage = () => {
  const id=sessionStorage.getItem('userId')
  console.log('id is',id)
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(getLikeUserAsync(id))
  },[dispatch])
  const likeSelector=useSelector((state)=>state.getlikeUser.getLikeUserArray.likeUser)
  console.log('like is',likeSelector)
  return (
  <>
  {likeSelector?.length>0?<div className='grid grid-cols-6 ml-72 gap-20 mt-12'>
{
    likeSelector?.map(likeItem=>{
        return (
            <>
           <ExtraSmallCard visitor={likeItem}/>
            </>
        )
    })
}
</div>:
<p className='text-center pt-60 text-2xl font-semibold'>No Like is there</p>
}

  </>
  )
}
