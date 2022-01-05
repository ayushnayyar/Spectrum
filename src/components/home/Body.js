import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavSection from './NavSection';
import FeedSection from './FeedSection';
import PeopleSection from './PeopleSection';
import People from '../../pages/people';
import Rewards from '../../pages/rewards';
import Profile from '../../pages/profile';

import ROUTES from '../../constants/routes';

import '../../common/home/body.scss';

const Body = () => {
  const { HOME, PEOPLE, REWARDS, PROFILE } = ROUTES;

  return (
    <BrowserRouter>
      <div className="Body">
        <div className="NavSection">
          <NavSection />
        </div>

        <div className="FeedSection">
          <Switch>
            <Route exact path={HOME} component={FeedSection} />
            <Route path={PEOPLE} component={People} />
            <Route path={REWARDS} component={Rewards} />
            <Route path={PROFILE} component={Profile} />
          </Switch>
          {/* <FeedSection /> */}
        </div>
        <div className="PeopleSection">
          <PeopleSection />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Body;
