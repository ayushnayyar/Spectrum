import React from 'react';
import { useSelector } from 'react-redux';

import Avatar from '../../assets/images/man.png';

import '../../common/profile/profile-card.scss';

const ProfileCard = () => {
  const userPosts = useSelector((state) => state.userPosts);
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div className="ProfileSection__ProfileCard">
      <div className="ProfileSection__ProfileCard-image">
        <img src={Avatar} />
      </div>
      <div className="ProfileSection__ProfileCard-info-section">
        <div className="ProfileSection__ProfileCard-info">
          <div className="ProfileSection__ProfileCard-info-name">
            {user?.result.name}
          </div>
          <div className="ProfileSection__ProfileCard-info-username">
            @ayushnayyar
          </div>
        </div>
        <div className="ProfileSection__ProfileCard-stats">
          <div className="ProfileSection__ProfileCard-posts">
            <div className="ProfileSection__ProfileCard-posts-heading">
              Posts
            </div>
            <div className="ProfileSection__ProfileCard-posts-count">
              {userPosts?.length > 0 ? userPosts.length : 0}
            </div>
          </div>
          <div className="ProfileSection__ProfileCard-followers">
            <div className="ProfileSection__ProfileCard-followers-heading">
              Followers
            </div>
            <div className="ProfileSection__ProfileCard-followers-count">
              {user?.result.friends.length}
            </div>
          </div>
          <div className="ProfileSection__ProfileCard-following">
            <div className="ProfileSection__ProfileCard-following-heading">
              Following
            </div>
            <div className="ProfileSection__ProfileCard-following-count">
              {user?.result.following.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
