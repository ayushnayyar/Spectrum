import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../../components/home/Post';

const Posts = () => {
  const userPosts = useSelector((state) => state.userPosts);

  return (
    <div className="ProfileSection__Posts">
      {userPosts?.length > 0 ? (
        userPosts.map((userPost) => {
          return <Post key={userPost._id} post={userPost} />;
        })
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
};

export default Posts;
