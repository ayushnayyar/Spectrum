import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from '../components/home/Navbar';
import Body from '../components/home/Body';
import { getPosts } from '../actions/posts';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};

export default Home;
