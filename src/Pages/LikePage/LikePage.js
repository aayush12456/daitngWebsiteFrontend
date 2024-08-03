import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getLikeUserAsync } from '../../Redux/Slice/getLikeUser/getLikeUser';
import { ExtraSmallCard } from '../../Components/common/extraSmallCard/extraSmallCard';
import { getOnlineLikeUserData } from '../../Redux/Slice/getOnlineLikeUserSlice/getOnlineLikeUserSlice';
import '../../../src/styles.css'
import animateImg from '../../assets/animateSpinner/colorSpinner.svg'
import {Helmet} from 'react-helmet'
export const LikePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const id = sessionStorage.getItem('userId');
  console.log('id is', id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLikeUserAsync(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getOnlineLikeUserData(id));
  }, [dispatch, id]);

  const likeSelector = useSelector((state) => state.getlikeUser.getLikeUserArray.likeUser) || [];
  const visitorSelector = useSelector((state) => state.getVisitorData.getVisitorArray?.visitors) || [];
  const matchSelector = useSelector((state) => state.passDataObj.passDataObj) || {};
  const onlineLikeUserSelector = useSelector((state) => state.getOnlineLikeUser.getOnlineLikeUserObj.onlineLikeUser) || [];

  console.log('online like user', onlineLikeUserSelector);
  console.log('like is', likeSelector);
  console.log('match selector', matchSelector);
  console.log('visitor selector', visitorSelector);

  const loginData = sessionStorage.getItem('loginObject');
  const loginUser = JSON.parse(loginData);

  // Combine likeSelector and onlineLikeUserSelector into a single array
  const combinedArray = [...likeSelector, ...onlineLikeUserSelector];
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
            <title>ApnaPan - Likes You</title>
        </Helmet>
    {isLoading ? (
                <div className="flex justify-center items-center h-screen -mt-28 ">
                    <img src={animateImg} className="w-28" alt="Loading..." />
                </div>
            ) :

     ( <div className='grid grid-cols-1'>
        {combinedArray.length > 0 ? (
          <div className='grid likeCard sm:grid-cols-3 gap-4 ml-2 mr-2 md:grid-cols-5 md:ml-72 md:gap-5 mt-12'>
            {combinedArray.map((item) => (
              <React.Fragment key={item.id}>
                <ExtraSmallCard visitor={item} likePerson={item} likeUserPerson={item} />
              </React.Fragment>
            ))}
          </div>
        ) : (
          <p className='text-center pt-60 text-2xl font-semibold'>No Likes are there</p>
        )}
      </div>)}
    </>
  );
};
