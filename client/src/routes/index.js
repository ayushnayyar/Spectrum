import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import ROUTES from '../constants/routes.js';

import Home from '../pages/home.js';
import People from '../pages/people.js';
import Login from '../pages/login.js';
import Profile from '../pages/profile.js';
import Rewards from '../pages/rewards.js';

const Routes = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const { HOME, LOGIN, PEOPLE, PROFILE, REWARDS } = ROUTES;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={LOGIN} component={withRouter(Login)} />
        <Route
          path={HOME}
          render={() => {
            return user ? withRouter(Home) : withRouter(Login);
          }}
          component={withRouter(Home)}
        />
        <Route path={PEOPLE} component={withRouter(People)} />
        <Route path={PROFILE} component={withRouter(Profile)} />
        <Route path={REWARDS} component={withRouter(Rewards)} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
