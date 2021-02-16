import React from 'react';
import { Box } from 'rebass';
import { node } from 'prop-types';

const Badge = ({ children, ...props }) => {
  return (
    <Box variant="card" {...props}>
      <Box variant="badge">{children}</Box>
    </Box>
  );
};

Badge.propTypes = {
  children: node,
};

export default Badge;
