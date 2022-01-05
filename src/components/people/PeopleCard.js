import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeUserFromFollowing } from '../../actions/people';

import Avatar from '../../assets/images/man.png';

import '../../common/people/people-card.scss';

const PeopleCard = ({ followingUser }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleRemove = () => {
    dispatch(removeUserFromFollowing(user?.result._id, followingUser._id));
  };

  return (
    <div className="PeopleCard">
      <div className="PeopleCard__Details">
        <div className="PeopleCard__Image">
          <img src={Avatar} />
        </div>
        <div className="PeopleCard__Name">{followingUser.name}</div>
      </div>
      <div onClick={handleRemove} className="PeopleCard__Button">
        Remove
      </div>
    </div>
  );
};

PeopleCard.propTypes = {
  followingUser: PropTypes.object,
};

export default PeopleCard;
