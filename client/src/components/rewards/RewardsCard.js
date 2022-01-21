import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import SectionHeading from '../../components/SectionHeading';
import { getRewards } from '../../actions/rewards';

const RewardsCard = () => {
  const dispatch = useDispatch();
  const rewards = useSelector((state) => state.rewards);
  const posts = useSelector((state) => state.posts);
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(getRewards(user?.result._id));
  }, [dispatch]);

  return (
    <div className="RewardsCard">
      <SectionHeading heading="Rewards" />
      <div className="RewardsCard__RewardsSection">
        <div className="RewardsCard__RewardsHeading">Token Balance</div>
        <div className="RewardsCard__Rewards">
          <div className="RewardsCard__RewardsCount">{rewards}</div>
          <div className="RewardsCard__RewardsToken">Kin</div>
        </div>
      </div>
      <div className="RewardsCard__Stats">
        <div className="RewardsCard__Stats__Posts">
          <div className="RewardsCard__Stats__Posts-heading">Posts</div>
          <div className="RewardsCard__Stats__Posts-count">{posts.length}</div>
        </div>
        <div className="RewardsCard__Stats__Likes">
          <div className="RewardsCard__Stats__Posts-heading">Likes</div>
          <div className="RewardsCard__Stats__Posts-count">
            {user?.result.likeCount > 0 ? user.result.likeCount : 0}
          </div>
        </div>
        <div className="RewardsCard__Stats__Followers">
          <div className="RewardsCard__Stats__Followers-heading">Followers</div>
          <div className="RewardsCard__Stats__Followers-count">
            {user?.result.friends.length}
          </div>
        </div>
        <div className="RewardsCard__Stats__AverageLikes">
          <div className="RewardsCard__Stats__AverageLikes-heading">
            Average Likes
          </div>
          <div className="RewardsCard__Stats__AverageLikes-count">
            {rewards / user?.result.likeCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsCard;
