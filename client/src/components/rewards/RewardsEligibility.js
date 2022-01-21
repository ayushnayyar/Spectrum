import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRewards } from '../../actions/rewards';

const RewardsEligibility = () => {
  const dispatch = useDispatch();
  const rewards = useSelector((state) => state.rewards);
  const posts = useSelector((state) => state.posts);
  const user = JSON.parse(localStorage.getItem('profile'));

  let eligibilityText;

  console.log(rewards);
  console.log(posts);

  useEffect(() => {
    dispatch(getRewards(user?.result._id));
  }, [dispatch]);

  if (posts.length < 25 && user?.likeCount !== null) {
    if (posts.length > 25 && user?.likeCount < 1000) {
      let likeCount = user?.likeCount;

      if (isNaN(likeCount)) {
        likeCount = 0;
      }

      eligibilityText = `You don't meet the minimum requirements for earning rewards. You
      need ${1000 - likeCount} more likes!`;
    } else if (posts.length < 25 && user?.likeCount > 1000) {
      eligibilityText = `You don't meet the minimum requirements for earning rewards. You
        need ${25 - posts.length} more posts!`;
    } else {
      let likeCount = user?.likeCount;

      if (isNaN(likeCount)) {
        likeCount = 0;
      }

      eligibilityText = `You don't meet the minimum requirements for earning rewards. You
      need ${1000 - likeCount} more likes, and ${25 - posts.length} more
      posts!`;
    }
  } else {
    if (user?.likeCount > 25 && user?.likeCount > 1000) {
      eligibilityText =
        'You are eligible for rewards! Rewards Rate: 0.001 Kin per 1k likes.';
    }
  }

  return eligibilityText ? (
    <div className="Rewards__Eligibility">{eligibilityText}</div>
  ) : (
    <React.Fragment />
  );
};

export default RewardsEligibility;
