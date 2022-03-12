import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { searchUsers } from '../../api';
import { Actions } from '../../actions';

const user = JSON.parse(localStorage.getItem('profile'));

const NavbarSearch = () => {
  const limit = 5;
  const [searchText, setSearchText] = useState('');
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const dispatch = useDispatch();

  const getUsers = async () => {
    if (searchText.trim().length >= 1) {
      const response = await searchUsers(searchText, limit);
      if (response?.status === 200) {
        setSearchedUsers(response.data);
      }
    }
  };

  const handleSearchTextChange = (event) => {
    const searchTerm = event.target.value;
    setSearchText(searchTerm);
    if (searchTerm.trim() !== '' && searchText.length > 1) {
      getUsers();
    }

    if (searchTerm.trim() === '') {
      setSearchText('');
    }
  };

  useEffect(() => {
    if (searchText.trim().length <= 1) {
      setSearchedUsers([]);
    }
  }, [searchText]);

  return (
    <div className="Navbar__Search__Container">
      <input
        value={searchText}
        onChange={handleSearchTextChange}
        className="Navbar__Search"
        placeholder="Search"
        type="text"
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
      {searchedUsers.length > 0 ? (
        <div
          className={`Navbar__Search__Box ${isInputFocused ? 'show' : 'hide'}`}
        >
          {searchedUsers &&
            searchedUsers.map((searchedUser) => {
              return (
                <div
                  onClick={() => {
                    console.log('c');
                    dispatch(
                      Actions.sendFollowingRequest(user._id, searchedUser._id)
                    );
                  }}
                  className="Navbar__Search__Result"
                  key={searchedUser._id}
                >
                  {searchedUser.name}
                  <button
                    className="Navbar__Search__FollowButton"
                    type="submit"
                    onClick={() => {
                      console.log('Dispatched');
                    }}
                  >
                    Follow
                  </button>
                </div>
              );
            })}
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
};

NavbarSearch.propTypes = {
  searchedUsers: PropTypes.array,
  setSearchedUsers: PropTypes.func,
};

export default NavbarSearch;
