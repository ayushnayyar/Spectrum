import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import SectionHeading from '../components/SectionHeading';
import PeopleCard from '../components/people/PeopleCard';
import { Actions } from '../actions';
import '../common/people/people.scss';

const People = () => {
  const followingUsers = useSelector(
    (state) => state.requestsReducer.fetchFollowingState.following
  );
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    dispatch(Actions.fetchFollowing(user?.result._id));
  }, [dispatch]);

  return (
    <div className="People">
      <SectionHeading heading="Following"></SectionHeading>
      {followingUsers?.length ? (
        followingUsers.map((followingUser) => {
          return (
            <PeopleCard key={followingUser.id} followingUser={followingUser} />
          );
        })
      ) : (
        <h3 className="People__NoFollowers">You don&apos;t follow anyone.</h3>
      )}
    </div>
  );
};

export default People;
