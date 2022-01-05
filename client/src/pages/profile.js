import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Posts from '../components/profile/Posts';
import ProfileCard from '../components/profile/ProfileCard';
import SectionHeading from '../components/SectionHeading';
import { getUserPosts } from '../actions/userPosts';

import '../common/profile/profile-page.scss';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPosts(user?.result._id));
  }, [dispatch]);

  return (
    <div className="Profile__Card">
      <SectionHeading heading="Profile" />
      <div className="Profile__Card__Profile">
        <ProfileCard />
      </div>
      <SectionHeading heading="Posts" />
      <div className="Profile__Card__Posts">
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
