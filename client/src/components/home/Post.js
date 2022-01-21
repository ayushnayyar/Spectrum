import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';

import { deletePost, likePost } from '../../actions/posts';

import Avatar from '../../assets/images/man.png';
// import Laptop from '../../assets/images/laptop.jpg';
import Like from '../../assets/icons/Like';
// import Comment from '../../assets/icons/Comment';
// import Share from '../../assets/icons/Share';
import Bin from '../../assets/icons/Bin';

import '../../common/home/post.scss';
import { deleteUserPost } from '../../actions/userPosts';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(post);

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <React.Fragment>
          <Like color={post.likes.length > 0 ? '#e72f2f' : '#282828'} />
          &nbsp;<React.Fragment>{post.likeCount}</React.Fragment>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Like />
          &nbsp;{post.likeCount}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Like color={post?.likes?.length > 0 ? '#e72f2f' : '#282828'} />
        &nbsp;{post.likeCount}
      </React.Fragment>
    );
  };

  const deleteCurrentPost = () => {
    dispatch(deletePost(post._id));
    dispatch(deleteUserPost(post._id));
  };

  return (
    <div className="Feed__Post">
      <div className="Feed__Post__Header">
        <div className="Feed__Post__Left">
          <div className="Feed__Post__Header-photo">
            <img src={Avatar} />
          </div>
          <div className="Feed__Post__Header-info">
            <div className="FeedPost__Header-info-name">{post.name}</div>
            <div className="FeedPost__Header-info-time">{post.time}</div>
          </div>
        </div>
        <div className="Feed__Post__Right">
          {user?.result._id === post.creator ? (
            <div onClick={deleteCurrentPost} className="Feed__Post__Delete">
              <Bin />
            </div>
          ) : (
            <React.Fragment />
          )}
        </div>
      </div>
      <div className="Feed__Post__Text">{post.description}</div>
      {post.selectedFile ? (
        <div className="Feed__Post__Photos">
          <div className="Feed__Post__Photo">
            <img src={post.selectedFile} />
          </div>
        </div>
      ) : (
        <React.Fragment />
      )}
      <div className="Feed__Post__Reactions">
        <div
          onClick={() => dispatch(likePost(post._id))}
          className="Feed__Post__Reaction"
        >
          <Likes />
        </div>
        {/* <div className="Feed__Post__Reaction">
          <Comment />
          Comment
        </div>
        <div className="Feed__Post__Reaction">
          <Share />
          Share
        </div> */}
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
