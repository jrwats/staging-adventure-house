import React from 'react';
import { node } from 'prop-types';
import Header from '../components/Header';

const HomePage = () => {
  return <Header />;
};

HomePage.propTypes = {
  children: node.isRequired,
};

export default HomePage;
