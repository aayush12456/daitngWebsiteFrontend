import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getLikeUserAsync } from '../../Redux/Slice/getLikeUser/getLikeUser';
import { ExtraSmallCard } from '../../Components/common/extraSmallCard/extraSmallCard';
import MatchPerson from '../../Components/common/matchPerson/matchPerson';

export const LikePage = () => {
  const id = sessionStorage.getItem('userId');
  console.log('id is', id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLikeUserAsync(id));
  }, [dispatch]);
  const likeSelector = useSelector((state) => state.getlikeUser.getLikeUserArray.likeUser);
  const visitorSelector = useSelector((state) => state.getVisitorData.getVisitorArray.getVisitors);
  const matchSelector = useSelector((state) => state.passDataObj.passDataObj);
  console.log('like is', likeSelector);
  console.log('match selector', matchSelector);
  const loginData = sessionStorage.getItem('loginObject');
  const loginUser = JSON.parse(loginData);

  // Filter out items present in visitorSelector from likeSelector
  const filteredLikeSelector = likeSelector?.filter((likeItem) => {
    return !visitorSelector.some((visitorItem) => visitorItem.id === likeItem.id);
  });

  return (
    <>
      {filteredLikeSelector?.length > 0 ? (
        <div className='grid grid-cols-6 ml-72 gap-20 mt-12'>
          {filteredLikeSelector.map((likeItem) => {
            return (
              <React.Fragment key={likeItem.id}>
                <ExtraSmallCard visitor={likeItem} />
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <p className='text-center pt-60 text-2xl font-semibold'>No Likes are there</p>
      )}
      {/* <MatchPerson loginUser={loginUser} matchUser={matchSelector} /> */}
    </>
  );
};
