import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  acceptFriendRequest,
  declineFriendRequest,
} from '../../actions/requests.js';
import '../../common/home/follow-request.scss';

const FollowRequest = ({ name, profilePicture, id, friendId }) => {
  const dispatch = useDispatch();

  const acceptRequest = () => {
    console.log(friendId);
    dispatch(acceptFriendRequest(id, friendId));
  };

  const declineRequest = () => {
    dispatch(declineFriendRequest(id, friendId));
  };

  return (
    <div className="FollowRequest__Card">
      <div className="FollowRequest__Content">
        <div className="FollowRequest__Image">
          <img src={profilePicture} />
        </div>
        <div className="FollowRequest__Text">
          <span className="FollowRequest__Name">{name}</span>
          &nbsp;wants to follow you
        </div>
      </div>
      <div className="FollowRequest__Buttons">
        <div onClick={acceptRequest} className="FollowRequest__Buttons-accept">
          Accept
        </div>
        <div
          onClick={declineRequest}
          className="FollowRequest__Buttons-decline"
        >
          Decline
        </div>
      </div>
    </div>
  );
};

FollowRequest.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  friendId: PropTypes.string.isRequired,
};

export default FollowRequest;
