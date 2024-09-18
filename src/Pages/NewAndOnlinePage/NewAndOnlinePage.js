import React,{useState} from 'react'
import { SmallCard } from '../../Components/common/smallCard/smallCard'
import {  useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getUserData } from '../../Redux/Slice/getUserSlice/getUserSlice'
import { useSelector } from 'react-redux'
import { passDataArraySliceAcions } from '../../Redux/Slice/passDataArraySlice/passDataArraySliice'
import { getOnlineLikeUserData } from '../../Redux/Slice/getOnlineLikeUserSlice/getOnlineLikeUserSlice'
import '../../../src/styles.css'
import animateImg from '../../assets/animateSpinner/colorSpinner.svg'
import {Helmet} from 'react-helmet'
export const NewAndOnlinePage = () => {
    const dispatch=useDispatch()
    const [userArray,setUserArray]=useState([])
    const [signupuserArray,setSignupUserArray]=useState([])
    const [isLoading, setIsLoading] = useState(true);
    // const [selfOnlineLike,setSelfOnlineLike]=useState('')
    const getAllUserSelector=useSelector((state)=>state.userData.getUserArray.users)
    // console.log('getUser',getAllUserSelector)
    const email=sessionStorage.getItem('email')
    const signupEmail=sessionStorage.getItem('signupEmail')
    // console.log('signupemail',signupEmail)
    const id=sessionStorage.getItem('userId')
    // console.log('id is',id)
    useEffect(()=>{
        if(id){
            dispatch(getUserData(id))
            dispatch(getOnlineLikeUserData(id))
        }
  
    },[dispatch,id])
    const selfOnlineLikeUserSelector=useSelector((state)=>state.getOnlineLikeUser.getOnlineLikeUserObj.selfOnlineLikeUser)
    // console.log('self online like user',selfOnlineLikeUserSelector)
    useEffect(() => {
        if (getAllUserSelector && getAllUserSelector.length > 0) {
            const filteredUsers = getAllUserSelector.filter(user => user.email !== email);
            const signupFilters=getAllUserSelector.filter(signupUser=>signupUser.email!==signupEmail)
            setUserArray(filteredUsers);
            setSignupUserArray(signupFilters)
        }
    }, [getAllUserSelector, email,signupEmail]);
    // console.log('user Array is',userArray)
    // console.log('signup user Array is',signupuserArray)
     dispatch(passDataArraySliceAcions.passData(userArray))

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
            <title>ApnaPan - New and Online</title>
        </Helmet>
   {isLoading ? (
                <div className="flex justify-center items-center h-screen -mt-28 ">
                    <img src={animateImg} className="w-28" alt="Loading..." />
                </div>
            ) :

 (<div className='flex justify-center'>
    <p className='text-center font-bold text-2xl pt-6 absolute new-Text  '>New and Online</p>
    <div className='grid grid-cols-1 mt-12'>
    {
        userArray.map(userItem=>{
            return (
                <>
 <SmallCard userData={userItem}  email={email}  selfOnlineLikeUserData={selfOnlineLikeUserSelector} />
                </>
            )
        })
    }
    </div>

    <div className='grid grid-cols-1 mt-12'>
    {
        signupuserArray.map(signUpUserItem=>{
            return (
                <>
 <SmallCard  signupUserData={signUpUserItem}  signupEmail={signupEmail} selfOnlineLikeUserData={selfOnlineLikeUserSelector} />
                </>
            )
        })
    }
    </div>
 </div>)}
 </>
  )
}
