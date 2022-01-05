import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

import Avatar from '../../assets/images/man.png';
import Home from '../../assets/icons/Home';
import People from '../../assets/icons/People';
import Profile from '../../assets/icons/Profile';
import Rewards from '../../assets/icons/Rewards';

import '../../common/home/nav-section.scss';

const NavSection = () => {
  let history = useHistory();
  const user = JSON.parse(localStorage.getItem('profile'));
  // let location = useLocation();
  const [isLinkActive, setLinkActive] = useState(history.location.pathname);

  const navLinks = [
    {
      name: 'Home',
      to: '/',
      icon: <Home color={isLinkActive === '/' ? '#000000' : '#FFFFFF'} />,
    },
    {
      name: 'People',
      to: '/people',
      icon: (
        <People color={isLinkActive === '/people' ? '#000000' : '#FFFFFF'} />
      ),
    },
    {
      name: 'Rewards',
      to: '/rewards',
      icon: (
        <Rewards color={isLinkActive === '/rewards' ? '#000000' : '#FFFFFF'} />
      ),
    },
    {
      name: 'Profile',
      to: '/profile',
      icon: (
        <Profile color={isLinkActive === '/profile' ? '#000000' : '#FFFFFF'} />
      ),
    },
  ];

  return (
    <section className="NavSection__Card">
      <div className="NavSection__ProfileCard">
        <div className="NavSection__ProfileCard-image">
          <img src={Avatar} />
        </div>
        <div className="NavSection__ProfileCard-info">
          <div className="NavSection__ProfileCard-info-name">
            {user?.result.name}
          </div>
          {/* <div className="NavSection__ProfileCard-info-username">
            @ayushnayyar
          </div> */}
        </div>
      </div>

      <div className="NavSection__Nav">
        {navLinks.map((link) => (
          <div
            onClick={() => {
              setLinkActive(link.to);
              history.replace(link.to);
              // window.history.replaceState(null, null, link.to);
            }}
            className={`${
              isLinkActive === link.to
                ? 'NavSection__Link-active'
                : 'NavSection__Link'
            }`}
            key={link.name}
          >
            <div className="NavSection__Link-box">
              <NavLink
                activeClassName="NavSection__Link-text-active"
                className="NavSection__Link-text"
                exact
                to={link.to}
              >
                <div className="NavSection__Link-inner">
                  <div className="NavSection__Link-icon">
                    <span className="NavSection__Link-icon-inner">
                      {link.icon}
                    </span>
                  </div>
                  <div className="NavSection__Link-name">{link.name}</div>
                </div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NavSection;
