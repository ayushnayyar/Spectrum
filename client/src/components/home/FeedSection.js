import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post';
import SectionHeading from '../SectionHeading';
import CreatePost from './CreatePost';

import '../../common/home/feed.scss';

const FeedSection = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <section className="Feed">
      <SectionHeading heading="Home" />
      <CreatePost />
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </section>
  );
};

export default FeedSection;
