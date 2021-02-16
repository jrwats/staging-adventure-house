import React from 'react';
// import { Box } from 'rebass';
import Img from 'gatsby-image';

const Thumbnail = ({ ...props}) => (
  <Img 
    style={{width: '200px', height: '200px'}} 
    {...props} />
);

Thumbnail.propTypes = {
};

export default Thumbnail;
