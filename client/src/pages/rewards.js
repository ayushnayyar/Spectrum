import React from 'react';

import RewardsCard from '../components/rewards/RewardsCard';
import RewardsEligibility from '../components/rewards/RewardsEligibility';

import '../common/rewards/rewards.scss';

const Rewards = () => {
  return (
    <div className="Rewards">
      <RewardsCard />
      <RewardsEligibility />
    </div>
  );
};

export default Rewards;
