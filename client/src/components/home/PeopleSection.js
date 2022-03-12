import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import FollowRequest from './FollowRequest';
import { Actions } from '../../actions';

import Avatar from '../../assets/images/man.png';

import '../../common/home/people-section.scss';

const PeopleSection = () => {
  const dispatch = useDispatch();
  const requests = useSelector(
    (state) => state.requestsReducer.fetchFollowRequestsState.requests
  );
  const user = JSON.parse(localStorage.getItem('profile'));
  const userId = user.result?._id ? user.result?._id : user.result?.googleId;

  useEffect(() => {
    dispatch(Actions.fetchFollowRequests(user?.result._id));
    console.log('Requests: ', requests);
  }, [dispatch]);

  return (
    <div className="PeopleSection__Wrapper">
      <div className="PeopleSection__Requests">
        <div className="PeopleSection__Requests-heading">
          <div className="PeopleSection__Requests-heading-text">
            Follow Requests
          </div>
        </div>
        <div className="PeopleSection__Request">
          {requests && requests.length > 0 ? (
            requests.map((friendRequest) => {
              return (
                <FollowRequest
                  key={friendRequest.id}
                  name={friendRequest.name}
                  profilePicture={Avatar}
                  id={userId}
                  friendId={friendRequest.id}
                />
              );
            })
          ) : (
            <div className="PeopleSection__Requests-empty">
              Your follow requests will show up here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeopleSection;
