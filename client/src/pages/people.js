import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import SectionHeading from '../components/SectionHeading';
import PeopleCard from '../components/people/PeopleCard';
import { getFollowing } from '../actions/people';
import '../common/people/people.scss';

const People = () => {
  const followingUsers = useSelector((state) => state.people.following);
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    dispatch(getFollowing(user?.result._id));
  }, [dispatch]);

  return (
    <div className="People">
      <SectionHeading heading="Following"></SectionHeading>
      {followingUsers.length > 0 ? (
        followingUsers.map((followingUser) => {
          console.log(followingUser);
          return (
            <PeopleCard key={followingUser._id} followingUser={followingUser} />
          );
        })
      ) : (
        <h3 className="People__NoFollowers">You don&apos;t follow anyone.</h3>
      )}
    </div>
  );
};

export default People;
