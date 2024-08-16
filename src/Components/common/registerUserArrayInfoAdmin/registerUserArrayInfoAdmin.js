import { deleteProfileFromAdminArrayAsync } from "../../../Redux/Slice/deleteProfileFromAdminArraySlice/deleteProfileFromAdminArraySlice";
import { passDataSliceAcions } from "../../../Redux/Slice/passDataSlice/passDataSlice";
import deleteImg from "../../../assets/adminIcons/delete.png";
import { useDispatch } from "react-redux";
const RegisterUserArrayInfoAdmin=({likeItem,visitorItem,hideRemainItem,onlineLikeItem,anotherMatchUserItem,
    skipUserItem,matchUserItem, likeFilterUserItem,selfOnlineLikeUserItem,likeUserItem,openId})=>{

    const dispatch=useDispatch()
    const image=(likeItem?.images && likeItem.images[0]) || (visitorItem?.images && visitorItem?.images[0])
    || (hideRemainItem?.images && hideRemainItem?.images[0]) || (onlineLikeItem?.images && onlineLikeItem?.images[0])
    || (anotherMatchUserItem?.images && anotherMatchUserItem?.images[0]) || (skipUserItem?.images && skipUserItem?.images[0]) 
    || (matchUserItem?.images && matchUserItem?.images[0]) || (likeFilterUserItem?.images && likeFilterUserItem?.images[0])
    || (selfOnlineLikeUserItem?.images && selfOnlineLikeUserItem?.images[0]) || (likeUserItem?.images && likeUserItem?.images[0])    

    const firstName=(likeItem?.firstName) || (visitorItem?.firstName) || (hideRemainItem?.firstName) || (onlineLikeItem?.firstName)
    || (anotherMatchUserItem?.firstName) || (skipUserItem?.firstName) || (matchUserItem?.firstName) || (likeFilterUserItem?.firstName)
    || (selfOnlineLikeUserItem?.firstName) || (likeUserItem?.firstName)
        

    const email=(likeItem?.email) || (visitorItem?.email) || (hideRemainItem?.email) || (onlineLikeItem?.email) || (anotherMatchUserItem?.email)
    || (skipUserItem?.email) || (matchUserItem?.email) || (likeFilterUserItem?.email) || (selfOnlineLikeUserItem?.email) || (likeUserItem?.email)

    const phone=(likeItem?.phone) || (visitorItem?.phone) || (hideRemainItem?.phone) || (onlineLikeItem?.phone) || (anotherMatchUserItem?.phone)
    || (skipUserItem?.phone) || (matchUserItem?.phone) || (matchUserItem?.phone) || (likeFilterUserItem?.phone) || (selfOnlineLikeUserItem?.phone)
    || (likeUserItem?.phone)

    const id=(likeItem?._id) || (visitorItem?._id) || (hideRemainItem?._id) || (onlineLikeItem?._id) || (anotherMatchUserItem?._id)
    || (skipUserItem?._id) || (matchUserItem?._id) || (likeFilterUserItem?._id) || (selfOnlineLikeUserItem?._id) || (likeUserItem?._id)
    
    const deleteProfile=(id)=>{
    const deleteObj={
    id:openId,
        deleteUserId:id,
    }
    // console.log('delete obj',deleteObj)
    dispatch(deleteProfileFromAdminArrayAsync(deleteObj))
    dispatch(passDataSliceAcions.passDatas(id))
    }
return (
    <>
      <div key={id} className="w-[48rem] rounded overflow-hidden shadow-lg mt-4">
                            <div className="flex  justify-between ">
                                <img
                                    src={image}
                                    className="w-20 ml-4 mt-4 mb-2 rounded-full"
                                    alt="likeImage"
                                />
                                <p className="text-lg font-semibold pt-9">{firstName }</p>
                                <p className="text-lg font-semibold pt-9">{email}</p>
                                <p className="text-lg font-semibold pt-9">{phone}</p>
                                <img src={deleteImg} className="w-8 h-8 mt-8 cursor-pointer mr-4" alt="Delete" onClick={()=>deleteProfile(id)} />
                            </div>
                        </div>
    </>
)
}
export default RegisterUserArrayInfoAdmin