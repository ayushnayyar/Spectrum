import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRewards } from '../../actions/rewards';

const RewardsEligibility = () => {
  const dispatch = useDispatch();
  const rewards = useSelector((state) => state.rewards);
  const user = JSON.parse(localStorage.getItem('profile'));

  let eligibilityText;

  console.log(rewards);

  useEffect(() => {
    dispatch(getRewards(user?.result._id));
  }, [dispatch]);

  if (user.result.followersCount !== null && user?.result.likeCount !== null) {
    if (user.result.followersCount > 500 && user?.result.likeCount < 1000) {
      let likeCount = user?.result.likeCount;

      if (isNaN(likeCount)) {
        likeCount = 0;
      }

      eligibilityText = `You don't meet the minimum requirements for earning rewards. You
      need ${1000 - likeCount} more likes!`;
    } else if (
      user.result.followersCount < 500 &&
      user?.result.likeCount > 1000
    ) {
      let followersCount = user?.result.followersCount;

      if (isNaN(followersCount)) {
        followersCount = user?.result.friends?.length;
      }

      eligibilityText = `You don't meet the minimum requirements for earning rewards. You
        need ${500 - followersCount} more followers!`;
    } else if (
      user.result.followersCount < 500 &&
      user.result.likeCount < 1000
    ) {
      let likeCount = user?.result.likeCount;
      let followersCount = user?.result.followersCount;

      if (isNaN(likeCount)) {
        likeCount = 0;
      }

      if (isNaN(followersCount)) {
        followersCount = user?.result.friends.length;
      }

      eligibilityText = `You don't meet the minimum requirements for earning rewards. You
      need ${1000 - likeCount} more likes, and ${500 - followersCount} more
      followers!`;
    } else if (
      user?.result.likeCount > 1000 &&
      user?.result.followersCount > 500
    ) {
      eligibilityText =
        'You are eligible for rewards! Reward rate: 1 Kin per like.';
    } else {
      let likeCount = user?.result.likeCount;
      let followersCount = user?.result.followersCount;

      if (isNaN(likeCount)) {
        likeCount = 0;
      }

      if (isNaN(followersCount)) {
        followersCount = user?.result.friends.length;
      }
      eligibilityText = `You don't meet the minimum requirements for earning rewards. You
      need ${1000 - likeCount} more likes, and ${500 - followersCount} more
      followers!`;
    }
  }

  return eligibilityText ? (
    <div className="Rewards__Eligibility">{eligibilityText}</div>
  ) : (
    <React.Fragment />
  );
};

export default RewardsEligibility;
