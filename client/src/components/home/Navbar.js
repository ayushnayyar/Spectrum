import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

import '../../common/home/navbar.scss';
import { LOGOUT, RESET } from '../../constants/actionTypes';
import Routes from '../../constants/routes';
import Avatar from '../../assets/images/man.png';
import Plus from '../../assets/icons/Plus.js';
import Menu from './Menu';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { LOGIN } = Routes;

  const toggleClass = () => {
    setActive(!isActive);
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    dispatch({ type: RESET });

    history.push(LOGIN);

    localStorage.clear();
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <div className="Wrapper">
      <div className="Navbar">
        <div onClick={toggleClass} className="Navbar__Link Navbar__Link-toggle">
          <Menu />
        </div>
        <nav
          className={`${isActive ? 'Navbar__ToggleShow' : null} Navbar__Items`}
        >
          <div
            onClick={() => history.push('/')}
            className="Navbar__Link Navbar-brand"
          >
            Spectrum
          </div>

          {/* <div className="Navbar__Link">Test Link 1</div>
          <div className="Navbar__Link">Test Link 2</div>
          <div className="Navbar__Link">Test Link 3</div> */}
        </nav>
        <nav
          className={`${
            isActive ? 'Navbar__ToggleShow' : null
          } Navbar__Items Navbar__Items--right`}
        >
          <div className="Navbar__Link Navbar-button">
            <button
              onClick={() => {
                console.log('Clicked');
              }}
            >
              <Plus />
              Create
            </button>
          </div>
          <div onClick={() => logout()} className="Navbar__Link Navbar-avatar">
            <img src={Avatar} />
          </div>
          {/* <div className="Navbar__Link">Right Link 2</div> */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
