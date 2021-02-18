import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

const Activities = () => {
  return (
    <div>
      <Header />
      <Link to="/hikes">Hikes</Link>
      <Link to="/dining">Dining</Link>
    </div>
  );
};

export default Activities;
